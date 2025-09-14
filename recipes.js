const recipes = [
  {
    baseName: "Львовское Пиво",
    type: "пиво",
    icon: "icons/wheatbeer.png",
    originalAlcohol: 6,
    cookingtime: 8,
    distillruns: 0,
    age: 3,
    wood: 0,
    difficulty: 2,
    variations: [
      {
        name: "Львовское Пиво",
        alcohol: 6,
        ingredients: ["Пшеница (12)", "Семена пшеницы (4)", "Сахар (2)"],
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
    difficulty: 2,
    variations: [
      {
        name: "Черниговское Пиво",
        alcohol: 6,
        ingredients: ["Пшеница (10)", "Семена пшеницы (3)", "Василёк (2)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Светлое Львовское Пиво",
    type: "пиво",
    icon: "icons/eggnog.png",
    originalAlcohol: 5,
    cookingtime: 7,
    distillruns: 0,
    age: 2,
    wood: 1,
    difficulty: 1,
    variations: [
      {
        name: "Светлое Львовское Пиво",
        alcohol: 5,
        ingredients: ["Пшеница (8)", "Семена пшеницы (2)", "Сахар (1)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Светлое Черниговское Пиво",
    type: "пиво",
    icon: "icons/tequila.png",
    originalAlcohol: 5,
    cookingtime: 7,
    distillruns: 0,
    age: 2,
    wood: 1,
    difficulty: 1,
    variations: [
      {
        name: "Светлое Черниговское Пиво",
        alcohol: 5,
        ingredients: ["Пшеница (7)", "Семена пшеницы (2)", "Василёк (1)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Тёмное Львовское Пиво",
    type: "пиво",
    icon: "icons/darkbeer.png",
    originalAlcohol: 8,
    cookingtime: 9,
    distillruns: 0,
    age: 8,
    wood: 6,
    difficulty: 3,
    variations: [
      {
        name: "Тёмное Львовское Пиво",
        alcohol: 8,
        ingredients: ["Пшеница (16)", "Какао-бобы (3)", "Сахар (2)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Тёмное Черниговское Пиво",
    type: "пиво",
    icon: "icons/rum.png",
    originalAlcohol: 8,
    cookingtime: 9,
    distillruns: 0,
    age: 8,
    wood: 6,
    difficulty: 3,
    variations: [
      {
        name: "Тёмное Черниговское Пиво",
        alcohol: 8,
        ingredients: ["Пшеница (14)", "Какао-бобы (2)", "Сахар (2)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Красное Вино",
    type: "вино",
    icon: "icons/wine.png",
    originalAlcohol: 12,
    cookingtime: 6,
    distillruns: 0,
    age: 20,
    wood: 2,
    difficulty: 4,
    variations: [
      {
        name: "Красное Вино",
        alcohol: 12,
        ingredients: ["Сладкие ягоды (8)", "Сахар (3)", "Одуванчик (2)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Медовик",
    type: "медовик",
    icon: "icons/medovik.png",
    originalAlcohol: 10,
    cookingtime: 4,
    distillruns: 0,
    age: 5,
    wood: 2,
    difficulty: 3,
    variations: [
      {
        name: "Медовик/Золотой Медовик",
        alcohol: 10,
        ingredients: ["Бутылка мёда (4)", "Сахарный тростник (4)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Яблочный Медовик",
    type: "медовик",
    icon: "icons/ap_medovik.png",
    originalAlcohol: 11,
    cookingtime: 5,
    distillruns: 0,
    age: 5,
    wood: 2,
    difficulty: 4,
    variations: [
      {
        name: "Яблочный Медовик",
        alcohol: 11,
        ingredients: ["Бутылка мёда (3)", "Яблоко (3)", "Сахар (2)"],
        effects: ["Регенерация 1 (20-40 сек)"]
      }
    ]
  },
  {
    baseName: "Яблочный Сидр",
    type: "пиво",
    icon: "icons/cidre.png",
    originalAlcohol: 7,
    cookingtime: 6,
    distillruns: 0,
    age: 3,
    wood: 0,
    difficulty: 3,
    variations: [
      {
        name: "Яблочный Сидр",
        alcohol: 7,
        ingredients: ["Яблоко (10)", "Сахар (3)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Яблочный Ликёр",
    type: "крепкий алкоголь",
    icon: "icons/apple_liquor.png",
    originalAlcohol: 14,
    cookingtime: 10,
    distillruns: 2,
    distilltime: 40,
    age: 8,
    wood: 5,
    difficulty: 5,
    variations: [
      {
        name: "Яблочный Ликёр",
        alcohol: 14,
        ingredients: ["Яблоко (10)", "Сахар (4)", "Бутылка мёда (1)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Виски",
    type: "крепкий алкоголь",
    icon: "icons/whiskey.png",
    originalAlcohol: 20,
    cookingtime: 10,
    distillruns: 2,
    distilltime: 50,
    age: 18,
    wood: 4,
    difficulty: 7,
    variations: [
      {
        name: "Виски/Шотландский Виски",
        alcohol: 20,
        ingredients: ["Пшеница (12)", "Семена пшеницы (3)", "Какао-бобы (1)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Пряный Ром",
    type: "крепкий алкоголь",
    icon: "icons/rum.png",
    originalAlcohol: 22,
    cookingtime: 7,
    distillruns: 2,
    distilltime: 35,
    age: 12,
    wood: 2,
    difficulty: 6,
    variations: [
      {
        name: "Пряный Ром",
        alcohol: 22,
        ingredients: ["Сахарный тростник (15)", "Какао-бобы (2)", "Сахар (3)"],
        effects: ["Огнестойкость 1 (20-60 сек)"]
      }
    ]
  },
  {
    baseName: "Водка",
    type: "крепкий алкоголь",
    icon: "icons/vodka.png",
    originalAlcohol: 18,
    cookingtime: 12,
    distillruns: 3,
    distilltime: 40,
    age: 0,
    wood: 0,
    difficulty: 4,
    variations: [
      {
        name: "Водка",
        alcohol: 18,
        ingredients: ["Картофель (12)", "Семена пшеницы (2)"],
        effects: ["Слабость 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Грибная Водка",
    type: "крепкий алкоголь",
    icon: "icons/shroom_vodka.png",
    originalAlcohol: 16,
    cookingtime: 14,
    distillruns: 4,
    distilltime: 45,
    age: 0,
    wood: 0,
    difficulty: 7,
    variations: [
      {
        name: "Грибная Водка",
        alcohol: 16,
        ingredients: ["Картофель (10)", "Красный гриб (2)", "Коричневый гриб (2)", "Семена пшеницы (1)"],
        effects: ["Ночное зрение 1 (20-40 сек)", "Тошнота 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Джин",
    type: "крепкий алкоголь",
    icon: "icons/gin.png",
    originalAlcohol: 18,
    cookingtime: 7,
    distillruns: 2,
    distilltime: 40,
    age: 0,
    wood: 0,
    difficulty: 6,
    variations: [
      {
        name: "Джин",
        alcohol: 18,
        ingredients: ["Пшеница (8)", "Василёк (4)", "Одуванчик (2)", "Сахар (1)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Текила",
    type: "крепкий алкоголь",
    icon: "icons/tequila.png",
    originalAlcohol: 20,
    cookingtime: 12,
    distillruns: 2,
    distilltime: 45,
    age: 10,
    wood: 1,
    difficulty: 5,
    variations: [
      {
        name: "Текила",
        alcohol: 20,
        ingredients: ["Кактус (10)", "Сахар (3)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Абсент",
    type: "крепкий алкоголь",
    icon: "icons/absinthe.png",
    originalAlcohol: 40,
    cookingtime: 5,
    distillruns: 5,
    distilltime: 70,
    age: 0,
    wood: 0,
    difficulty: 8,
    variations: [
      {
        name: "Абсент",
        alcohol: 40,
        ingredients: ["Трава (12)", "Василёк (2)", "Сахар (2)", "Светокаменная пыль (1)"],
        effects: ["Ночное зрение 1 (20-40 сек)", "Тошнота 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Зелёный Абсент",
    type: "крепкий алкоголь",
    icon: "icons/gr_absinthe.png",
    originalAlcohol: 45,
    cookingtime: 6,
    distillruns: 6,
    distilltime: 80,
    age: 0,
    wood: 0,
    difficulty: 9,
    variations: [
      {
        name: "Зелёный Абсент/Ярко-зелёный Абсент",
        alcohol: 45,
        ingredients: ["Трава (15)", "Ядовитый картофель (2)", "Василёк (2)", "Светокаменная пыль (1)"],
        effects: ["Ночное зрение 1 (20-40 сек)", "Тошнота 1 (10-20 сек)", "Отравление 1 (5-10 сек)"]
      }
    ]
  },
  {
    baseName: "Картофельный Суп",
    type: "еда",
    icon: "icons/potato_soup.png",
    originalAlcohol: 0,
    cookingtime: 4,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Картофельный Суп",
        alcohol: 0,
        ingredients: ["Картофель (6)", "Морковь (2)", "Трава (2)"],
        effects: ["Насыщение 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Кофе",
    type: "напиток",
    icon: "icons/coffee.png",
    originalAlcohol: -5,
    cookingtime: 3,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 3,
    variations: [
      {
        name: "Кофе",
        alcohol: -5,
        ingredients: ["Какао-бобы (10)", "Сахар (2)"],
        effects: ["Скорость 1 (20-60 сек)", "Регенерация 1 (5-10 сек)"]
      }
    ]
  },
  {
    baseName: "Яичный Коктейль",
    type: "напиток",
    icon: "icons/eggnog.png",
    originalAlcohol: 8,
    cookingtime: 3,
    distillruns: 0,
    age: 4,
    wood: 2,
    difficulty: 4,
    variations: [
      {
        name: "Яичный Коктейль",
        alcohol: 8,
        ingredients: ["Яйцо (4)", "Сахар (3)", "Ведро молока (1)"],
        effects: []
      }
    ]
  },
  {
    baseName: "Золотая Водка",
    type: "крепкий алкоголь",
    icon: "icons/g_vodka.png",
    originalAlcohol: 42,
    cookingtime: 15,
    distillruns: 4,
    distilltime: 50,
    age: 0,
    wood: 0,
    difficulty: 7,
    variations: [
      {
        name: "Золотая Водка",
        alcohol: 42,
        ingredients: ["Картофель (14)", "Золотой самородок (4)", "Семена пшеницы (2)", "Светокаменная пыль (1)"],
        effects: ["Поглощение 1 (20-40 сек)", "Тошнота 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Горящий Виски",
    type: "крепкий алкоголь",
    icon: "icons/fire_whiskey.png",
    originalAlcohol: 45,
    cookingtime: 12,
    distillruns: 4,
    distilltime: 55,
    age: 18,
    wood: 4,
    difficulty: 8,
    variations: [
      {
        name: "Горящий Виски/Пылающий Виски",
        alcohol: 45,
        ingredients: ["Пшеница (14)", "Огненный порошок (3)", "Сахар (3)", "Светокаменная пыль (1)"],
        effects: ["Огнестойкость 1 (20-60 сек)", "Увеличение урона 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Горячий Шоколад",
    type: "напиток",
    icon: "icons/hot_choc.png",
    originalAlcohol: 0,
    cookingtime: 3,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 2,
    variations: [
      {
        name: "Горячий Шоколад",
        alcohol: 0,
        ingredients: ["Какао-бобы (6)", "Сахар (2)", "Ведро молока (1)"],
        effects: ["Регенерация 1 (5-15 сек)"]
      }
    ]
  },
  {
    baseName: "Ледяной Кофе",
    type: "напиток",
    icon: "icons/iced_coffee.png",
    originalAlcohol: -8,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 3,
    variations: [
      {
        name: "Ледяной Кофе",
        alcohol: -8,
        ingredients: ["Какао-бобы (8)", "Снежок (3)", "Сахар (2)"],
        effects: ["Скорость 1 (20-40 сек)", "Регенерация 1 (5-10 сек)"]
      }
    ]
  },
  {
    baseName: "Самогон",
    type: "крепкий алкоголь",
    icon: "icons/samogon.png",
    originalAlcohol: 48,
    cookingtime: 12,
    distillruns: 5,
    distilltime: 45,
    age: 5,
    wood: 0,
    difficulty: 6,
    variations: [
      {
        name: "Самогон/Крепкий Самогон",
        alcohol: 48,
        ingredients: ["Картофель (12)", "Сахарный тростник (6)", "Семена пшеницы (3)", "Светокаменная пыль (1)"],
        effects: ["Тошнота 1 (20-40 сек)", "Увеличение урона 1 (10-30 сек)"]
      }
    ]
  },
  {
    baseName: "Квас",
    type: "напиток",
    icon: "icons/kvas.png",
    originalAlcohol: 4,
    cookingtime: 5,
    distillruns: 0,
    age: 2,
    wood: 0,
    difficulty: 3,
    variations: [
      {
        name: "Квас/Домашний Квас",
        alcohol: 4,
        ingredients: ["Пшеница (6)", "Сахарный тростник (3)", "Хлеб (2)"],
        effects: ["Регенерация 1 (10-20 сек)", "Насыщение 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Гречневый Суп",
    type: "еда",
    icon: "icons/kvas.png",
    originalAlcohol: 0,
    cookingtime: 5,
    distillruns: 0,
    age: 1,
    wood: 0,
    difficulty: 2,
    variations: [
      {
        name: "Жидкая Баланда/Гречневый Суп",
        alcohol: 0,
        ingredients: ["Семена пшеницы (5)", "Морковь (2)", "Картофель (2)"],
        effects: ["Насыщение 1 (15-25 сек)", "Регенерация 1 (5-15 сек)"]
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
        name: "Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко (6)", "Сахар (2)", "Ведро молока (1)"],
        effects: ["Скорость 1 (20-40 сек)", "Регенерация 1 (5-15 сек)"]
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
        name: "Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды (6)", "Сахар (2)", "Ведро молока (1)"],
        effects: ["Регенерация 1 (10-20 сек)", "Скорость 1 (15-30 сек)"]
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
        name: "Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза (6)", "Сахар (2)", "Ведро молока (1)"],
        effects: ["Насыщение 1 (10-20 сек)", "Регенерация 1 (5-15 сек)"]
      }
    ]
  },
  {
    baseName: "Чай",
    type: "напиток",
    icon: "icons/tea.png",
    originalAlcohol: -3,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Чай",
        alcohol: -3,
        ingredients: ["Трава (5)", "Одуванчик (2)"],
        effects: ["Скорость 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Шоколадный Коктейль",
    type: "смузи",
    icon: "icons/milkshake.png",
    originalAlcohol: 0,
    cookingtime: 2,
    distillruns: 0,
    age: 0,
    wood: 0,
    difficulty: 1,
    variations: [
      {
        name: "Шоколадный Коктейль",
        alcohol: 0,
        ingredients: ["Ведро молока (2)", "Какао-бобы (2)", "Сахар (2)"],
        effects: ["Регенерация 1 (5-15 сек)", "Насыщение 1 (10-20 сек)"]
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
        name: "Живчик с Яблоком",
        alcohol: 0,
        ingredients: ["Яблоко (6)", "Сахар (3)", "Одуванчик (1)"],
        effects: ["Скорость 1 (20-50 сек)", "Регенерация 1 (5-15 сек)"]
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
        name: "Живчик с Арбузом",
        alcohol: 0,
        ingredients: ["Ломтик арбуза (6)", "Сахар (3)", "Одуванчик (1)"],
        effects: ["Насыщение 1 (10-20 сек)", "Регенерация 1 (5-15 сек)"]
      }
    ]
  },
  {
    baseName: "Одуванчиковый Ликёр",
    type: "крепкий алкоголь",
    icon: "icons/eggnog.png",
    originalAlcohol: 14,
    cookingtime: 8,
    distillruns: 2,
    distilltime: 40,
    age: 6,
    wood: 2,
    difficulty: 5,
    variations: [
      {
        name: "Одуванчиковый Ликёр",
        alcohol: 14,
        ingredients: ["Одуванчик (8)", "Сахар (4)", "Бутылка мёда (1)"],
        effects: ["Регенерация 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Свекольный Спирт",
    type: "крепкий алкоголь",
    icon: "icons/wine.png",
    originalAlcohol: 40,
    cookingtime: 14,
    distillruns: 4,
    distilltime: 50,
    age: 0,
    wood: 0,
    difficulty: 7,
    variations: [
      {
        name: "Свекольный Спирт",
        alcohol: 40,
        ingredients: ["Свёкла (12)", "Сахар (4)", "Семена пшеницы (2)", "Светокаменная пыль (1)"],
        effects: ["Слабость 1 (10-20 сек)", "Увеличение урона 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Саке",
    type: "крепкий алкоголь",
    icon: "icons/vodka.png",
    originalAlcohol: 15,
    cookingtime: 10,
    distillruns: 1,
    distilltime: 40,
    age: 5,
    wood: 11,
    difficulty: 5,
    variations: [
      {
        name: "Саке",
        alcohol: 15,
        ingredients: ["Пшеница (8)", "Сахар (3)", "Бамбук (4)"],
        effects: ["Регенерация 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Тыквенное Пиво",
    type: "пиво",
    icon: "icons/medovik.png",
    originalAlcohol: 7,
    cookingtime: 8,
    distillruns: 0,
    age: 4,
    wood: 2,
    difficulty: 3,
    variations: [
      {
        name: "Тыквенное Пиво",
        alcohol: 7,
        ingredients: ["Тыква (6)", "Пшеница (6)", "Сахар (2)", "Какао-бобы (1)"],
        effects: ["Насыщение 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Бренди",
    type: "крепкий алкоголь",
    icon: "icons/hot_choc.png",
    originalAlcohol: 20,
    cookingtime: 10,
    distillruns: 2,
    distilltime: 50,
    age: 15,
    wood: 2,
    difficulty: 6,
    variations: [
      {
        name: "Бренди",
        alcohol: 20,
        ingredients: ["Сладкие ягоды (8)", "Яблоко (2)", "Сахар (3)"],
        effects: ["Огнестойкость 1 (20-40 сек)"]
      }
    ]
  },
  {
    baseName: "Лунный Самогон",
    type: "крепкий алкоголь",
    icon: "icons/milkshake.png",
    originalAlcohol: 50,
    cookingtime: 15,
    distillruns: 6,
    distilltime: 60,
    age: 3,
    wood: 0,
    difficulty: 8,
    variations: [
      {
        name: "Лунный Самогон",
        alcohol: 50,
        ingredients: ["Картофель (15)", "Сахарный тростник (8)", "Семена пшеницы (3)", "Светокаменная пыль (2)"],
        effects: ["Тошнота 1 (20-50 сек)", "Увеличение урона 1 (20-40 сек)", "Слабость 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Каша́са",
    type: "крепкий алкоголь",
    icon: "icons/vodka.png",
    originalAlcohol: 42,
    cookingtime: 12,
    distillruns: 4,
    distilltime: 50,
    age: 10,
    wood: 2,
    difficulty: 7,
    variations: [
      {
        name: "Каша́са",
        alcohol: 42,
        ingredients: ["Сахарный тростник (18)", "Сахар (4)", "Какао-бобы (2)", "Светокаменная пыль (1)"],
        effects: ["Огнестойкость 1 (20-60 сек)", "Увеличение урона 1 (10-20 сек)"]
      }
    ]
  },
  {
    baseName: "Чистый Спирт",
    type: "крепкий алкоголь",
    icon: "icons/samogon.png",
    originalAlcohol: 50,
    cookingtime: 15,
    distillruns: 6,
    distilltime: 60,
    age: 0,
    wood: 0,
    difficulty: 9,
    variations: [
      {
        name: "Чистый Спирт",
        alcohol: 50,
        ingredients: ["Пшеница (15)", "Сахар (5)", "Светокаменная пыль (2)", "Ядовитый картофель (2)"],
        effects: ["Тошнота 1 (30-60 сек)", "Увеличение урона 1 (20-40 сек)", "Слабость 1 (20-30 сек)"]
      }
    ]
  }
];
