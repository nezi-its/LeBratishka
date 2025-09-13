const container = document.getElementById("recipes-container");
const filter = document.getElementById("type-filter");
const serverIPHostSpan = document.getElementById("server-ip-host");
const serverIPPortSpan = document.getElementById("server-ip-port");

serverIPHostSpan.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIPHostSpan.textContent);
  alert("IP-адрес скопирован!");
});

serverIPPortSpan.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIPPortSpan.textContent);
  alert("Порт скопирован!");
});

const modal = document.createElement("div");
modal.id = "recipe-modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-button">&times;</span>
    <div class="modal-header-content">
      <h2 id="modal-name"></h2>
      <img id="modal-icon" src="" alt="Иконка напитка">
    </div>
    <p><strong>Тип:</strong> <span id="modal-type"></span></p>
    <p><strong>Алкоголь:</strong> <span id="modal-alcohol"></span></p>
    <p><strong>Ингредиенты:</strong></p>
    <ul id="modal-ingredients" class="ingredients-list"></ul>
    <p><strong>Эффекты:</strong></p>
    <ul id="modal-effects" class="effects-list"></ul>
    <p><strong>Время варки:</strong> <span id="modal-cookingtime"></span> мин</p>
    <p><strong>Время выдержки:</strong> <span id="modal-age"></span> дней</p>
    <p><strong>Тип бочки:</strong> <span id="modal-wood"></span></p>
    <div class="card-navigation modal-navigation">
      <button class="nav-button nav-left" id="modal-nav-left" aria-label="Предыдущий вариант">←</button>
      <button class="nav-button nav-right" id="modal-nav-right" aria-label="Следующий вариант">→</button>
    </div>
  </div>
`;
document.body.appendChild(modal);

const closeButton = modal.querySelector(".close-button");
const modalNavLeftButton = modal.querySelector("#modal-nav-left");
const modalNavRightButton = modal.querySelector("#modal-nav-right");

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

let currentModalDrinkFamily = null;
let currentModalVariationIndex = 0;

function updateCardContent(cardElement, drinkFamily, variationIndex) {
  const variation = drinkFamily.variations[variationIndex];
  cardElement.querySelector('.card-name').textContent = variation.name.replace(/&[0-9a-fk-or]/gi, '');
  cardElement.querySelector('.card-alcohol').textContent = `Алкоголь: ${variation.alcohol}`;
  
  const ingredientsList = cardElement.querySelector('.ingredients-list');
  ingredientsList.innerHTML = variation.ingredients.map(i => `<li>${i}</li>`).join("");

  const effectsList = cardElement.querySelector('.effects-list');
  effectsList.innerHTML = variation.effects.map(e => `<li>${e}</li>`).join("");

  cardElement.querySelector('.card-cookingtime').textContent = `Время варки: ${drinkFamily.cookingtime} мин`;
  cardElement.querySelector('.card-age').textContent = `Время выдержки: ${drinkFamily.age} дней`;
  cardElement.querySelector('.card-wood').textContent = `Тип бочки: ${drinkFamily.wood === 0 ? 'Без бочки' : drinkFamily.wood}`;

  cardElement.dataset.currentVariation = variationIndex;

  const navLeftButton = cardElement.querySelector('.nav-left');
  const navRightButton = cardElement.querySelector('.nav-right');

  if (navLeftButton) {
    navLeftButton.disabled = variationIndex === 0;
  }
  if (navRightButton) {
    navRightButton.disabled = variationIndex === drinkFamily.variations.length - 1;
  }
}

function updateModalContent(drinkFamily, variationIndex) {
  const variation = drinkFamily.variations[variationIndex];

  document.getElementById("modal-name").textContent = variation.name.replace(/&[0-9a-fk-or]/gi, '');
  document.getElementById("modal-icon").src = drinkFamily.icon;
  document.getElementById("modal-icon").alt = drinkFamily.baseName + " icon";
  document.getElementById("modal-type").textContent = drinkFamily.type;
  document.getElementById("modal-alcohol").textContent = variation.alcohol;
  document.getElementById("modal-cookingtime").textContent = drinkFamily.cookingtime;
  document.getElementById("modal-age").textContent = drinkFamily.age;
  document.getElementById("modal-wood").textContent = drinkFamily.wood === 0 ? 'Без бочки' : drinkFamily.wood;

  const modalIngredientsList = document.getElementById("modal-ingredients");
  modalIngredientsList.innerHTML = variation.ingredients.map(i => `<li>${i}</li>`).join("");

  const modalEffectsList = document.getElementById("modal-effects");
  modalEffectsList.innerHTML = variation.effects.map(e => `<li>${e}</li>`).join("");

  modalNavLeftButton.disabled = variationIndex === 0;
  modalNavRightButton.disabled = variationIndex === drinkFamily.variations.length - 1;

  currentModalDrinkFamily = drinkFamily;
  currentModalVariationIndex = variationIndex;
}

function switchCardVariation(event, direction) {
  const card = event.currentTarget.closest('.recipe-card');
  const drinkId = card.dataset.drinkId;
  const drinkFamily = recipes.find(r => r.baseName === drinkId);

  if (!drinkFamily || drinkFamily.variations.length <= 1) return;

  let currentVariationIndex = parseInt(card.dataset.currentVariation || 0);
  let newVariationIndex = currentVariationIndex + direction;

  if (newVariationIndex < 0 || newVariationIndex >= drinkFamily.variations.length) {
    return;
  }

  updateCardContent(card, drinkFamily, newVariationIndex);
}

function switchModalVariation(direction) {
  if (!currentModalDrinkFamily || currentModalDrinkFamily.variations.length <= 1) return;

  let newVariationIndex = currentModalVariationIndex + direction;

  if (newVariationIndex < 0 || newVariationIndex >= currentModalDrinkFamily.variations.length) {
    return;
  }

  updateModalContent(currentModalDrinkFamily, newVariationIndex);
}

modalNavLeftButton.addEventListener('click', () => switchModalVariation(-1));
modalNavRightButton.addEventListener('click', () => switchModalVariation(1));

function renderRecipes(type = "all") {
  container.innerHTML = "";
  let filteredFamilies = type === "all" ? recipes : recipes.filter(r => r.type === type);
  
  filteredFamilies.sort((a, b) => {
    a.variations.sort((v1, v2) => v1.alcohol - v2.alcohol);
    b.variations.sort((v1, v2) => v1.alcohol - v2.alcohol);

    const maxAlcoholA = Math.max(...a.variations.map(v => v.alcohol));
    const maxAlcoholB = Math.max(...b.variations.map(v => v.alcohol));

    if (maxAlcoholA === 0 && maxAlcoholB !== 0) return -1;
    if (maxAlcoholA !== 0 && maxAlcoholB === 0) return 1;
    return maxAlcoholB - maxAlcoholA;
  });

  filteredFamilies.forEach(drinkFamily => {
    const initialCardVariationIndex = drinkFamily.variations.length > 1 ? 1 : 0; // Второй вариант, если есть, иначе первый
    const initialCardVariation = drinkFamily.variations[initialCardVariationIndex];

    const card = document.createElement("div");
    card.className = "recipe-card";
    card.dataset.drinkId = drinkFamily.baseName;
    card.dataset.currentVariation = initialCardVariationIndex;

    const showNavigation = drinkFamily.variations.length > 1;

    card.innerHTML = `
      <div class="card-header">
        <span class="card-name">${initialCardVariation.name.replace(/&[0-9a-fk-or]/gi, '')}</span>
        <img src="${drinkFamily.icon}" alt="${drinkFamily.baseName} icon">
      </div>
      <div class="card-body">
        <p class="card-alcohol"><strong>Алкоголь:</strong> ${initialCardVariation.alcohol}</p>
        <p><strong>Ингредиенты:</strong></p>
        <ul class="ingredients-list">${initialCardVariation.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <p><strong>Эффекты:</strong></p>
        <ul class="effects-list">${initialCardVariation.effects.map(e => `<li>${e}</li>`).join("")}</ul>
        <p class="card-cookingtime"><strong>Время варки:</strong> ${drinkFamily.cookingtime} мин</p>
        <p class="card-age"><strong>Время выдержки:</strong> ${drinkFamily.age} дней</p>
        <p class="card-wood"><strong>Тип бочки:</strong> ${drinkFamily.wood === 0 ? 'Без бочки' : drinkFamily.wood}</p>
      </div>
      ${showNavigation ? `
      <div class="card-navigation">
        <button class="nav-button nav-left" aria-label="Предыдущий вариант">←</button>
        <button class="nav-button nav-right" aria-label="Следующий вариант">→</button>
      </div>` : ''}
    `;
    
    container.appendChild(card);

    if (showNavigation) {
      const navLeftButton = card.querySelector('.nav-left');
      const navRightButton = card.querySelector('.nav-right');

      navLeftButton.addEventListener('click', (e) => {
        e.stopPropagation();
        switchCardVariation(e, -1);
      });
      navRightButton.addEventListener('click', (e) => {
        e.stopPropagation();
        switchCardVariation(e, 1);
      });
      navLeftButton.disabled = initialCardVariationIndex === 0;
      navRightButton.disabled = initialCardVariationIndex === drinkFamily.variations.length - 1;
    }

    card.querySelector('.card-body').addEventListener('click', () => {
      openModal(drinkFamily);
    });
  });
}

function openModal(drinkFamily) {
  const modalInitialVariationIndex = drinkFamily.variations.length > 1 ? 1 : 0; // Второй вариант, если есть, иначе первый
  updateModalContent(drinkFamily, modalInitialVariationIndex);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

filter.addEventListener("change", () => renderRecipes(filter.value));

renderRecipes();
