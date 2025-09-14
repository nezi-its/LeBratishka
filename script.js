const container = document.getElementById("recipes-container");
const filter = document.getElementById("type-filter");
const serverIPHostSpan = document.getElementById("server-ip-host");
const serverIPPortSpan = document.getElementById("server-ip-port");
const modal = document.getElementById("recipe-modal");
const closeButton = modal.querySelector(".close-button");

serverIPHostSpan.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIPHostSpan.textContent);
  alert("IP-адрес скопирован!");
});

serverIPPortSpan.addEventListener("click", () => {
  navigator.clipboard.writeText(serverIPPortSpan.textContent);
  alert("Порт скопирован!");
});

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

const woodTypeMap = {
  0: 'Без бочки',
  1: 'Берёзовая',
  2: 'Дубовая',
  3: 'Тропическая',
  4: 'Еловая',
  5: 'Акациевая',
  6: 'Тёмно-дубовая',
  7: 'Багровая',
  8: 'Искажённая',
  9: 'Мангровая',
  10: 'Вишнёвая',
  11: 'Бамбуковая',
  12: 'Резная медь',
  13: 'Бледный дуб',
};

const ingredientNames = {
  'WHEAT': 'Пшеница',
  'WHEAT_SEEDS': 'Семена пшеницы',
  'SUGAR': 'Сахар',
  'CORNFLOWER': 'Василёк',
  'COCOA_BEANS': 'Какао-бобы',
  'SWEET_BERRIES': 'Сладкие ягоды',
  'DANDELION': 'Одуванчик',
  'HONEY_BOTTLE': 'Бутылка мёда',
  'SUGAR_CANE': 'Сахарный тростник',
  'APPLE': 'Яблоко',
  'POTATO': 'Картофель',
  'RED_MUSHROOM': 'Красный гриб',
  'BROWN_MUSHROOM': 'Коричневый гриб',
  'CACTUS': 'Кактус',
  'GRASS': 'Трава',
  'GLOWSTONE_DUST': 'Светокаменная пыль',
  'POISONOUS_POTATO': 'Ядовитый картофель',
  'CARROT': 'Морковь',
  'MILK_BUCKET': 'Ведро молока',
  'SNOWBALL': 'Снежок',
  'BREAD': 'Хлеб',
  'MELON_SLICE': 'Ломтик арбуза',
  'EGG': 'Яйцо',
  'GOLD_NUGGET': 'Золотой самородок',
  'BLAZE_POWDER': 'Огненный порошок',
  'PUMPKIN': 'Тыква',
  'BAMBOO': 'Бамбук',
  'BEETROOT': 'Свёкла'
};

const effectNames = {
  'REGENERATION': 'Регенерация',
  'FIRE_RESISTANCE': 'Огнестойкость',
  'WEAKNESS': 'Слабость',
  'NIGHT_VISION': 'Ночное зрение',
  'CONFUSION': 'Тошнота',
  'POISON': 'Отравление',
  'SATURATION': 'Насыщение',
  'SPEED': 'Скорость',
  'INCREASE_DAMAGE': 'Увеличение урона',
  'ABSORPTION': 'Поглощение'
};

function formatIngredients(ingredients) {
  return ingredients.map(ingredient => {
    const [item, amount] = ingredient.split('/');
    return `${ingredientNames[item] || item} (${amount})`;
  });
}

function formatEffects(effects) {
  return effects.map(effect => {
    const [name, level, duration] = effect.split('/');
    const [minDuration, maxDuration] = duration.split('-').map(Number);
    const durationText = minDuration === maxDuration ? `${minDuration} сек` : `${minDuration}-${maxDuration} сек`;
    return `${effectNames[name] || name} ${level} (${durationText})`;
  });
}

function updateCardContent(cardElement, drinkFamily) {
  const variation = drinkFamily.variations[0];
  cardElement.querySelector('.card-name').textContent = variation.name.replace(/&[0-9a-fk-or]/gi, '');
  cardElement.querySelector('.card-alcohol').textContent = `Алкоголь: ${variation.alcohol}`;
  
  const ingredientsList = cardElement.querySelector('.ingredients-list');
  ingredientsList.innerHTML = variation.ingredients.map(i => `<li>${i}</li>`).join("");

  const effectsList = cardElement.querySelector('.effects-list');
  effectsList.innerHTML = variation.effects.map(e => `<li>${e}</li>`).join("");

  cardElement.querySelector('.card-cookingtime').textContent = `Время варки: ${drinkFamily.cookingtime} мин`;
  cardElement.querySelector('.card-distillruns').textContent = `Количество перегонок: ${drinkFamily.distillruns}`;
  const distillTimeElement = cardElement.querySelector('.card-distilltime');
  if (drinkFamily.distilltime && drinkFamily.distilltime > 0) {
    distillTimeElement.textContent = `Время перегонки: ${drinkFamily.distilltime} сек`;
    distillTimeElement.style.display = 'block';
  } else {
    distillTimeElement.style.display = 'none';
  }
  cardElement.querySelector('.card-age').textContent = `Время выдержки: ${drinkFamily.age} дней`;
  cardElement.querySelector('.card-wood').textContent = `Тип бочки: ${woodTypeMap[drinkFamily.wood] || drinkFamily.wood}`;
  cardElement.querySelector('.card-difficulty').textContent = `Сложность: ${drinkFamily.difficulty}`;
}

function updateModalContent(drinkFamily) {
  const variation = drinkFamily.variations[0];

  document.getElementById("modal-name").textContent = variation.name.replace(/&[0-9a-fk-or]/gi, '');
  document.getElementById("modal-icon").src = drinkFamily.icon;
  document.getElementById("modal-icon").alt = drinkFamily.baseName + " icon";
  document.getElementById("modal-type").textContent = drinkFamily.type;
  document.getElementById("modal-alcohol").textContent = `${variation.alcohol}`;
  document.getElementById("modal-cookingtime").textContent = drinkFamily.cookingtime;
  document.getElementById("modal-distillruns").textContent = drinkFamily.distillruns;
  const modalDistillTime = document.getElementById("modal-distilltime");
  if (drinkFamily.distilltime && drinkFamily.distilltime > 0) {
    modalDistillTime.textContent = `${drinkFamily.distilltime} сек`;
    modalDistillTime.parentElement.style.display = 'block';
  } else {
    modalDistillTime.parentElement.style.display = 'none';
  }
  document.getElementById("modal-age").textContent = drinkFamily.age;
  document.getElementById("modal-wood").textContent = woodTypeMap[drinkFamily.wood] || drinkFamily.wood;
  document.getElementById("modal-difficulty").textContent = drinkFamily.difficulty;

  const modalIngredientsList = document.getElementById("modal-ingredients");
  modalIngredientsList.innerHTML = variation.ingredients.map(i => `<li>${i}</li>`).join("");

  const modalEffectsList = document.getElementById("modal-effects");
  modalEffectsList.innerHTML = variation.effects.map(e => `<li>${e}</li>`).join("");
}

function renderRecipes(filterCategory = "all") {
  container.innerHTML = "";
  let filteredFamilies = [];

  if (filterCategory === "all") {
    filteredFamilies = recipes;
  } else if (filterCategory === "alcoholic") {
    filteredFamilies = recipes.filter(r => r.originalAlcohol > 0);
  } else if (filterCategory === "non-alcoholic") {
    filteredFamilies = recipes.filter(r => r.originalAlcohol <= 0);
  } else if (filterCategory === "strong-alcohol") {
    filteredFamilies = recipes.filter(r => r.originalAlcohol >= 20);
  } else {
    filteredFamilies = recipes.filter(r => r.type === filterCategory);
  }
  
  filteredFamilies.sort((a, b) => {
    const isANonAlcoholic = a.originalAlcohol <= 0;
    const isBNonAlcoholic = b.originalAlcohol <= 0;

    if (isANonAlcoholic && !isBNonAlcoholic) return -1;
    if (!isANonAlcoholic && isBNonAlcoholic) return 1;

    if (a.originalAlcohol !== b.originalAlcohol) {
      return b.originalAlcohol - a.originalAlcohol;
    }
    return a.baseName.localeCompare(b.baseName);
  });

  filteredFamilies.forEach(drinkFamily => {
    const variation = drinkFamily.variations[0];

    const card = document.createElement("div");
    card.className = "recipe-card";
    card.dataset.drinkId = drinkFamily.baseName;

    card.innerHTML = `
      <div class="card-header">
        <span class="card-name">${variation.name.replace(/&[0-9a-fk-or]/gi, '')}</span>
        <img src="${drinkFamily.icon}" alt="${drinkFamily.baseName} icon">
      </div>
      <div class="card-body">
        <p class="card-alcohol"><strong>Алкоголь:</strong> ${variation.alcohol}</p>
        <p><strong>Ингредиенты:</strong></p>
        <ul class="ingredients-list">${variation.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <p><strong>Эффекты:</strong></p>
        <ul class="effects-list">${variation.effects.map(e => `<li>${e}</li>`).join("")}</ul>
        <p class="card-cookingtime"><strong>Время варки:</strong> ${drinkFamily.cookingtime} мин</p>
        <p class="card-distillruns"><strong>Количество перегонок:</strong> ${drinkFamily.distillruns}</p>
        <p class="card-distilltime" style="display: ${drinkFamily.distilltime && drinkFamily.distilltime > 0 ? 'block' : 'none'}"><strong>Время перегонки:</strong> ${drinkFamily.distilltime || ''} сек</p>
        <p class="card-age"><strong>Время выдержки:</strong> ${drinkFamily.age} дней</p>
        <p class="card-wood"><strong>Тип бочки:</strong> ${woodTypeMap[drinkFamily.wood] || drinkFamily.wood}</p>
        <p class="card-difficulty"><strong>Сложность:</strong> ${drinkFamily.difficulty}</p>
      </div>
    `;
    
    container.appendChild(card);

    card.querySelector('.card-body').addEventListener('click', () => {
      updateModalContent(drinkFamily);
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });
}

filter.addEventListener("change", () => renderRecipes(filter.value));

renderRecipes();
