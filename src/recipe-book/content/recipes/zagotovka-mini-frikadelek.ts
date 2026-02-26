import { NewRecipe } from "../../models/recipe";

export const zagotovkaMiniFrikadelek: NewRecipe = {
  title: "Мини-фрикадельки для заморозки",
  description: "Мини-фрикадельки для супа, запекания и тушения.",
  image: {
    src: "/content/recipes/zagotovka-mini-frikadelek/mini-meatballs-for-freezing2.jpg",
  },
  foodTypes: ["Заготовки"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 0,
    cooking: 20,
  },
  calories: 21,
  servings: 40,
  tools: ["Миска", "Противень", "Герметичный контейнер"],
  ingredients: [
    {
      name: "нежирный говяжий фарш",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "бекон",
      note: "мелко нарезанного",
      amount: {
        value: 2.0,
        unit: "ломтик",
      },
    },
    {
      name: "свежая петрушка",
      note: "нарезанной",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "чеснок",
      note: "измельченного",
      amount: {
        value: 2.0,
        unit: "зубчик",
      },
    },
    {
      name: "тертый сыр Пармезан",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "панировочные сухари",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "яйцо куриное",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "молотый мускатный орех",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "крупная соль",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "молотый черный перец",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В большой миске смешайте говядину, бекон, петрушку, чеснок, пармезан, панировочные сухари, яйцо,мускатный орех, соль и перец. Сформируйте из смеси 40 фрикаделек.",
          ingredientIndexes: [],
          image: {
            src: "/content/recipes/zagotovka-mini-frikadelek/mix-the-minced-meat.jpg",
          },
        },
        {
          body: "Выложите в один слой на противень или на две большие тарелки. Поместите в морозильную камеру на 1 час. После замораживания переложите в герметичный контейнер или полиэтиленовый пакет и поставьте дату.",
          ingredientIndexes: [],
          image: {
            src: "/content/recipes/zagotovka-mini-frikadelek/spread-the-meatballs-on-a-baking-sheet-scaled.jpg",
          },
        },
        {
          body: "Используйте фрикадельки по необходимости при приготовлении различных блюд, не размораживая..",
          ingredientIndexes: [],
          image: {
            src: "/content/recipes/zagotovka-mini-frikadelek/mini-meatballs-for-freezing2.jpg",
          },
        },
      ],
    },
  ],
  notes: [],
};
