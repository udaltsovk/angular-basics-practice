import { NewRecipe } from "../../models/recipe";

export const kuriczaSKashtanami: NewRecipe = {
  title: "Курица с каштанами",
  description:
    "Каштан - это универсальный продукт, который можно приготовить разными способами. Порадуйте себя этим простым рецептом курицы с каштанами.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/chicken-breast-with-chestnuts.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Португальская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 15,
  },
  calories: 233,
  servings: 2,
  tools: ["Нож", "Разделочная доска", "Сковорода"],
  ingredients: [
    {
      name: "каштаны",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "куриные грудки",
      note: "нарезанных кубиками",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "помидор",
      note: "очищенных от кожуры и семян",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 2.0,
        unit: "зубчик",
      },
    },
    {
      name: "белое вино",
      note: "",
      amount: {
        value: 75.0,
        unit: "мл",
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В сковороду положите оливковое масло, нарезанный лук, измельченный чеснок, курицу и приправьте солью и перцем. Оставьте вариться на некоторое время.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте кусочки помидоров и продолжайте готовить. Через несколько минут добавьте вино и каштаны.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Готовьте на медленном огне, пока каштаны не станут мягкими.",
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
