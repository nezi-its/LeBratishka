const recipes = [
  {
    baseName: "Квас",
    type: "пиво",
    icon: "icons/kvas.png",
    originalAlcohol: 3,
    cookingtime: 5,
    distillruns: 0,
    age: 3,
    wood: 0,
    difficulty: 2,
    variations: [
      {
        name: "Кислый Квас",
        alcohol: 2,
        ingredients: ["Пшеница 8", "Сахар 3"],
        effects: ["Регенерация I 5-15 сек", "Скорость I 20-40 сек"]
      },
      {
        name: "Квас",
        alcohol: 3,
        ingredients: ["Пшеница 8", "Сахар 3"],
        effects: ["Регенерация I 5-15 сек", "Скорость I 20-40 сек"]
      },
      {
        name: "Домашний Квас",
        alcohol: 4,
        ingredients: ["Пшеница 8", "Сахар 3"],
        effects: ["Регенерация I 5-15 сек", "Скорость I 20-40 сек"]
      }
    ]
  },
  {
    baseName: "Гречневый Суп",
    type: "еда", // Changed type from 'смузи' to 'еда' for better categorization
    icon: "icons/soup.png",
    originalAlcohol: 0,
    cookingtime: 6,
    distillruns: 0,
    age: 1,
    wood: 0,
    difficulty: 2,
    variations: [
      {
        name: "Жидкая Баланда",
        alcohol: 0,
        ingredients: ["Семена пшеницы 6", "Пшеница 4"],
        effects: ["Насыщение I 10-20 сек", "Регенерация I 5-15 сек"]
      },
      {
        name: "Гречневый Суп",
        alcohol: 0,
        ingredients: ["Семена пшеницы 6", "Пшеница 4"],
        effects: ["Насыщение I 10-20 сек", "Регенерация I 5-15 сек"]
      },
      {
        name: "Насыщенный Гречневый Суп",
        alcohol: 0,
        ingredients: ["Семена пшеницы 6", "Пшеница 4"],
        effects: ["Насыщение I 10-20 сек", "Регенерация I 5-15 сек"]
      }
    ]
  },
  {
    baseName: "Яблочный Смузи",
    type: "смузи",
    icon: "icons/apple_smoothie.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Кислый Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко 8", "Сахар 3"], // Corrected ingredients to match config
        effects: ["Скорость I 20-40 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко 8", "Сахар 3"],
        effects: ["Скорость I 20-40 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Сладкий Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко 8", "Сахар 3"],
        effects: ["Скорость I 20-40 сек", "Регенерация I 5-10 сек"]
      }
    ]
  },
  {
    baseName: "Ягодный Смузи",
    type: "смузи",
    icon: "icons/berry_smoothie.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Кислый Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды 8", "Сахар 3"], // Corrected ingredients to match config
        effects: ["Регенерация I 10-20 сек", "Скорость I 10-30 сек"]
      },
      {
        name: "Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды 8", "Сахар 3"],
        effects: ["Регенерация I 10-20 сек", "Скорость I 10-30 сек"]
      },
      {
        name: "Сладкий Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды 8", "Сахар 3"],
        effects: ["Регенерация I 10-20 сек", "Скорость I 10-30 сек"]
      }
    ]
  },
  {
    baseName: "Арбузный Смузи",
    type: "смузи",
    icon: "icons/watermelon_smoothie.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Водянистый Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 8", "Сахар 3"], // Corrected ingredients to match config
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 8", "Сахар 3"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Сочный Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 8", "Сахар 3"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      }
    ]
  },
  {
    baseName: "Чай",
    type: "чай",
    icon: "icons/tea.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Слабый Чай",
        alcohol: 0,
        ingredients: ["Трава 6"], // Corrected ingredients to match config
        effects: ["Скорость I 5-10 сек"] // Removed regeneration as it's not in BreweryX config for tea
      },
      {
        name: "Чай",
        alcohol: 0,
        ingredients: ["Трава 6"],
        effects: ["Скорость I 5-10 сек"]
      },
      {
        name: "Крепкий Чай",
        alcohol: 0,
        ingredients: ["Трава 6"],
        effects: ["Скорость I 5-10 сек"]
      }
    ]
  },
  {
    baseName: "Молочный Коктейль",
    type: "смузи", // Changed type from 'смузи' to 'напиток' if we add a 'напиток' category or keep it 'смузи'. Sticking to 'смузи' for now.
    icon: "icons/milkshake.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Пресный Шоколадный Коктейль", // From + lore
        alcohol: 0,
        ingredients: ["Ведро молока 2", "Сахар 2", "Какао-бобы 1"], // Corrected ingredient name
        effects: ["Регенерация I 5-10 сек", "Насыщение I 5-15 сек"]
      },
      {
        name: "Вкусный Шоколадный Коктейль", // From ++ lore
        alcohol: 0,
        ingredients: ["Ведро молока 2", "Сахар 2", "Какао-бобы 1"],
        effects: ["Регенерация I 5-10 сек", "Насыщение I 5-15 сек"]
      },
      {
        name: "Сочный Шоколадный Коктейль", // From +++ lore
        alcohol: 0,
        ingredients: ["Ведро молока 2", "Сахар 2", "Какао-бобы 1"],
        effects: ["Регенерация I 5-10 сек", "Насыщение I 5-15 сек"]
      }
    ]
  },
  {
    baseName: "Пшеничное Львовское Пиво", // Corrected name from "Svitlo Lviv Beer"
    type: "пиво",
    icon: "icons/wheatbeer.png", // Assuming this icon is suitable for light beer
    originalAlcohol: 5, // Alcohol for Svitlo Lviv Beer
    cookingtime: 8,
    distillruns: 0,
    age: 2,
    wood: 1,
    difficulty: 1,
    variations: [
      {
        name: "Светлое Львовское Пиво", // Original name from config
        alcohol: 5,
        ingredients: ["Пшеница 10"],
        effects: []
      },
      {
        name: "Освежающее Львовское Пиво", // Based on lore for ++
        alcohol: 5,
        ingredients: ["Пшеница 10"],
        effects: []
      },
      {
        name: "Мягкое Львовское Пиво", // Based on lore for +++
        alcohol: 5,
        ingredients: ["Пшеница 10"],
        effects: []
      }
    ]
  },
  {
    baseName: "Черниговское Пиво",
    type: "пиво",
    icon: "icons/beer.png",
    originalAlcohol: 6,
    cookingtime: 8,
    distillruns: 0,
    age: 3,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Черниговское Пиво (обычное)", // from + lore
        alcohol: 6,
        ingredients: ["Пшеница 14"], // Corrected quantity
        effects: []
      },
      {
        name: "Черниговское Пиво",
        alcohol: 6,
        ingredients: ["Пшеница 14"],
        effects: []
      },
      {
        name: "Хрустящее Черниговское Пиво", // from +++ lore
        alcohol: 6,
        ingredients: ["Пшеница 14"],
        effects: []
      }
    ]
  },
  {
    baseName: "Тёмное Черниговское Пиво", // Changed from "Крепкое Черниговское Пиво" to match config
    type: "пиво",
    icon: "icons/darkbeer.png",
    originalAlcohol: 7,
    cookingtime: 8,
    distillruns: 0,
    age: 8,
    wood: 6,
    difficulty: 2,
    variations: [
      {
        name: "Тёмное Черниговское Пиво",
        alcohol: 7,
        ingredients: ["Пшеница 18"], // Corrected quantity
        effects: []
      },
      {
        name: "Насыщенное Тёмное Черниговское Пиво", // from ++ lore
        alcohol: 7,
        ingredients: ["Пшеница 18"],
        effects: []
      },
      {
        name: "Глубокое Тёмное Черниговское Пиво", // from +++ lore
        alcohol: 7,
        ingredients: ["Пшеница 18"],
        effects: []
      }
    ]
  },
  {
    baseName: "Красное Вино",
    type: "вино",
    icon: "icons/wine.png",
    originalAlcohol: 8,
    cookingtime: 5,
    distillruns: 0,
    age: 20,
    wood: 0,
    difficulty: 4,
    variations: [
      {
        name: "Терпкое Вино",
        alcohol: 8,
        ingredients: ["Сладкие ягоды 5"],
        effects: []
      },
      {
        name: "Красное Вино",
        alcohol: 8,
        ingredients: ["Сладкие ягоды 5"],
        effects: []
      },
      {
        name: "Ароматное Красное Вино",
        alcohol: 8,
        ingredients: ["Сладкие ягоды 5"],
        effects: []
      }
    ]
  },
  {
    baseName: "Медовик",
    type: "медовик",
    icon: "icons/medovik.png",
    originalAlcohol: 9,
    cookingtime: 3,
    distillruns: 0,
    age: 4,
    wood: 2,
    difficulty: 2,
    variations: [
      {
        name: "Медовик", // + lore not specified, using base name
        alcohol: 9,
        ingredients: ["Сахарный тростник 6"],
        effects: []
      },
      {
        name: "Золотой Медовик", // From name
        alcohol: 9,
        ingredients: ["Сахарный тростник 6"],
        effects: []
      },
      {
        name: "Сладкий Медовик", // from +++ lore
        alcohol: 9,
        ingredients: ["Сахарный тростник 6"],
        effects: []
      }
    ]
  },
  {
    baseName: "Яблочный Медовик",
    type: "медовик",
    icon: "icons/ap_medovik.png",
    originalAlcohol: 11,
    cookingtime: 4,
    distillruns: 0,
    age: 4,
    wood: 2,
    difficulty: 4,
    variations: [
      {
        name: "Лёгкий Яблочный Медовик", // from + lore
        alcohol: 11,
        ingredients: ["Сахарный тростник 6", "Яблоко 2"],
        effects: ["Подводное дыхание I-II 150 сек"]
      },
      {
        name: "Сладкий Яблочный Медовик", // from ++ lore
        alcohol: 11,
        ingredients: ["Сахарный тростник 6", "Яблоко 2"],
        effects: ["Подводное дыхание I-II 150 сек"]
      },
      {
        name: "Сбалансированный Яблочный Медовик", // from +++ lore
        alcohol: 11,
        ingredients: ["Сахарный тростник 6", "Яблоко 2"],
        effects: ["Подводное дыхание I-II 150 сек"]
      }
    ]
  },
  {
    baseName: "Яблочный Сидр",
    type: "пиво",
    icon: "icons/cidre.png",
    originalAlcohol: 7,
    cookingtime: 7,
    distillruns: 0,
    age: 3,
    wood: 0,
    difficulty: 4,
    variations: [
      {
        name: "Кисловатый Сидр", // from + lore
        alcohol: 7,
        ingredients: ["Яблоко 14"],
        effects: []
      },
      {
        name: "Яблочный Сидр",
        alcohol: 7,
        ingredients: ["Яблоко 14"],
        effects: []
      },
      {
        name: "Благородный Яблочный Сидр", // from +++ lore
        alcohol: 7,
        ingredients: ["Яблоко 14"],
        effects: []
      }
    ]
  },
  {
    baseName: "Яблочный Ликёр",
    type: "крепкий алкоголь",
    icon: "icons/apple_liquor.png",
    originalAlcohol: 14,
    cookingtime: 16,
    distillruns: 3,
    age: 6,
    wood: 5,
    difficulty: 5,
    variations: [
      {
        name: "Резкий Яблочный Ликёр", // from + lore
        alcohol: 14,
        ingredients: ["Яблоко 12"],
        effects: []
      },
      {
        name: "Яблочный Ликёр",
        alcohol: 14,
        ingredients: ["Яблоко 12"],
        effects: []
      },
      {
        name: "Сбалансированный Яблочный Ликёр", // from +++ lore
        alcohol: 14,
        ingredients: ["Яблоко 12"],
        effects: []
      }
    ]
  },
  {
    baseName: "Виски",
    type: "крепкий алкоголь",
    icon: "icons/whiskey.png",
    originalAlcohol: 26,
    cookingtime: 10,
    distillruns: 2,
    distilltime: 50,
    age: 18,
    wood: 4,
    difficulty: 7,
    variations: [
      {
        name: "Мягкий Виски", // from + lore
        alcohol: 26,
        ingredients: ["Пшеница 10"],
        effects: []
      },
      {
        name: "Виски",
        alcohol: 26,
        ingredients: ["Пшеница 10"],
        effects: []
      },
      {
        name: "Шотландский Виски", // from name
        alcohol: 26,
        ingredients: ["Пшеница 10"],
        effects: []
      }
    ]
  },
  {
    baseName: "Пряный Ром",
    type: "крепкий алкоголь", // Changed from "ром" to "крепкий алкоголь" for broader category
    icon: "icons/rum.png",
    originalAlcohol: 30,
    cookingtime: 6,
    distillruns: 2,
    distilltime: 30,
    age: 14,
    wood: 2,
    difficulty: 6,
    variations: [
      {
        name: "Горький Ром", // from + lore
        alcohol: 30,
        ingredients: ["Сахарный тростник 18"],
        effects: ["Сопротивление огню I 20-100 сек", "Отравление I-0 30-0 сек"]
      },
      {
        name: "Пряный Ром",
        alcohol: 30,
        ingredients: ["Сахарный тростник 18"],
        effects: ["Сопротивление огню I 20-100 сек", "Отравление I-0 30-0 сек"]
      },
      {
        name: "Богато Пряный Ром", // from +++ lore
        alcohol: 30,
        ingredients: ["Сахарный тростник 18"],
        effects: ["Сопротивление огню I 20-100 сек", "Отравление I-0 30-0 сек"]
      }
    ]
  },
  {
    baseName: "Водка",
    type: "крепкий алкоголь", // Changed from "водка" to "крепкий алкоголь"
    icon: "icons/vodka.png",
    originalAlcohol: 20,
    cookingtime: 15,
    distillruns: 3,
    age: 0,
    wood: 0,
    difficulty: 4,
    variations: [
      {
        name: "Почти не питьевая Водка", // from + lore
        alcohol: 20,
        ingredients: ["Картофель 10"],
        effects: ["Слабость I 15", "Отравление I 10"]
      },
      {
        name: "Водка",
        alcohol: 20,
        ingredients: ["Картофель 10"],
        effects: ["Слабость I 15", "Отравление I 10"]
      },
      {
        name: "Классическая Русская Водка", // from +++ lore
        alcohol: 20,
        ingredients: ["Картофель 10"],
        effects: ["Слабость I 15", "Отравление I 10"]
      }
    ]
  },
  {
    baseName: "Грибная Водка",
    type: "крепкий алкоголь", // Changed from "водка" to "крепкий алкоголь"
    icon: "icons/shroom_vodka.png",
    originalAlcohol: 18,
    cookingtime: 18,
    distillruns: 5,
    age: 0,
    wood: 0,
    difficulty: 7,
    variations: [
      {
        name: "Грибная Водка", // No explicit + lore
        alcohol: 18,
        ingredients: ["Картофель 10", "Красный гриб 3", "Коричневый гриб 3"],
        effects: ["Слабость I 80", "Дезориентация I 27", "Ночное зрение I 50-80", "Слепота I 12-2", "Замедление I 10-3"]
      },
      {
        name: "Светящаяся Грибная Водка", // From +++ lore
        alcohol: 18,
        ingredients: ["Картофель 10", "Красный гриб 3", "Коричневый гриб 3"],
        effects: ["Слабость I 80", "Дезориентация I 27", "Ночное зрение I 50-80", "Слепота I 12-2", "Замедление I 10-3"]
      }
    ]
  },
  {
    baseName: "Джин",
    type: "крепкий алкоголь",
    icon: "icons/gin.png",
    originalAlcohol: 20,
    cookingtime: 6,
    distillruns: 2,
    age: 0,
    wood: 0,
    difficulty: 6,
    variations: [
      {
        name: "Джин", // No explicit + lore
        alcohol: 20,
        ingredients: ["Пшеница 9", "Василёк 6", "Яблоко 1"], // Corrected ingredient name
        effects: []
      },
      {
        name: "Джин с можжевельником", // from ++ lore
        alcohol: 20,
        ingredients: ["Пшеница 9", "Василёк 6", "Яблоко 1"],
        effects: []
      },
      {
        name: "Сбалансированный Джин", // from +++ lore
        alcohol: 20,
        ingredients: ["Пшеница 9", "Василёк 6", "Яблоко 1"],
        effects: []
      }
    ]
  },
  {
    baseName: "Текила",
    type: "крепкий алкоголь",
    icon: "icons/tequila.png",
    originalAlcohol: 20,
    cookingtime: 15,
    distillruns: 2,
    age: 12,
    wood: 1,
    difficulty: 5,
    variations: [
      {
        name: "Текила", // No explicit lore for variations, using base name
        alcohol: 20,
        ingredients: ["Кактус 8"],
        effects: []
      }
    ]
  },
  {
    baseName: "Абсент",
    type: "крепкий алкоголь",
    icon: "icons/absinthe.png",
    originalAlcohol: 42,
    cookingtime: 3,
    distillruns: 6,
    distilltime: 80,
    age: 0,
    wood: 0,
    difficulty: 8,
    variations: [
      {
        name: "Абсент", // No explicit + lore
        alcohol: 42,
        ingredients: ["Трава 15"],
        effects: ["Отравление I 15-25"]
      },
      {
        name: "Сильный Абсент", // from +++ lore
        alcohol: 42,
        ingredients: ["Трава 15"],
        effects: ["Отравление I 15-25"]
      }
    ]
  },
  {
    baseName: "Ярко-зелёный Абсент",
    type: "крепкий алкоголь",
    icon: "icons/gr_absinthe.png",
    originalAlcohol: 46,
    cookingtime: 5,
    distillruns: 6,
    distilltime: 85,
    age: 0,
    wood: 0,
    difficulty: 9,
    variations: [
      {
        name: "Зелёный Абсент", // from + lore
        alcohol: 46,
        ingredients: ["Трава 17", "Ядовитый картофель 2"],
        effects: ["Отравление I 25-40", "Мгновенный урон II", "Ночное зрение I 40-60"]
      },
      {
        name: "Ярко-зелёный Абсент", // from name
        alcohol: 46,
        ingredients: ["Трава 17", "Ядовитый картофель 2"],
        effects: ["Отравление I 25-40", "Мгновенный урон II", "Ночное зрение I 40-60"]
      },
      {
        name: "Яркий Травяной Абсент", // from +++ lore
        alcohol: 46,
        ingredients: ["Трава 17", "Ядовитый картофель 2"],
        effects: ["Отравление I 25-40", "Мгновенный урон II", "Ночное зрение I 40-60"]
      }
    ]
  },
  {
    baseName: "Картофельный Суп",
    type: "еда", // Changed type from 'смузи' to 'еда'
    icon: "icons/potato_soup.png",
    originalAlcohol: 0,
    cookingtime: 3,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Картофельный Суп",
        alcohol: 0,
        ingredients: ["Картофель 5", "Трава 3"],
        effects: ["Мгновенное лечение I 0-1"]
      }
    ]
  },
  {
    baseName: "Кофе",
    type: "напиток", // Changed type from 'чай' to 'напиток' for better grouping
    icon: "icons/coffee.png",
    originalAlcohol: -6, // Negative alcohol for energy boost
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 3,
    variations: [
      {
        name: "Пресный Кофе", // from + lore
        alcohol: -6,
        ingredients: ["Какао-бобы 12", "Ведро молока 2"],
        effects: ["Регенерация I 2-5 сек", "Скорость I 30-140 сек"]
      },
      {
        name: "Нормальный Кофе", // from ++ lore
        alcohol: -6,
        ingredients: ["Какао-бобы 12", "Ведро молока 2"],
        effects: ["Регенерация I 2-5 сек", "Скорость I 30-140 сек"]
      },
      {
        name: "Крепкий Кофе", // from +++ lore
        alcohol: -6,
        ingredients: ["Какао-бобы 12", "Ведро молока 2"],
        effects: ["Регенерация I 2-5 сек", "Скорость I 30-140 сек"]
      }
    ]
  },
  {
    baseName: "Яичный Коктейль",
    type: "крепкий алкоголь", // Changed type from "крепкий алкоголь"
    icon: "icons/eggnog.png",
    originalAlcohol: 10,
    cookingtime: 2,
    distillruns: 0,
    age: 3,
    wood: 0,
    difficulty: 4,
    variations: [
      {
        name: "Яичный Коктейль", // No explicit + lore
        alcohol: 10,
        ingredients: ["Яйцо 5", "Сахар 2", "Ведро молока 1"],
        effects: []
      }
    ]
  },
  {
    baseName: "Золотая Водка",
    type: "крепкий алкоголь", // Changed from "водка" to "крепкий алкоголь"
    icon: "icons/g_vodka.png",
    originalAlcohol: 22, // Corrected alcohol
    cookingtime: 18,
    distillruns: 3,
    age: 0,
    wood: 0,
    difficulty: 6,
    variations: [
      {
        name: "Золотая Водка", // No explicit lore for variations, using base name
        alcohol: 22,
        ingredients: ["Картофель 10", "Золотой самородок 2"],
        effects: ["Слабость I 28", "Отравление I 4"]
      }
    ]
  },
  {
    baseName: "Горящий Виски",
    type: "крепкий алкоголь",
    icon: "icons/fire_whiskey.png",
    originalAlcohol: 28,
    cookingtime: 12,
    distillruns: 3,
    distilltime: 55,
    age: 18,
    wood: 4,
    difficulty: 7,
    variations: [
      {
        name: "Горящий Виски", // No explicit + lore
        alcohol: 28,
        ingredients: ["Пшеница 10", "Огненный порошок 2"],
        effects: []
      },
      {
        name: "Пылающий Виски", // From name
        alcohol: 28,
        ingredients: ["Пшеница 10", "Огненный порошок 2"],
        effects: []
      }
    ]
  },
  {
    baseName: "Горячий Шоколад",
    type: "напиток", // Changed type from 'чай' to 'напиток'
    icon: "icons/hot_choc.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 2,
    variations: [
      {
        name: "Горячий Шоколад",
        alcohol: 0,
        ingredients: ["Печенье 3"],
        effects: ["Спешка I 40"]
      }
    ]
  },
  {
    baseName: "Ледяной Кофе",
    type: "напиток", // Changed type from 'чай' to 'напиток'
    icon: "icons/iced_coffee.png",
    originalAlcohol: -8,
    cookingtime: 1,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 4,
    variations: [
      {
        name: "Ледяной Кофе", // No explicit + lore
        alcohol: -8,
        ingredients: ["Печенье 8", "Снежок 4", "Ведро молока 1"],
        effects: ["Регенерация I 30", "Скорость I 10"]
      }
    ]
  },
  {
    baseName: "Самогон",
    type: "крепкий алкоголь",
    icon: "icons/samogon.png",
    originalAlcohol: 35,
    cookingtime: 10,
    distillruns: 2,
    distilltime: 40,
    age: 5,
    wood: 0,
    difficulty: 3,
    variations: [
      {
        name: "Паленый Самогон", // from + lore
        alcohol: 35,
        ingredients: ["Картофель 12", "Сахарный тростник 4"],
        effects: ["Дезориентация I 20-60 сек", "Отравление I-0 10-30 сек", "Сила I 30-60 сек"]
      },
      {
        name: "Самогон",
        alcohol: 35,
        ingredients: ["Картофель 12", "Сахарный тростник 4"],
        effects: ["Дезориентация I 20-60 сек", "Отравление I-0 10-30 сек", "Сила I 30-60 сек"]
      },
      {
        name: "Крепкий Самогон", // from +++ lore
        alcohol: 35,
        ingredients: ["Картофель 12", "Сахарный тростник 4"],
        effects: ["Дезориентация I 20-60 сек", "Отравление I-0 10-30 сек", "Сила I 30-60 сек"]
      }
    ]
  },
  {
    baseName: "Живчик с Яблоком",
    type: "напиток",
    icon: "icons/apple_zhuvchyk.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Слегка кислый Живчик с Яблоком",
        alcohol: 0,
        ingredients: ["Яблоко 8", "Сахар 3"],
        effects: ["Регенерация I 5-10 сек", "Скорость I 20-40 сек"]
      },
      {
        name: "Освежающий Живчик с Яблоком",
        alcohol: 0,
        ingredients: ["Яблоко 8", "Сахар 3"],
        effects: ["Регенерация I 5-10 сек", "Скорость I 20-40 сек"]
      },
      {
        name: "Насыщенный, бодрящий Живчик с Яблоком",
        alcohol: 0,
        ingredients: ["Яблоко 8", "Сахар 3"],
        effects: ["Регенерация I 5-10 сек", "Скорость I 20-40 сек"]
      }
    ]
  },
  {
    baseName: "Живчик с Арбузом",
    type: "напиток",
    icon: "icons/watermelon_zhuvchyk.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Водянистый Живчик с Арбузом",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 8", "Сахар 3"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Сочный Живчик с Арбузом",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 8", "Сахар 3"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Летний, освежающий Живчик с Арбузом",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 8", "Сахар 3"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      }
    ]
  }
];
