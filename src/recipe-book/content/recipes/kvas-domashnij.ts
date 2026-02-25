import { NewRecipe } from "../../models/recipe";

export const kvasDomashnij: NewRecipe = {
  title: "Квас домашний",
  description: "Простой рецепт домашнего кваса с дрожжами",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/kvas.jpg",
  },
  foodTypes: ["Напитки"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 0,
    cooking: 2880,
  },
  calories: 158,
  servings: 10,
  tools: ["Емкость на 5 литров"],
  ingredients: [
    {
      name: "вода",
      note: "",
      amount: {
        value: 5.0,
        unit: "л",
      },
    },
    {
      name: "солод",
      note: "",
      amount: {
        value: 180.0,
        unit: "г",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "дрожжи",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Вскипятите воду и влейте в нее солод.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте в жидкость сахар и дайте остыть, перемешивая.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "При достижении комнатной температуры добавляйте дрожжи. Перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Дайте квасу забродить два дня при комнатной температуре, затем разлейте в приготовленные емкости - графин или бутылки.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поставьте напиток в прохладное место, пейте через два дня.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
