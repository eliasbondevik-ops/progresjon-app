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

const categoryKeywords = {
  "Kjøtt/Fisk": ["kylling", "kjøtt", "fisk", "laks", "bacon"],
  "Grønnsaker/Frukt": ["banan", "eple", "gulrot", "agurk", "salat", "potet"],
  "Meieri/Egg": ["melk", "ost", "yoghurt", "egg", "smør"],
  Drikke: ["brus", "cola", "juice", "øl", "vin", "kaffe"],
  Snacks: ["chips", "sjokolade", "godteri", "potetgull", "kjeks"],
  Tørrvarer: ["mel", "pasta", "ris", "nudler", "brød"]
};

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.OPEN_AI_KEY || "";

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
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS,PUT",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(data));
}

function parseBody(req, limitBytes = 15 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      if (body.length > limitBytes) {
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
      "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS,PUT",
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

  if (req.method === "POST" && url.pathname === "/api/analyze-receipt") {
    try {
      const body = await parseBody(req);
      const text = (body.text || "").toLowerCase();
      const amount = Number(body.amount || 0);
      const date = body.date || new Date().toISOString().slice(0, 10);

      // Hvis vi har OpenAI-key og bilde, forsøk ekte analyse
      if (OPENAI_API_KEY && body.imageData) {
        const aiResult = await analyzeReceiptWithOpenAI(body.imageData, body.note || "");
        if (aiResult) {
          const normalized = normalizeReceipt(aiResult, amount, date);
          return send(res, 200, { ok: true, ...normalized });
        }
      }

      // Fallback: enkel keyword-kategori og manuelt beløp
      const guessedCategory = guessCategory(text);
      const resp = {
        ok: false,
        total: amount || 0,
        date,
        items: [],
        category: guessedCategory || "Annet",
        note: body.note || "",
        message: "Ingen AI-analyseløsning tilgjengelig"
      };
      return send(res, 200, resp);
    } catch (err) {
      if (err.message && err.message.includes("Request too large")) {
        return send(res, 413, { ok: false, error: "Request too large" });
      }
      console.error(err);
      return send(res, 400, { ok: false, error: "Invalid JSON" });
    }
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

  if ((req.method === "PUT" || req.method === "POST") && url.pathname.startsWith("/api/receipts/")) {
    const id = url.pathname.split("/").pop();
    try {
      const body = await parseBody(req);
      const store = loadStore();
      const idx = store.receipts.findIndex((r) => r.id === id);
      if (idx === -1) return send(res, 404, { ok: false, error: "Not found" });
      const existing = store.receipts[idx];
      const updated = {
        ...existing,
        amount: body.amount !== undefined ? Number(body.amount) : existing.amount,
        date: body.date || existing.date,
        category: body.category || existing.category,
        note: body.note || existing.note,
        imageData: body.imageData || existing.imageData
      };
      store.receipts[idx] = updated;
      saveStore(store);
      return send(res, 200, { ok: true, receipt: updated });
    } catch (err) {
      console.error(err);
      return send(res, 400, { ok: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "PUT" && url.pathname === "/api/state/expense") {
    try {
      const body = await parseBody(req);
      const store = loadStore();
      const monthKey = body.month;
      const id = body.id;
      if (!monthKey || !id) return send(res, 400, { ok: false, error: "month and id required" });
      const month = store.budget?.months?.[monthKey];
      if (!month) return send(res, 404, { ok: false, error: "month not found" });
      const idx = month.expenses.findIndex((e) => e.id === id);
      if (idx === -1) return send(res, 404, { ok: false, error: "expense not found" });
      const existing = month.expenses[idx];
      month.expenses[idx] = {
        ...existing,
        amount: body.amount !== undefined ? Number(body.amount) : existing.amount,
        date: body.date || existing.date,
        category: body.category || existing.category,
        note: body.note || existing.note
      };
      saveStore(store);
      return send(res, 200, { ok: true, expense: month.expenses[idx] });
    } catch (err) {
      console.error(err);
      return send(res, 400, { ok: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "DELETE" && url.pathname.startsWith("/api/state/expense/")) {
    const parts = url.pathname.split("/");
    const monthKey = parts[parts.length - 2];
    const id = parts[parts.length - 1];
    const store = loadStore();
    const month = store.budget?.months?.[monthKey];
    if (!month) return send(res, 404, { ok: false, error: "month not found" });
    const before = month.expenses.length;
    month.expenses = month.expenses.filter((e) => e.id !== id);
    saveStore(store);
    return send(res, 200, { ok: true, removed: before - month.expenses.length });
  }

  send(res, 404, { ok: false, error: "Not found" });
});

function guessCategory(text) {
  if (!text) return null;
  const lower = text.toLowerCase();
  for (const [cat, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some((k) => lower.includes(k))) {
      return cat;
    }
  }
  return null;
}

async function analyzeReceiptWithOpenAI(imageDataUrl, note = "") {
  if (!OPENAI_API_KEY) return null;
  try {
    const prompt = `
Du er en kvitteringsleser for dagligvarer. Returner strengt JSON:
{ "total": number, "currency": "NOK", "date": "YYYY-MM-DD" eller "", "items": [ { "name": "...", "price": number, "category": "" } ] }
Bruk kategorier som stammer fra varenavn (slik som "Kjøtt/Fisk", "Grønnsaker/Frukt", "Meieri/Egg", "Tørrvarer", "Drikke", "Snacks", "Annet").
Hvis du er usikker på dato, sett "".
Summér alle linjer som har tall til total dersom total ikke tydelig finnes.
Tekst fra bruker (notat): ${note}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "Du er en presis kvitteringsleser." },
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: imageDataUrl } }
            ]
          }
        ],
        temperature: 0
      })
    });

    const json = await response.json();
    const content = json.choices?.[0]?.message?.content || "";
    const parsed = safeJsonFromText(content);
    return parsed;
  } catch (err) {
    console.error("OpenAI analysis failed:", err);
    return null;
  }
}

function safeJsonFromText(text) {
  if (!text) return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) return null;
  const slice = text.slice(start, end + 1);
  try {
    return JSON.parse(slice);
  } catch (err) {
    return null;
  }
}

function normalizeReceipt(aiResult, fallbackAmount, fallbackDate) {
  const date = aiResult.date || fallbackDate || new Date().toISOString().slice(0, 10);
  let items = Array.isArray(aiResult.items) ? aiResult.items : [];

  // Mapper kategorier og priser
  items = items.map((item) => {
    const name = item.name || "Vare";
    const price = Number(item.price) || 0;
    const cat = mapCategory(item.category || "", name);
    return { name, price, category: cat };
  });

  const totalFromItems = items.reduce((sum, i) => sum + (Number(i.price) || 0), 0);
  const total = Number(aiResult.total) || totalFromItems || fallbackAmount || 0;

  return {
    ok: true,
    total,
    date,
    items,
    category: guessCategory(items.map((i) => i.name).join(" ")) || "Annet",
    note: aiResult.note || ""
  };
}

function mapCategory(cat, name) {
  if (cat && categoryKeywords[cat]) return cat;
  const lower = `${cat} ${name}`.toLowerCase();
  for (const [k, words] of Object.entries(categoryKeywords)) {
    if (words.some((w) => lower.includes(w))) return k;
  }
  return "Annet";
}

server.listen(PORT, () => {
  console.log(`Budget/receipt service running on http://localhost:${PORT}`);
});
