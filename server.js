const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 3001;
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "store.json");

const defaultStore = () => ({
  plan: {},
  shoppingList: [],
  reminders: {},
  budget: {
    month: currentMonthKey(),
    goal: 4000,
    expenses: []
  },
  receipts: []
});

function currentMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function loadStore() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      ensureDataDir();
      const init = defaultStore();
      fs.writeFileSync(DATA_FILE, JSON.stringify(init, null, 2), "utf-8");
      return init;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return { ...defaultStore(), ...parsed };
  } catch (err) {
    console.error("Failed to load store:", err);
    return defaultStore();
  }
}

function saveStore(store) {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save store:", err);
  }
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function send(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      if (body.length > 5 * 1024 * 1024) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    return res.end();
  }

  if (req.method === "GET" && url.pathname === "/api/health") {
    return send(res, 200, { ok: true, time: new Date().toISOString() });
  }

  if (req.method === "GET" && url.pathname === "/api/state") {
    const store = loadStore();
    return send(res, 200, store);
  }

  if (req.method === "POST" && url.pathname === "/api/state") {
    try {
      const body = await parseBody(req);
      const store = loadStore();
      if (body.plan) store.plan = body.plan;
      if (body.shoppingList) store.shoppingList = body.shoppingList;
      if (body.reminders) store.reminders = body.reminders;
      if (body.budget) store.budget = body.budget;
      saveStore(store);
      return send(res, 200, { ok: true });
    } catch (err) {
      console.error(err);
      return send(res, 400, { ok: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "GET" && url.pathname === "/api/receipts") {
    const store = loadStore();
    return send(res, 200, { receipts: store.receipts });
  }

  if (req.method === "POST" && url.pathname === "/api/receipts") {
    try {
      const body = await parseBody(req);
      const store = loadStore();
      const receipt = {
        id: body.id || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
        date: body.date || new Date().toISOString().slice(0, 10),
        amount: Number(body.amount) || 0,
        category: body.category || "Annet",
        note: body.note || "",
        filename: body.filename || "",
        imageData: body.imageData || "",
        createdAt: new Date().toISOString()
      };
      store.receipts.unshift(receipt);
      saveStore(store);
      return send(res, 200, { ok: true, receipt });
    } catch (err) {
      console.error(err);
      return send(res, 400, { ok: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "DELETE" && url.pathname.startsWith("/api/receipts/")) {
    const id = url.pathname.split("/").pop();
    const store = loadStore();
    const before = store.receipts.length;
    store.receipts = store.receipts.filter((r) => r.id !== id);
    saveStore(store);
    return send(res, 200, { ok: true, removed: before - store.receipts.length });
  }

  send(res, 404, { ok: false, error: "Not found" });
});

server.listen(PORT, () => {
  console.log(`Budget/receipt service running on http://localhost:${PORT}`);
});
