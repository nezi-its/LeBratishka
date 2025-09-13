const recipes = [
  {
    baseName: "Квас",
    type: "пиво",
    icon: "icons/kvas.png",
    originalAlcohol: 3,
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
    type: "смуси",
    icon: "icons/soup.png",
    originalAlcohol: 0,
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
    type: "смуси",
    icon: "icons/apple_smoothie.png",
    originalAlcohol: 0,
    variations: [
      {
        name: "Кислый Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко 4", "Сахар 2"],
        effects: ["Скорость I 20-40 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко 4", "Сахар 2"],
        effects: ["Скорость I 20-40 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Сладкий Яблочный Смузи",
        alcohol: 0,
        ingredients: ["Яблоко 4", "Сахар 2"],
        effects: ["Скорость I 20-40 сек", "Регенерация I 5-10 сек"]
      }
    ]
  },
  {
    baseName: "Ягодный Смузи",
    type: "смуси",
    icon: "icons/berry_smoothie.png",
    originalAlcohol: 0,
    variations: [
      {
        name: "Кислый Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды 5", "Сахар 2"],
        effects: ["Регенерация I 10-20 сек", "Скорость I 10-30 сек"]
      },
      {
        name: "Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды 5", "Сахар 2"],
        effects: ["Регенерация I 10-20 сек", "Скорость I 10-30 сек"]
      },
      {
        name: "Сладкий Ягодный Смузи",
        alcohol: 0,
        ingredients: ["Сладкие ягоды 5", "Сахар 2"],
        effects: ["Регенерация I 10-20 сек", "Скорость I 10-30 сек"]
      }
    ]
  },
  {
    baseName: "Арбузный Смузи",
    type: "смуси",
    icon: "icons/watermelon_smoothie.png",
    originalAlcohol: 0,
    variations: [
      {
        name: "Водянистый Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 3", "Сахар 2"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 3", "Сахар 2"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      },
      {
        name: "Сочный Арбузный Смузи",
        alcohol: 0,
        ingredients: ["Ломтик арбуза 3", "Сахар 2"],
        effects: ["Насыщение I 10-15 сек", "Регенерация I 5-10 сек"]
      }
    ]
  },
  {
    baseName: "Чай",
    type: "чай",
    icon: "icons/tea.png",
    originalAlcohol: 0,
    variations: [
      {
        name: "Слабый Чай",
        alcohol: 0,
        ingredients: ["Трава 2"],
        effects: ["Скорость I 5-10 сек", "Регенерация I 5-15 сек"]
      },
      {
        name: "Чай",
        alcohol: 0,
        ingredients: ["Трава 2"],
        effects: ["Скорость I 5-10 сек", "Регенерация I 5-15 сек"]
      },
      {
        name: "Крепкий Чай",
        alcohol: 0,
        ingredients: ["Трава 2"],
        effects: ["Скорость I 5-10 сек", "Регенерация I 5-15 сек"]
      }
    ]
  },
  {
    baseName: "Молочный Коктейль",
    type: "смуси",
    icon: "icons/milkshake.png",
    originalAlcohol: 0,
    variations: [
      {
        name: "Молочный Коктейль",
        alcohol: 0,
        ingredients: ["Ведро молока 2", "Сахар 2", "Какао-порошок 1"],
        effects: ["Регенерация I 5-10 сек", "Насыщение I 5-15 сек"]
      },
      {
        name: "Шоколадный Коктейль",
        alcohol: 0,
        ingredients: ["Ведро молока 2", "Сахар 2", "Какао-порошок 1"],
        effects: ["Регенерация I 5-10 сек", "Насыщение I 5-15 сек"]
      },
      {
        name: "Ванильный Молочный Коктейль",
        alcohol: 0,
        ingredients: ["Ведро молока 2", "Сахар 2", "Какао-порошок 1"],
        effects: ["Регенерация I 5-10 сек", "Насыщение I 5-15 сек"]
      }
    ]
  },
  {
    baseName: "Пшеничное Львовское Пиво",
    type: "пиво",
    icon: "icons/wheatbeer.png",
    originalAlcohol: 5,
    variations: [
      {
        name: "Тёмный Пшеничный Львовское Пиво",
        alcohol: 4,
        ingredients: ["Пшеница 3"],
        effects: []
      },
      {
        name: "Пшеничное Львовское Пиво",
        alcohol: 5,
        ingredients: ["Пшеница 3"],
        effects: []
      },
      {
        name: "Отборный Пшеничный Львовское Пиво",
        alcohol: 6,
        ingredients: ["Пшеница 3"],
        effects: []
      }
    ]
  },
  {
    baseName: "Черниговское Пиво",
    type: "пиво",
    icon: "icons/beer.png",
    originalAlcohol: 6,
    variations: [
      {
        name: "Черниговское Пиво",
        alcohol: 5,
        ingredients: ["Пшеница 6"],
        effects: []
      },
      {
        name: "Черниговское Пиво (стандарт)", // Добавил для ясности, чтобы отличалось от "слабого"
        alcohol: 6,
        ingredients: ["Пшеница 6"],
        effects: []
      },
      {
        name: "Отборное Черниговское Пиво",
        alcohol: 7,
        ingredients: ["Пшеница 6"],
        effects: []
      }
    ]
  },
  {
    baseName: "Крепкое Черниговское Пиво",
    type: "пиво",
    icon: "icons/darkbeer.png",
    originalAlcohol: 7,
    variations: [
      {
        name: "Тёмное Черниговское Пиво",
        alcohol: 6,
        ingredients: ["Пшеница 6"],
        effects: []
      },
      {
        name: "Крепкое Черниговское Пиво",
        alcohol: 7,
        ingredients: ["Пшеница 6"],
        effects: []
      },
      {
        name: "Отборное Тёмное Черниговское Пиво",
        alcohol: 8,
        ingredients: ["Пшеница 6"],
        effects: []
      }
    ]
  },
  {
    baseName: "Красное Вино",
    type: "вино",
    icon: "icons/wine.png",
    originalAlcohol: 8,
    variations: [
      {
        name: "Простое Вино",
        alcohol: 7,
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
        name: "Отборное Красное Вино",
        alcohol: 9,
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
    variations: [
      {
        name: "Неловкий Медовик",
        alcohol: 8,
        ingredients: ["Сахарный тростник 6"],
        effects: []
      },
      {
        name: "Медовик",
        alcohol: 9,
        ingredients: ["Сахарный тростник 6"],
        effects: []
      },
      {
        name: "Золотой Медовик",
        alcohol: 10,
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
    variations: [
      {
        name: "Яблочный Медовик",
        alcohol: 10,
        ingredients: ["Сахарный тростник 6", "Яблоко 2"],
        effects: ["Подводное дыхание I-II 150 сек"]
      },
      {
        name: "Сладкий Яблочный Медовик",
        alcohol: 11,
        ingredients: ["Сахарный тростник 6", "Яблоко 2"],
        effects: ["Подводное дыхание I-II 150 сек"]
      },
      {
        name: "Сладкий Золотой Яблочный Медовик",
        alcohol: 12,
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
    variations: [
      {
        name: "Прокисший Сидр",
        alcohol: 6,
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
        name: "Отборный Яблочный Сидр",
        alcohol: 8,
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
    variations: [
      {
        name: "Кислый Яблочный Ликёр",
        alcohol: 13,
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
        name: "Кальвадос",
        alcohol: 15,
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
    variations: [
      {
        name: "Неприметный Виски",
        alcohol: 25,
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
        name: "Шотландский Виски",
        alcohol: 27,
        ingredients: ["Пшеница 10"],
        effects: []
      }
    ]
  },
  {
    baseName: "Пряный Ром",
    type: "ром",
    icon: "icons/rum.png",
    originalAlcohol: 30,
    variations: [
      {
        name: "Горький Ром",
        alcohol: 29,
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
        name: "Золотой Пряный Ром",
        alcohol: 31,
        ingredients: ["Сахарный тростник 18"],
        effects: ["Сопротивление огню I 20-100 сек", "Отравление I-0 30-0 сек"]
      }
    ]
  },
  {
    baseName: "Водка",
    type: "водка",
    icon: "icons/vodka.png",
    originalAlcohol: 20,
    variations: [
      {
        name: "Скверная Водка",
        alcohol: 19,
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
        name: "Русская Водка",
        alcohol: 21,
        ingredients: ["Картофель 10"],
        effects: ["Слабость I 15", "Отравление I 10"]
      }
    ]
  },
  {
    baseName: "Грибная Водка",
    type: "водка",
    icon: "icons/shroom_vodka.png",
    originalAlcohol: 18,
    variations: [
      {
        name: "Грибная Водка",
        alcohol: 17, // 18 - 1 (для 2х вариантов, чтобы была разница)
        ingredients: ["Картофель 10", "Красный гриб 3", "Коричневый гриб 3"],
        effects: ["Слабость I 80", "Дезориентация I 27", "Ночное зрение I 50-80", "Слепота I 12-2", "Замедление I 10-3"]
      },
      {
        name: "Светящаяся Грибная Водка",
        alcohol: 19, // 18 + 1
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
    variations: [
      {
        name: "Светлый Джин",
        alcohol: 19,
        ingredients: ["Пшеница 9", "Синие цветы 6", "Яблоко 1"],
        effects: []
      },
      {
        name: "Джин",
        alcohol: 20,
        ingredients: ["Пшеница 9", "Синие цветы 6", "Яблоко 1"],
        effects: []
      },
      {
        name: "Старый Том Джин",
        alcohol: 21,
        ingredients: ["Пшеница 9", "Синие цветы 6", "Яблоко 1"],
        effects: []
      }
    ]
  },
  {
    baseName: "Текила",
    type: "крепкий алкоголь",
    icon: "icons/tequila.png",
    originalAlcohol: 20,
    variations: [
      {
        name: "Мезкаль",
        alcohol: 19,
        ingredients: ["Кактус 8"],
        effects: []
      },
      {
        name: "Текила",
        alcohol: 20,
        ingredients: ["Кактус 8"],
        effects: []
      },
      {
        name: "Аньехо Текила",
        alcohol: 21,
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
    variations: [
      {
        name: "Плохой Абсент",
        alcohol: 41,
        ingredients: ["Трава 15"],
        effects: ["Отравление I 15-25"]
      },
      {
        name: "Абсент",
        alcohol: 42,
        ingredients: ["Трава 15"],
        effects: ["Отравление I 15-25"]
      },
      {
        name: "Крепкий Абсент",
        alcohol: 43,
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
    variations: [
      {
        name: "Зелёный Абсент",
        alcohol: 45,
        ingredients: ["Трава 17", "Ядовитый картофель 2"],
        effects: ["Отравление I 25-40", "Мгновенный урон II", "Ночное зрение I 40-60"]
      },
      {
        name: "Ярко-зелёный Абсент",
        alcohol: 47,
        ingredients: ["Трава 17", "Ядовитый картофель 2"],
        effects: ["Отравление I 25-40", "Мгновенный урон II", "Ночное зрение I 40-60"]
      }
    ]
  },
  {
    baseName: "Картофельный Суп",
    type: "смуси",
    icon: "icons/potato_soup.png",
    originalAlcohol: 0,
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
    type: "чай",
    icon: "icons/coffee.png",
    originalAlcohol: -6, // Сохраняем оригинальное значение из YAML, но в UI будет 0
    variations: [
      {
        name: "Пресный Кофе",
        alcohol: 0,
        ingredients: ["Какао-бобы 12", "Ведро молока 2"],
        effects: ["Регенерация I 2-5 сек", "Скорость I 30-140 сек"]
      },
      {
        name: "Кофе",
        alcohol: 0,
        ingredients: ["Какао-бобы 12", "Ведро молока 2"],
        effects: ["Регенерация I 2-5 сек", "Скорость I 30-140 сек"]
      },
      {
        name: "Крепкий Кофе",
        alcohol: 0,
        ingredients: ["Какао-бобы 12", "Ведро молока 2"],
        effects: ["Регенерация I 2-5 сек", "Скорость I 30-140 сек"]
      }
    ]
  },
  {
    baseName: "Яичный Коктейль",
    type: "крепкий алкоголь",
    icon: "icons/eggnog.png",
    originalAlcohol: 10,
    variations: [
      {
        name: "Яичный Ликёр",
        alcohol: 9,
        ingredients: ["Яйцо 5", "Сахар 2", "Ведро молока 1"],
        effects: []
      },
      {
        name: "Яичный Коктейль",
        alcohol: 10,
        ingredients: ["Яйцо 5", "Сахар 2", "Ведро молока 1"],
        effects: []
      },
      {
        name: "Адвокат",
        alcohol: 11,
        ingredients: ["Яйцо 5", "Сахар 2", "Ведро молока 1"],
        effects: []
      }
    ]
  },
  {
    baseName: "Золотая Водка",
    type: "водка",
    icon: "icons/g_vodka.png",
    originalAlcohol: 20,
    variations: [
      {
        name: "Протухшая Водка",
        alcohol: 19,
        ingredients: ["Картофель 10", "Золотой самородок 2"],
        effects: ["Слабость I 28", "Отравление I 4"]
      },
      {
        name: "Золотая Водка",
        alcohol: 20,
        ingredients: ["Картофель 10", "Золотой самородок 2"],
        effects: ["Слабость I 28", "Отравление I 4"]
      },
      {
        name: "Сверкающая Золотая Водка",
        alcohol: 21,
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
    variations: [
      {
        name: "Порошковый Виски",
        alcohol: 27,
        ingredients: ["Пшеница 10", "Огненный порошок 2"],
        effects: []
      },
      {
        name: "Горящий Виски",
        alcohol: 28,
        ingredients: ["Пшеница 10", "Огненный порошок 2"],
        effects: []
      },
      {
        name: "Пылающий Виски",
        alcohol: 29,
        ingredients: ["Пшеница 10", "Огненный порошок 2"],
        effects: []
      }
    ]
  },
  {
    baseName: "Горячий Шоколад",
    type: "чай",
    icon: "icons/hot_choc.png",
    originalAlcohol: 0,
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
    type: "чай",
    icon: "icons/iced_coffee.png",
    originalAlcohol: -8, // Сохраняем оригинальное значение из YAML, но в UI будет 0
    variations: [
      {
        name: "Водянистый Кофе",
        alcohol: 0,
        ingredients: ["Печенье 8", "Снежок 4", "Ведро молока 1"],
        effects: ["Регенерация I 30", "Скорость I 10"]
      },
      {
        name: "Ледяной Кофе",
        alcohol: 0,
        ingredients: ["Печенье 8", "Снежок 4", "Ведро молока 1"],
        effects: ["Регенерация I 30", "Скорость I 10"]
      },
      {
        name: "Крепкий Ледяной Кофе",
        alcohol: 0,
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
    variations: [
      {
        name: "Паленый Самогон",
        alcohol: 34,
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
        name: "Крепкий Самогон",
        alcohol: 36,
        ingredients: ["Картофель 12", "Сахарный тростник 4"],
        effects: ["Дезориентация I 20-60 сек", "Отравление I-0 10-30 сек", "Сила I 30-60 сек"]
      }
    ]
  }
];