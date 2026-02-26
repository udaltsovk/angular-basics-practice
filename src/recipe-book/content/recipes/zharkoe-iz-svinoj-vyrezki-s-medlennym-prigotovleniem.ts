import { NewRecipe } from "../../models/recipe";

export const zharkoeIzSvinojVyrezkiSMedlennymPrigotovleniem: NewRecipe = {
  title: "Жаркое из свиной вырезки с медленным приготовлением",
  description:
    "Свиная вырезка или лопатка, приготовленные на медленном огне в невероятном медово-масляном соусе! Для приготовления этого блюда требуется всего 5 ингредиентов, в результате чего, вы получите вкусную запеченную свинину в ароматом соусе!",
  image: {
    src: "/content/recipes/zharkoe-iz-svinoj-vyrezki-s-medlennym-prigotovleniem/slow-cooker-pork-loin-roast-or-pork-shoulder.jpg",
  },
  foodTypes: ["Основное блюдо", "Ужин"],
  kitchens: ["Современная"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 600,
  },
  calories: 959,
  servings: 8,
  tools: [],
  ingredients: [
    {
      name: "свиная шейка",
      note: "или лопатки / филе",
      amount: {
        value: 2.5,
        unit: "кг",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 1.5,
        unit: "ст. л.",
      },
    },
    {
      name: "паприка",
      note: "или тимьяна",
      amount: {
        value: 2.0,
        unit: "ч. л.",
      },
    },
    {
      name: "чесночный порошок",
      note: "или лукового порошка",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "черный перец",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "кайенский перец",
      note: "по желанию",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 2.0,
        unit: "ч. л.",
      },
    },
    {
      name: "мёд",
      note: "",
      amount: {
        value: 0.75,
        unit: "стакан",
      },
    },
    {
      name: "сливочное масло",
      note: "несоленого",
      amount: {
        value: 125.0,
        unit: "г",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 5.0,
        unit: "зубчик",
      },
    },
    {
      name: "яблочный уксус",
      note: "",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "соль",
      note: "по вкусу",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "черный перец",
      note: "по вкусу",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "кукурузная мука",
      note: "",
      amount: {
        value: 3.0,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Натереть специями: Натрите свинину примерно 1 ч.л. оливкового масла. Смешайте специи и посыпьте ими свинину. Размажьте хорошенько, чтобы она прилипла к свинине.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Жарка: Разогрейте 1 ст. ложку оливкового масла в большой сковороде на среднем огне. Добавьте свинину и обжарьте со всех сторон до золотисто-коричневого цвета (не дайте специям сгореть). Поместите свинину в медленноварку.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Медово-чесночный соус: Протрите сковороду. Добавьте сливочное масло и растопите его. Добавьте чеснок и готовьте 1 минуту до золотистого цвета. Добавить оставшиеся ингредиенты соуса, перемешать, быстро кипятить в течение 30 секунд.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
