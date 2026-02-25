import { NewRecipe } from "../../models/recipe";

export const domashnyayaKolbasaIzSvininy: NewRecipe = {
  title: "Домашняя колбаса из свинины",
  description:
    "Рецепт изготовления колбасы в домашних условиях без ароматизаторов и других химических добавок.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/homemade-sausage2.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 360,
    cooking: 50,
  },
  calories: 705,
  servings: 4,
  tools: [
    "Нож",
    "Мясорубка",
    "Нитки",
    "Кастрюля",
    "Противень",
    "Шпажки",
    "Перчатки",
    "Пресс для чеснока",
  ],
  ingredients: [
    {
      name: "жирная свинина",
      note: "",
      amount: {
        value: 1800.0,
        unit: "г",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 3.0,
        unit: "зубчик",
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
      name: "зерна горчицы",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "соленые кишки",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "",
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
