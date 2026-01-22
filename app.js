const dayOrder = [
  { key: "mandag", label: "Mandag" },
  { key: "tirsdag", label: "Tirsdag" },
  { key: "onsdag", label: "Onsdag" },
  { key: "torsdag", label: "Torsdag" },
  { key: "fredag", label: "Fredag" },
  { key: "lordag", label: "Lørdag" },
  { key: "sondag", label: "Søndag" }
];

const meals = [
  {
    id: "taco",
    name: "Taco med grønnsaker",
    note: "Klassiker som funker fint fredag eller lørdag.",
    ingredients: [
      { item: "Kjøttdeig", amount: "400 g" },
      { item: "Tacomiks", amount: "1 pose" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Revet ost", amount: "200 g" },
      { item: "Salsa / rømme", amount: "Etter smak" },
      { item: "Salat, tomat, agurk", amount: "Tilbehør" }
    ]
  },
  {
    id: "spaghetti",
    name: "Spaghetti bolognese",
    note: "Kan lages i større porsjon og fryses.",
    ingredients: [
      { item: "Kjøttdeig/karbonadedeig", amount: "400 g" },
      { item: "Spaghetti", amount: "400 g" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Løk og hvitløk", amount: "1 løk, 2 fedd" },
      { item: "Gulrot", amount: "1 stk" },
      { item: "Parmesan", amount: "Etter smak" }
    ]
  },
  {
    id: "kylling-ovnsbakt",
    name: "Ovnsbakt kylling og poteter",
    note: "Legg alt på ett brett for enkel hverdagsmiddag.",
    ingredients: [
      { item: "Kyllinglår/filét", amount: "600 g" },
      { item: "Poteter", amount: "700 g" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Rødløk", amount: "1 stk" },
      { item: "Olivenolje + krydder", amount: "Smak til" }
    ]
  },
  {
    id: "fiskekaker",
    name: "Fiskekaker og råkost",
    ingredients: [
      { item: "Fiskekaker", amount: "6-8 stk" },
      { item: "Poteter", amount: "600 g" },
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Sitron", amount: "1 stk" },
      { item: "Smør til steking", amount: "1 ss" }
    ]
  },
  {
    id: "curry",
    name: "Kremet kyllingcurry",
    ingredients: [
      { item: "Kyllingbryst", amount: "500 g" },
      { item: "Rød curry paste", amount: "2 ss" },
      { item: "Kokosmelk", amount: "1 boks" },
      { item: "Ris", amount: "400 g" },
      { item: "Brokkoli", amount: "1 stk" },
      { item: "Sukkererter", amount: "1 pose" }
    ]
  },
  {
    id: "pasta-pesto",
    name: "Pasta med grønn pesto",
    ingredients: [
      { item: "Pasta", amount: "400 g" },
      { item: "Grønn pesto", amount: "1 glass" },
      { item: "Pinjekjerner", amount: "1 pose" },
      { item: "Cherrytomat", amount: "1 kurv" },
      { item: "Ruccola", amount: "1 pose" }
    ]
  },
  {
    id: "suppe",
    name: "Grønnsakssuppe",
    ingredients: [
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Poteter", amount: "3 stk" },
      { item: "Sellerirot", amount: "200 g" },
      { item: "Grønnsaksbuljong", amount: "1 liter" },
      { item: "Flatbrød", amount: "1 pakke" }
    ]
  }
];

const storageKeys = {
  plan: "progresjon.weeklyPlanner.plan",
  list: "progresjon.weeklyPlanner.shoppingList",
  reminders: "progresjon.weeklyPlanner.reminders"
};
const defaultServings = 4;

const dayGrid = document.getElementById("day-grid");
const shoppingListEl = document.getElementById("shopping-list");
const clearListButton = document.getElementById("clear-list");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const daySelector = document.getElementById("day-selector");
const dayMealEl = document.getElementById("day-meal");
const reminderListEl = document.getElementById("reminder-list");
const reminderForm = document.getElementById("reminder-form");
const reminderInput = document.getElementById("reminder-input");
let activeTab = "middagsplan";
let activeDayPlan = dayOrder[0].key;

let planState = migratePlanState(loadState(storageKeys.plan, {}));
let shoppingList = loadState(storageKeys.list, []);
let remindersState = loadState(storageKeys.reminders, {});

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.error("Kunne ikke laste lagret data", err);
    return fallback;
  }
}

function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Kunne ikke lagre data", err);
  }
}

function migratePlanState(state) {
  const migrated = {};
  Object.entries(state || {}).forEach(([dayKey, value]) => {
    if (typeof value === "string") {
      migrated[dayKey] = { meal: value, servings: defaultServings };
    } else if (value && typeof value === "object") {
      migrated[dayKey] = {
        meal: value.meal || "",
        servings: value.servings || defaultServings
      };
    }
  });
  return migrated;
}

function setActiveTab(name) {
  activeTab = name;
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === name);
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === name);
  });
}

function buildDaySelector() {
  if (!daySelector) return;
  daySelector.innerHTML = dayOrder
    .map(
      (day) => `
      <button class="day-chip ${activeDayPlan === day.key ? "is-active" : ""}" data-day-select="${day.key}">
        ${day.label}
      </button>`
    )
    .join("");
}

function buildPlanner() {
  dayGrid.innerHTML = "";
  dayOrder.forEach((day) => {
    const card = document.createElement("article");
    card.className = "day-card";
    card.dataset.day = day.key;

    const dayState = planState[day.key] || { meal: "", servings: defaultServings };
    const selected = dayState.meal || "";

    card.innerHTML = `
      <div class="day-card__header">
        <span class="day-card__dot"></span>
        <div class="day-card__title">${day.label}</div>
      </div>
      <div class="input-grid">
        <div class="input-row">
          <label class="input-label" for="select-${day.key}">Velg middag</label>
          <select class="select" id="select-${day.key}" data-day="${day.key}">
            <option value="">- Ingen valgt -</option>
            ${meals
              .map(
                (meal) =>
                  `<option value="${meal.id}" ${meal.id === selected ? "selected" : ""}>${meal.name}</option>`
              )
              .join("")}
          </select>
        </div>
        <div class="input-row">
          <label class="input-label" for="servings-${day.key}">Antall personer</label>
          <select class="select" id="servings-${day.key}" data-day-servings="${day.key}">
            ${[1, 2, 3, 4, 5, 6]
              .map(
                (n) =>
                  `<option value="${n}" ${n === (dayState.servings || defaultServings) ? "selected" : ""}>${n} pers</option>`
              )
              .join("")}
          </select>
        </div>
      </div>
      <div class="ingredients" data-ingredients="${day.key}">${renderIngredientsContent(
        selected,
        day.key,
        dayState.servings
      )}</div>
    `;

    dayGrid.appendChild(card);
  });
}

function renderIngredientsContent(mealId, dayKey, servings = defaultServings) {
  if (!mealId) {
    return `<div class="meal-note">Velg en middag for å se ingrediensene.</div>`;
  }

  const meal = meals.find((m) => m.id === mealId);
  if (!meal) {
    return `<div class="meal-note">Fant ikke retten. Velg på nytt.</div>`;
  }

  const list = meal.ingredients
    .map(
      (ingredient, idx) => `
      <li class="ingredient">
        <div class="ingredient__text">
          <span class="ingredient__name">${ingredient.item}</span>
          <span class="ingredient__amount">${formatAmount(ingredient.amount, servings)}</span>
        </div>
        <button class="button pill-button ${isIngredientInList(ingredient, meal.name, dayKey, servings) ? "is-added" : ""}" data-action="add-ingredient" data-day="${dayKey}" data-index="${idx}" aria-label="${isIngredientInList(ingredient, meal.name, dayKey, servings) ? `Fjern ${ingredient.item} fra handlelisten` : `Legg til ${ingredient.item} i handlelisten`}">
          ${isIngredientInList(ingredient, meal.name, dayKey, servings) ? "−" : "+"}
        </button>
      </li>
    `
    )
    .join("");

  return `
    <div class="meal-name">${meal.name}</div>
    ${meal.note ? `<p class="meal-note">${meal.note}</p>` : ""}
    <p class="meal-note">Mengder tilpasset for ${servings} ${servings === 1 ? "person" : "personer"}.</p>
    <ul class="ingredient-list">${list}</ul>
    <button class="button add-all" data-action="add-all" data-day="${dayKey}" type="button">Legg alle i handlelisten</button>
  `;
}

function renderShoppingList() {
  if (!shoppingList.length) {
    shoppingListEl.innerHTML = `<li class="empty-state">Handlelisten er tom. Trykk + på ingrediensene for å fylle den.</li>`;
    return;
  }

  shoppingListEl.innerHTML = shoppingList
    .map(
      (entry) => `
      <li class="shopping-item">
        <div class="shopping-item__text">
          <span class="shopping-item__name">${entry.item}</span>
          <span class="shopping-item__meta">${entry.amount || "Mengde ikke spesifisert"} · ${entry.sources.join(", ")}</span>
        </div>
        <div class="shopping-item__actions">
          <span class="shopping-item__count">x${entry.count}</span>
          <button class="button button--ghost button--icon" data-action="remove-shopping" data-key="${entry.key}" aria-label="Fjern ${entry.item}">−</button>
        </div>
      </li>
    `
    )
    .join("");
}

function renderDayPlan() {
  if (!dayMealEl || !reminderListEl) return;
  const dayState = planState[activeDayPlan] || { meal: "", servings: defaultServings };
  const meal = meals.find((m) => m.id === dayState.meal);
  if (meal) {
    dayMealEl.innerHTML = `
      <div class="day-plan__meal-title">${meal.name}</div>
      <div class="day-plan__meal-note">${dayState.servings} ${dayState.servings === 1 ? "person" : "personer"} · ${meal.note || "Ingen note"} </div>
    `;
  } else {
    dayMealEl.innerHTML = `<div class="meal-note">Ingen middag valgt for ${labelForDay(activeDayPlan)} enda.</div>`;
  }

  const list = remindersState[activeDayPlan] || [];
  if (!list.length) {
    reminderListEl.innerHTML = `<li class="empty-state">Ingen påminnelser for ${labelForDay(activeDayPlan)}.</li>`;
    return;
  }

  reminderListEl.innerHTML = list
    .map(
      (item) => `
      <li class="reminder-item">
        <div class="reminder-item__text">${item.text}</div>
        <div class="reminder-actions">
          <button class="button button--ghost button--icon" data-action="remove-reminder" data-id="${item.id}" aria-label="Fjern påminnelse">−</button>
        </div>
      </li>
    `
    )
    .join("");
}

function updateMeal(dayKey, mealId) {
  const current = planState[dayKey] || { servings: defaultServings };
  planState[dayKey] = { meal: mealId, servings: current.servings || defaultServings };
  saveState(storageKeys.plan, planState);
  const ingredientsEl = document.querySelector(`[data-ingredients="${dayKey}"]`);
  if (ingredientsEl) {
    ingredientsEl.innerHTML = renderIngredientsContent(mealId, dayKey, planState[dayKey].servings);
  }
  if (dayKey === activeDayPlan) {
    renderDayPlan();
  }
}

function addIngredient(dayKey, index) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const mealId = dayState.meal;
  if (!mealId) return;

  const meal = meals.find((m) => m.id === mealId);
  if (!meal || !meal.ingredients[index]) return;

  toggleIngredient(dayKey, index);
}

function addAllIngredients(dayKey) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const mealId = dayState.meal;
  const meal = meals.find((m) => m.id === mealId);
  if (!meal) return;
  meal.ingredients.forEach((ingredient) =>
    addToShoppingList(withServings(ingredient, dayState.servings), meal.name, dayKey)
  );
  refreshDayIngredients(dayKey);
}

function addToShoppingList(ingredient, mealName, dayKey) {
  const key = `${ingredient.item.toLowerCase()}|${ingredient.amount || ""}`;
  const source = `${mealName} (${labelForDay(dayKey)})`;
  const existing = shoppingList.find((entry) => entry.key === key);

  if (existing) {
    existing.count += 1;
    if (!existing.sources.includes(source)) {
      existing.sources.push(source);
    }
  } else {
    shoppingList.push({
      key,
      item: ingredient.item,
      amount: ingredient.amount,
      count: 1,
      sources: [source]
    });
  }

  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function removeFromShoppingList(ingredient, mealName, dayKey) {
  const key = `${ingredient.item.toLowerCase()}|${ingredient.amount || ""}`;
  const source = `${mealName} (${labelForDay(dayKey)})`;
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return;

  existing.count -= 1;
  existing.sources = existing.sources.filter((s) => s !== source);

  if (existing.count <= 0) {
    shoppingList = shoppingList.filter((entry) => entry.key !== key);
  }

  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function labelForDay(key) {
  const found = dayOrder.find((day) => day.key === key);
  return found ? found.label : key;
}

function removeByKey(key) {
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return;
  existing.count -= 1;
  if (existing.count <= 0) {
    shoppingList = shoppingList.filter((entry) => entry.key !== key);
  }
  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function withServings(ingredient, servings) {
  return {
    ...ingredient,
    amount: formatAmount(ingredient.amount, servings)
  };
}

function isIngredientInList(ingredient, mealName, dayKey, servings = defaultServings) {
  const scaled = withServings(ingredient, servings);
  const key = `${scaled.item.toLowerCase()}|${scaled.amount || ""}`;
  const source = `${mealName} (${labelForDay(dayKey)})`;
  const existing = shoppingList.find((entry) => entry.key === key);
  if (!existing) return false;
  return existing.sources.includes(source);
}

function formatAmount(amount, servings) {
  if (!amount) return "";
  const factor = servings / defaultServings;
  if (factor === 1) return amount;
  const numberRegex = /(\d+(?:[.,]\d+)?)/g;
  return amount.replace(numberRegex, (match) => {
    const normalized = match.replace(",", ".");
    const numeric = parseFloat(normalized);
    if (Number.isNaN(numeric)) return match;
    const scaled = numeric * factor;
    const formatted = Number.isInteger(scaled) ? String(scaled) : scaled.toFixed(1).replace(/\.0$/, "");
    return formatted;
  });
}

function clearShoppingList() {
  shoppingList = [];
  saveState(storageKeys.list, shoppingList);
  renderShoppingList();
}

function refreshDayIngredients(dayKey) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const ingredientsEl = document.querySelector(`[data-ingredients="${dayKey}"]`);
  if (ingredientsEl) {
    ingredientsEl.innerHTML = renderIngredientsContent(dayState.meal, dayKey, dayState.servings);
  }
  if (dayKey === activeDayPlan) {
    renderDayPlan();
  }
}

function toggleIngredient(dayKey, index) {
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  const meal = meals.find((m) => m.id === dayState.meal);
  if (!meal || !meal.ingredients[index]) return;

  const scaled = withServings(meal.ingredients[index], dayState.servings);
  const already = isIngredientInList(meal.ingredients[index], meal.name, dayKey, dayState.servings);

  if (already) {
    removeFromShoppingList(scaled, meal.name, dayKey);
  } else {
    addToShoppingList(scaled, meal.name, dayKey);
  }
  refreshDayIngredients(dayKey);
}

function addReminder(text) {
  const dayList = remindersState[activeDayPlan] || [];
  const item = {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    text: text.trim()
  };
  remindersState = { ...remindersState, [activeDayPlan]: [...dayList, item] };
  saveState(storageKeys.reminders, remindersState);
  renderDayPlan();
}

function removeReminder(id) {
  const dayList = remindersState[activeDayPlan] || [];
  remindersState = {
    ...remindersState,
    [activeDayPlan]: dayList.filter((item) => item.id !== id)
  };
  saveState(storageKeys.reminders, remindersState);
  renderDayPlan();
}

dayGrid.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("select[data-day]")) {
    const dayKey = target.getAttribute("data-day");
    updateMeal(dayKey, target.value);
  }
  if (target.matches("select[data-day-servings]")) {
    const dayKey = target.getAttribute("data-day-servings");
    const servings = Number(target.value) || defaultServings;
    const current = planState[dayKey] || { meal: "", servings: defaultServings };
    planState[dayKey] = { meal: current.meal, servings };
    saveState(storageKeys.plan, planState);
    const ingredientsEl = document.querySelector(`[data-ingredients="${dayKey}"]`);
    if (ingredientsEl) {
      ingredientsEl.innerHTML = renderIngredientsContent(current.meal, dayKey, servings);
    }
    if (dayKey === activeDayPlan) {
      renderDayPlan();
    }
  }
});

dayGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (target.dataset.action === "add-ingredient") {
    const dayKey = target.getAttribute("data-day");
    const index = Number(target.getAttribute("data-index"));
    addIngredient(dayKey, index);
  }

  if (target.dataset.action === "add-all") {
    const dayKey = target.getAttribute("data-day");
    addAllIngredients(dayKey);
  }
});

clearListButton.addEventListener("click", clearShoppingList);

document.querySelector(".topbar")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  const tabName = button.getAttribute("data-tab");
  if (tabName && tabName !== activeTab) {
    setActiveTab(tabName);
  }
});

shoppingListEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='remove-shopping']");
  if (!button) return;
  const key = button.getAttribute("data-key");
  if (!key) return;
  removeByKey(key);
});

daySelector?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-select]");
  if (!button) return;
  const dayKey = button.getAttribute("data-day-select");
  if (!dayKey) return;
  activeDayPlan = dayKey;
  buildDaySelector();
  renderDayPlan();
});

reminderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = reminderInput?.value?.trim();
  if (!text) return;
  addReminder(text);
  reminderInput.value = "";
});

reminderListEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='remove-reminder']");
  if (!button) return;
  const id = button.getAttribute("data-id");
  if (!id) return;
  removeReminder(id);
});

buildPlanner();
renderShoppingList();
setActiveTab(activeTab);
buildDaySelector();
renderDayPlan();
