const container = document.getElementById("recipes-container");
const filter = document.getElementById("type-filter");
const serverIPHostSpan = document.getElementById("server-ip-host"); // Получаем элемент для IP
const serverIPPortSpan = document.getElementById("server-ip-port"); // Получаем элемент для порта

// --- Обработчики копирования IP и Порта ---
serverIPHostSpan.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIPHostSpan.textContent);
  alert("IP-адрес скопирован!");
});

serverIPPortSpan.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIPPortSpan.textContent);
  alert("Порт скопирован!");
});
// --- Конец обработчиков копирования IP и Порта ---


// Модальное окно
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
    <p><strong>Інгредієнти:</strong></p> <!-- Украинская локализация -->
    <ul id="modal-ingredients" class="ingredients-list"></ul>
    <p><strong>Ефекти:</strong></p> <!-- Украинская локализация -->
    <ul id="modal-effects" class="effects-list"></ul>
    <div class="card-navigation modal-navigation">
      <button class="nav-button nav-left" id="modal-nav-left" aria-label="Попередній варіант">←</button> <!-- Украинская локализация -->
      <button class="nav-button nav-right" id="modal-nav-right" aria-label="Наступний варіант">→</button> <!-- Украинская локализация -->
    </div>
  </div>
`;
document.body.appendChild(modal);

const closeButton = modal.querySelector(".close-button");
const modalNavLeftButton = modal.querySelector("#modal-nav-left");
const modalNavRightButton = modal.querySelector("#modal-nav-right");

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Вернуть прокрутку
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Вернуть прокрутку
  }
});

// Глобальные переменные для отслеживания текущего напитка в модальном окне
let currentModalDrinkFamily = null;
let currentModalVariationIndex = 0;


// Функция для обновления содержимого карточки (на главном экране)
function updateCardContent(cardElement, drinkFamily, variationIndex) {
  const variation = drinkFamily.variations[variationIndex];
  cardElement.querySelector('.card-name').textContent = variation.name.replace(/&[0-9a-fk-or]/gi, '');
  cardElement.querySelector('.card-alcohol').textContent = `Алкоголь: ${variation.alcohol}`;
  
  const ingredientsList = cardElement.querySelector('.ingredients-list');
  ingredientsList.innerHTML = variation.ingredients.map(i => `<li>${i}</li>`).join("");

  const effectsList = cardElement.querySelector('.effects-list');
  effectsList.innerHTML = variation.effects.map(e => `<li>${e}</li>`).join("");

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

// Функция для обновления содержимого модального окна
function updateModalContent(drinkFamily, variationIndex) {
  const variation = drinkFamily.variations[variationIndex];

  document.getElementById("modal-name").textContent = variation.name.replace(/&[0-9a-fk-or]/gi, '');
  document.getElementById("modal-icon").src = drinkFamily.icon;
  document.getElementById("modal-icon").alt = drinkFamily.baseName + " icon";
  document.getElementById("modal-type").textContent = drinkFamily.type;
  document.getElementById("modal-alcohol").textContent = variation.alcohol;

  const modalIngredientsList = document.getElementById("modal-ingredients");
  modalIngredientsList.innerHTML = variation.ingredients.map(i => `<li>${i}</li>`).join("");

  const modalEffectsList = document.getElementById("modal-effects");
  modalEffectsList.innerHTML = variation.effects.map(e => `<li>${e}</li>`).join("");

  // Обновляем состояние кнопок навигации в модальном окне
  modalNavLeftButton.disabled = variationIndex === 0;
  modalNavRightButton.disabled = variationIndex === drinkFamily.variations.length - 1;

  currentModalDrinkFamily = drinkFamily;
  currentModalVariationIndex = variationIndex;
}

// Функция для переключения вариантов напитка на главном экране
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

// Функция для переключения вариантов напитка в модальном окне
function switchModalVariation(direction) {
  if (!currentModalDrinkFamily || currentModalDrinkFamily.variations.length <= 1) return;

  let newVariationIndex = currentModalVariationIndex + direction;

  if (newVariationIndex < 0 || newVariationIndex >= currentModalDrinkFamily.variations.length) {
    return;
  }

  updateModalContent(currentModalDrinkFamily, newVariationIndex);
}

// Обработчики кнопок навигации модального окна
modalNavLeftButton.addEventListener('click', () => switchModalVariation(-1));
modalNavRightButton.addEventListener('click', () => switchModalVariation(1));


function renderRecipes(type = "all") {
  container.innerHTML = "";
  let filteredFamilies = type === "all" ? recipes : recipes.filter(r => r.type === type);
  
  // Сортировка: сначала безалкогольные, потом по убыванию алкоголя
  filteredFamilies.sort((a, b) => {
    // Внутри семейства варианты уже отсортированы по алкоголю в recipes.js
    a.variations.sort((v1, v2) => v1.alcohol - v2.alcohol);
    b.variations.sort((v1, v2) => v1.alcohol - v2.alcohol);

    const maxAlcoholA = Math.max(...a.variations.map(v => v.alcohol));
    const maxAlcoholB = Math.max(...b.variations.map(v => v.alcohol));

    // Сначала безалкогольные (alcohol == 0), потом по убыванию алкоголя
    if (maxAlcoholA === 0 && maxAlcoholB !== 0) return -1;
    if (maxAlcoholA !== 0 && maxAlcoholB === 0) return 1;
    return maxAlcoholB - maxAlcoholA;
  });

  filteredFamilies.forEach(drinkFamily => {
    // На главном экране всегда показываем самый слабый вариант (индекс 0, так как отсортировано)
    const initialCardVariationIndex = 0;
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
        <p><strong>Інгредієнти:</strong></p> <!-- Украинская локализация -->
        <ul class="ingredients-list">${initialCardVariation.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <p><strong>Ефекти:</strong></p> <!-- Украинская локализация -->
        <ul class="effects-list">${initialCardVariation.effects.map(e => `<li>${e}</li>`).join("")}</ul>
      </div>
      ${showNavigation ? `
      <div class="card-navigation">
        <button class="nav-button nav-left" aria-label="Попередній варіант">←</button> <!-- Украинская локализация -->
        <button class="nav-button nav-right" aria-label="Наступний варіант">→</button> <!-- Украинская локализация -->
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
      navLeftButton.disabled = true; // Деактивируем левую кнопку по умолчанию
    }

    card.querySelector('.card-body').addEventListener('click', () => {
      openModal(drinkFamily); // Передаем только семейство, модальное окно само найдет средний вариант
    });
  });
}

// Функция для открытия модального окна, по умолчанию выбирает средний вариант
function openModal(drinkFamily) {
  let modalInitialVariationIndex = 0;

  if (drinkFamily.variations.length > 1) {
    let minDiff = Infinity;
    // Находим вариант, алкоголь которого максимально близок к originalAlcohol
    // Если несколько вариантов имеют одинаковую минимальную разницу, берем тот, что ближе к середине
    let closestVariants = [];
    drinkFamily.variations.forEach((v, index) => {
      const diff = Math.abs(v.alcohol - drinkFamily.originalAlcohol);
      if (diff < minDiff) {
        minDiff = diff;
        closestVariants = [{ index, diff }];
      } else if (diff === minDiff) {
        closestVariants.push({ index, diff });
      }
    });

    if (closestVariants.length > 0) {
      // Если есть варианты с одинаковой минимальной разницей, выбираем тот, что ближе к "середине" массива
      // Т.к. варианты уже отсортированы по алкоголю, то "средний" вариант будет по индексу, если есть 3 варианта, это будет index 1.
      if (closestVariants.length === 3) {
        modalInitialVariationIndex = closestVariants[1].index; // Средний из трех
      } else if (closestVariants.length === 2 && drinkFamily.variations.length === 3) {
          // Если 3 варианта, но средний алкоголь совпадает с одним из крайних,
          // берем тот из 2х, что ближе к середине массива.
          modalInitialVariationIndex = closestVariants.find(cv => cv.index === 1)?.index || closestVariants[0].index;
      } else {
        modalInitialVariationIndex = closestVariants[0].index; // Если 1 или 2 варианта, или не 3, берем первый найденный
      }
    }
  }
  
  updateModalContent(drinkFamily, modalInitialVariationIndex);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}


filter.addEventListener("change", () => renderRecipes(filter.value));

renderRecipes(); // Инициализируем рендеринг при загрузке