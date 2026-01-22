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
    category: "TexMex",
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
    category: "Pasta",
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
    category: "Kylling",
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
    category: "Fisk",
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
    category: "Kylling",
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
    category: "Pasta",
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
    category: "Suppe",
    ingredients: [
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Poteter", amount: "3 stk" },
      { item: "Sellerirot", amount: "200 g" },
      { item: "Grønnsaksbuljong", amount: "1 liter" },
      { item: "Flatbrød", amount: "1 pakke" }
    ]
  },
  {
    id: "lasagne",
    name: "Klassisk lasagne",
    category: "Pasta",
    ingredients: [
      { item: "Kjøttdeig", amount: "500 g" },
      { item: "Lasagneplater", amount: "1 pakke" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Løk", amount: "1 stk" },
      { item: "Hvitløk", amount: "2 fedd" },
      { item: "Revet ost", amount: "200 g" }
    ]
  },
  {
    id: "ovnsbakt-laks",
    name: "Ovnsbakt laks med sitron",
    category: "Fisk",
    ingredients: [
      { item: "Laksefilet", amount: "600 g" },
      { item: "Sitron", amount: "1 stk" },
      { item: "Poteter", amount: "800 g" },
      { item: "Asparges", amount: "1 bunt" },
      { item: "Olivenolje", amount: "2 ss" }
    ]
  },
  {
    id: "kylling-fajitas",
    name: "Kylling fajitas",
    category: "TexMex",
    ingredients: [
      { item: "Kyllingbryst", amount: "500 g" },
      { item: "Paprika", amount: "2 stk" },
      { item: "Løk", amount: "1 stk" },
      { item: "Fajitakrydder", amount: "1 pose" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Rømme / salsa", amount: "Etter smak" }
    ]
  },
  {
    id: "pizza-margherita",
    name: "Pizza margherita",
    category: "Vegetar",
    ingredients: [
      { item: "Pizzadeig", amount: "1 base" },
      { item: "Pizzasaus", amount: "1 glass" },
      { item: "Mozzarella", amount: "200 g" },
      { item: "Basilikum", amount: "1 bunt" },
      { item: "Olivenolje", amount: "1 ss" }
    ]
  },
  {
    id: "biff-stroganoff",
    name: "Biff stroganoff",
    category: "Kjøtt",
    ingredients: [
      { item: "Biffstrimler", amount: "500 g" },
      { item: "Sopp", amount: "200 g" },
      { item: "Løk", amount: "1 stk" },
      { item: "Matfløte", amount: "2 dl" },
      { item: "Buljong", amount: "1 dl" },
      { item: "Ris eller potetmos", amount: "Til servering" }
    ]
  },
  {
    id: "chili-con-carne",
    name: "Chili con carne",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttdeig", amount: "500 g" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Kidneybønner", amount: "1 boks" },
      { item: "Mais", amount: "1 boks" },
      { item: "Chili / spisskummen", amount: "Etter smak" },
      { item: "Ris", amount: "400 g" }
    ]
  },
  {
    id: "falafel-pita",
    name: "Falafel i pitabrød",
    category: "Vegetar",
    ingredients: [
      { item: "Falafel", amount: "1 pakke" },
      { item: "Pitabrød", amount: "6 stk" },
      { item: "Yoghurtdressing", amount: "1 beger" },
      { item: "Salat", amount: "1 pose" },
      { item: "Tomat og agurk", amount: "1-2 stk" }
    ]
  },
  {
    id: "risotto-sopp",
    name: "Kremet sopprisotto",
    category: "Vegetar",
    ingredients: [
      { item: "Risottoris", amount: "350 g" },
      { item: "Sopp", amount: "250 g" },
      { item: "Løk", amount: "1 stk" },
      { item: "Grønnsaksbuljong", amount: "1 liter" },
      { item: "Parmesan", amount: "50 g" },
      { item: "Smør", amount: "2 ss" }
    ]
  },
  {
    id: "wok-nudler",
    name: "Wok med nudler",
    category: "Asiatisk",
    ingredients: [
      { item: "Kylling eller tofu", amount: "400 g" },
      { item: "Wokgrønnsaker", amount: "1 pose" },
      { item: "Nudler", amount: "300 g" },
      { item: "Soyasaus", amount: "3 ss" },
      { item: "Sesamolje", amount: "1 ss" }
    ]
  },
  {
    id: "omelett",
    name: "Omelett med grønnsaker",
    category: "Vegetar",
    ingredients: [
      { item: "Egg", amount: "6 stk" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Spinat", amount: "1 pose" },
      { item: "Løk", amount: "1 stk" },
      { item: "Revet ost", amount: "50 g" }
    ]
  },
  {
    id: "pannekaker",
    name: "Pannekaker med blåbær",
    category: "Vegetar",
    ingredients: [
      { item: "Melk", amount: "6 dl" },
      { item: "Hvetemel", amount: "3 dl" },
      { item: "Egg", amount: "3 stk" },
      { item: "Smør til steking", amount: "2 ss" },
      { item: "Blåbærsyltetøy", amount: "1 glass" }
    ]
  },
  {
    id: "laks-pasta",
    name: "Kremet pasta med laks",
    category: "Fisk",
    ingredients: [
      { item: "Pasta", amount: "400 g" },
      { item: "Laksebiter", amount: "400 g" },
      { item: "Fløte eller creme fraiche", amount: "2 dl" },
      { item: "Spinat", amount: "1 pose" },
      { item: "Sitron", amount: "1 stk" }
    ]
  },
  {
    id: "caesarsalat",
    name: "Cæsarsalat med kylling",
    category: "Salat",
    ingredients: [
      { item: "Kyllingbryst", amount: "400 g" },
      { item: "Romaine eller hjertesalat", amount: "2 stk" },
      { item: "Krutonger", amount: "1 pose" },
      { item: "Parmesan", amount: "50 g" },
      { item: "Cæsardressing", amount: "1 flaske" }
    ]
  },
  {
    id: "torsk-curry",
    name: "Mild torskecurry",
    category: "Fisk",
    ingredients: [
      { item: "Torskefileter", amount: "500 g" },
      { item: "Kokosmelk", amount: "1 boks" },
      { item: "Rød curry paste", amount: "1-2 ss" },
      { item: "Gulrot", amount: "2 stk" },
      { item: "Ris", amount: "400 g" }
    ]
  },
  {
    id: "pulled-pork-tacos",
    name: "Pulled pork tacos",
    category: "TexMex",
    ingredients: [
      { item: "Pulled pork", amount: "1 pakke" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Rødkål", amount: "1/2 hode" },
      { item: "Mais", amount: "1 boks" },
      { item: "BBQ-saus", amount: "1 dl" }
    ]
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    category: "Vegetar",
    ingredients: [
      { item: "Egg", amount: "4-6 stk" },
      { item: "Hakket tomat", amount: "2 bokser" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Løk", amount: "1 stk" },
      { item: "Krydder (spisskummen, chili)", amount: "Etter smak" }
    ]
  },
  {
    id: "fiskesuppe",
    name: "Kremet fiskesuppe",
    category: "Fisk",
    ingredients: [
      { item: "Hvit fisk", amount: "500 g" },
      { item: "Gulrot", amount: "2 stk" },
      { item: "Sellerirot", amount: "200 g" },
      { item: "Fløte", amount: "2 dl" },
      { item: "Fiskebuljong", amount: "1 liter" }
    ]
  },
  {
    id: "gryterett",
    name: "Enkel kjøttgryte",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttdeig", amount: "500 g" },
      { item: "Poteter", amount: "600 g" },
      { item: "Gulrøtter", amount: "3 stk" },
      { item: "Løk", amount: "1 stk" },
      { item: "Buljong", amount: "5 dl" }
    ]
  },
  {
    id: "vegetar-taco",
    name: "Vegetar taco med bønner",
    category: "Vegetar",
    ingredients: [
      { item: "Svartbønner", amount: "1 boks" },
      { item: "Mais", amount: "1 boks" },
      { item: "Paprika", amount: "1 stk" },
      { item: "Tortillalefser", amount: "8 stk" },
      { item: "Avokado", amount: "1 stk" }
    ]
  },
  {
    id: "burger",
    name: "Hjemmelagde burgere",
    category: "Kjøtt",
    ingredients: [
      { item: "Kjøttdeig", amount: "600 g" },
      { item: "Burgerbrød", amount: "4-6 stk" },
      { item: "Ost", amount: "4-6 skiver" },
      { item: "Salat og tomat", amount: "Til servering" },
      { item: "Dressing", amount: "Etter smak" }
    ]
  }
];

const storageKeys = {
  plan: "progresjon.weeklyPlanner.plan",
  list: "progresjon.weeklyPlanner.shoppingList",
  reminders: "progresjon.weeklyPlanner.reminders"
};
const defaultServings = 4;

const restSuggestionMap = {
  agurk: ["falafel-pita", "caesarsalat", "vegetar-taco"],
  paprika: ["kylling-fajitas", "wok-nudler", "shakshuka"],
  rømme: ["taco", "pulled-pork-tacos"],
  pesto: ["pasta-pesto", "laks-pasta"],
  "revet ost": ["lasagne", "pizza-margherita", "burger"],
  spinat: ["omelett", "laks-pasta", "wok-nudler"],
  sitron: ["ovnsbakt-laks", "laks-pasta", "fiskesuppe"],
  tortillalefser: ["taco", "vegetar-taco", "pulled-pork-tacos"],
  mais: ["chili-con-carne", "pulled-pork-tacos", "vegetar-taco"]
};

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
const mealFilters = {};
const mealCategoryFilters = {};

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
      migrated[dayKey] = { meal: value, servings: defaultServings, restSource: null };
    } else if (value && typeof value === "object") {
      migrated[dayKey] = {
        meal: value.meal || "",
        servings: value.servings || defaultServings,
        restSource: value.restSource || null
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
    const filterValue = mealFilters[day.key] || "";
    const filterCategory = mealCategoryFilters[day.key] || "";

    card.innerHTML = `
      <div class="day-card__header">
        <span class="day-card__dot"></span>
        <div class="day-card__title">${day.label}</div>
      </div>
      <div class="input-grid">
        <div class="input-row">
          <label class="input-label" for="select-${day.key}">Velg middag</label>
          <input class="input" type="text" placeholder="Søk etter rett" value="${filterValue}" data-day-filter="${day.key}" aria-label="Søk etter rett for ${day.label}">
          <div class="input-with-action">
            <select class="select" id="select-${day.key}" data-day="${day.key}">
              ${renderMealOptions(filterValue, selected, filterCategory)}
            </select>
            <button class="button button--ghost button--icon" data-action="clear-meal" data-day="${day.key}" aria-label="Fjern valgt rett">−</button>
          </div>
          <div class="input-row">
            <label class="input-label" for="category-${day.key}">Kategori</label>
            <select class="select" id="category-${day.key}" data-day-category="${day.key}">
              ${renderCategoryOptions(filterCategory)}
            </select>
          </div>
          <div class="meal-results" data-results="${day.key}">
            ${renderMealResults(filterValue, selected, day.key, filterCategory)}
          </div>
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
    ${renderRestTips(meal, dayKey)}
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

function renderRestTips(meal, dayKey) {
  const suggestions = getRestSuggestions(meal, dayKey);
  if (!suggestions.length) {
    return "";
  }
  const nextDay = nextDayKey(dayKey);
  return `
    <div class="rest-tips">
      <div class="rest-tips__header">
        <span class="rest-tips__title">Restetips</span>
        <span class="rest-tips__hint">Planlegg til ${labelForDay(nextDay)}</span>
      </div>
      <div class="rest-tips__list">
        ${suggestions
          .map(
            (sugg) => `
              <button class="rest-tip" data-action="plan-rest" data-day="${dayKey}" data-next="${nextDay}" data-meal="${sugg.id}">
                <span class="rest-tip__name">${sugg.name}</span>
                <span class="rest-tip__tag">${sugg.category || "Uten kategori"}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMealOptions(filterValue, selected, category) {
  const query = (filterValue || "").trim().toLowerCase();
  let filtered = filterMeals(query, category);
  if (selected && !filtered.find((m) => m.id === selected)) {
    const selectedMeal = meals.find((m) => m.id === selected);
    if (selectedMeal) filtered = [selectedMeal, ...filtered];
  }
  if (!filtered.length) {
    return `<option value="">Ingen treff</option>`;
  }
  const options = filtered
    .map(
      (meal) =>
        `<option value="${meal.id}" ${meal.id === selected ? "selected" : ""}>${meal.name}</option>`
    )
    .join("");
  return `<option value="">- Ingen valgt -</option>${options}`;
}

function renderMealResults(filterValue, selected, dayKey, category) {
  const query = (filterValue || "").trim().toLowerCase();
  if (!query && !category) {
    return `<div class="meal-note">Skriv eller velg kategori for å finne retter.</div>`;
  }
  const filtered = filterMeals(query, category);
  if (!filtered.length) {
    return `<div class="meal-note">Ingen treff.</div>`;
  }
  return filtered
    .slice(0, 8)
    .map(
      (meal) => `
      <button class="meal-result ${meal.id === selected ? "is-active" : ""}" data-action="choose-meal" data-day="${dayKey}" data-meal="${meal.id}">
        ${meal.name}
      </button>`
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
      <div class="day-plan__meal-note">${dayState.servings} ${dayState.servings === 1 ? "person" : "personer"} · ${meal.note || "Ingen note"} ${dayState.restSource ? "· planlagt for å bruke rester" : ""}</div>
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
  planState[dayKey] = { meal: mealId, servings: current.servings || defaultServings, restSource: null };
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

function filterMeals(query, category) {
  return meals.filter((meal) => {
    const matchesName = meal.name.toLowerCase().includes(query);
    const matchesCategory = !category || meal.category === category;
    return matchesName && matchesCategory;
  });
}

function renderCategoryOptions(selected) {
  const cats = Array.from(new Set(meals.map((m) => m.category).filter(Boolean))).sort();
  const base = `<option value="">Alle kategorier</option>`;
  const opts = cats
    .map((cat) => `<option value="${cat}" ${cat === selected ? "selected" : ""}>${cat}</option>`)
    .join("");
  return base + opts;
}

function getRestSuggestions(meal, dayKey) {
  if (!meal) return [];
  const lowerIngredients = (meal.ingredients || []).map((ing) => ing.item.toLowerCase());
  const matches = Object.entries(restSuggestionMap).flatMap(([key, suggestions]) => {
    const hit = lowerIngredients.some((name) => name.includes(key));
    if (!hit) return [];
    return suggestions;
  });
  const unique = Array.from(new Set(matches)).filter((id) => id !== meal.id);
  const suggestions = unique
    .map((id) => meals.find((m) => m.id === id))
    .filter(Boolean)
    .slice(0, 3);
  return suggestions;
}

function nextDayKey(dayKey) {
  const idx = dayOrder.findIndex((d) => d.key === dayKey);
  if (idx === -1) return dayOrder[0].key;
  return dayOrder[(idx + 1) % dayOrder.length].key;
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

function clearMeal(dayKey) {
  const current = planState[dayKey] || { servings: defaultServings };
  planState[dayKey] = { meal: "", servings: current.servings || defaultServings, restSource: null };
  saveState(storageKeys.plan, planState);
  const select = document.querySelector(`select[data-day="${dayKey}"]`);
  if (select) {
    select.value = "";
  }
  const resultsEl = document.querySelector(`[data-results="${dayKey}"]`);
  if (resultsEl) {
    resultsEl.innerHTML = renderMealResults(mealFilters[dayKey] || "", "", dayKey);
  }
  refreshDayIngredients(dayKey);
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

function planRestSuggestion(fromDay, toDay, mealId) {
  const fromMeal = planState[fromDay]?.meal || "";
  const toState = planState[toDay] || { servings: defaultServings };
  planState[toDay] = {
    meal: mealId,
    servings: toState.servings || defaultServings,
    restSource: { fromDay, fromMeal }
  };
  saveState(storageKeys.plan, planState);
  refreshDayIngredients(toDay);
  buildPlanner();
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

  if (target.dataset.action === "choose-meal") {
    const dayKey = target.getAttribute("data-day");
    const mealId = target.getAttribute("data-meal");
    const select = document.querySelector(`select[data-day="${dayKey}"]`);
    if (select) {
      select.value = mealId;
    }
    updateMeal(dayKey, mealId);
  }

  if (target.dataset.action === "clear-meal") {
    const dayKey = target.getAttribute("data-day");
    clearMeal(dayKey);
  }

  if (target.dataset.action === "plan-rest") {
    const fromDay = target.getAttribute("data-day");
    const toDay = target.getAttribute("data-next");
    const mealId = target.getAttribute("data-meal");
    planRestSuggestion(fromDay, toDay, mealId);
  }
});

dayGrid.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("input[data-day-filter]")) return;
  const dayKey = target.getAttribute("data-day-filter");
  const value = target.value || "";
  mealFilters[dayKey] = value;
  const select = document.querySelector(`select[data-day="${dayKey}"]`);
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  if (select) {
    select.innerHTML = renderMealOptions(value, dayState.meal, mealCategoryFilters[dayKey] || "");
  }
  const resultsEl = document.querySelector(`[data-results="${dayKey}"]`);
  if (resultsEl) {
    resultsEl.innerHTML = renderMealResults(value, dayState.meal, dayKey, mealCategoryFilters[dayKey] || "");
  }
});

dayGrid.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("select[data-day-category]")) return;
  const dayKey = target.getAttribute("data-day-category");
  const category = target.value || "";
  mealCategoryFilters[dayKey] = category;
  const select = document.querySelector(`select[data-day="${dayKey}"]`);
  const dayState = planState[dayKey] || { meal: "", servings: defaultServings };
  if (select) {
    select.innerHTML = renderMealOptions(mealFilters[dayKey] || "", dayState.meal, category);
  }
  const resultsEl = document.querySelector(`[data-results="${dayKey}"]`);
  if (resultsEl) {
    resultsEl.innerHTML = renderMealResults(mealFilters[dayKey] || "", dayState.meal, dayKey, category);
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
