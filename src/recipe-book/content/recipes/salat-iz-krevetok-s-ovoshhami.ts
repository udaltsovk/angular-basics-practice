import { NewRecipe } from "../../models/recipe";

export const salatIzKrevetokSOvoshhami: NewRecipe = {
  title: "Салат из креветок с овощами",
  description:
    "Очень вкусное блюдо, которое прекрасно подойдет в качестве основного блюда. Салат из креветок с овощами не стоит пропускать.",
  image: {
    src: "/content/recipes/salat-iz-krevetok-s-ovoshhami/shrimp-salad-with-vegetables.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Португальская"],
  diets: ["Низкокалорийная"],
  durations: {
    preparation: 15,
    cooking: 15,
  },
  calories: 43,
  servings: 4,
  tools: ["Противень", "Нож", "Разделочная доска"],
  ingredients: [
    {
      name: "помидор",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "небольшая луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "перец",
      note: "",
      amount: {
        value: 0.5,
        unit: "шт",
      },
    },
    {
      name: "вареные креветки",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
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
      name: "оливковое масло",
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
          body: "Вымойте и очистите овощи, нарезав их небольшими кусочками.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложите их на противень для духовки и приправьте оливковым маслом и небольшим количеством соли.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Готовьте в предварительно разогретой духовке при 180ºC в течение 15 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выньте противень из духовки и положите очищенные креветки на противень.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Верните в духовку еще на 5 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Можно подавать на стол.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
