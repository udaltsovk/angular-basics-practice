import { NewRecipe } from "../../models/recipe";

export const salatIzKurinojGrudkiSSousomPesto: NewRecipe = {
  title: "Салат из куриной грудки с соусом песто",
  description:
    "Здоровый вариант, в котором типичный вкус курицы сочетается с классическим итальянским оттенком соуса песто. Узнайте, как приготовить куриный салат.",
  image: {
    src: "/content/recipes/salat-iz-kurinoj-grudki-s-sousom-pesto/chicken-salad-with-pesto.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Итальянская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 105,
  },
  calories: 352,
  servings: 6,
  tools: ["Нож", "Разделочная доска"],
  ingredients: [
    {
      name: "макароны",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "базилик",
      note: "",
      amount: {
        value: 1.0,
        unit: "пучок",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 1.0,
        unit: "зубчик",
      },
    },
    {
      name: "куриная грудка",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "перец",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "тертый сыр",
      note: "моцарелла или пармезан",
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
          body: "Сварите макароны в воде с солью в соответствии с инструкцией.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разрежьте куриную грудку на 2 или 3 части и приправьте солью и перцем.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Положите немного оливкового масла в сковороду и обжарьте куриную грудку с обеих сторон.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместите базилик, чеснок, сыр и оливковое масло в блендер и смешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В подходящей емкости смешайте макароны, курицу и соус песто.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместите в холодильник на 90 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавать, посыпав тертым сыром.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
