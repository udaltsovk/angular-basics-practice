import { NewRecipe } from "../../models/recipe";

export const jogurtovyjMarinadDlyaShashlyka: NewRecipe = {
  title: "Йогуртовый маринад для шашлыка",
  description: "Йогуртовый маринад",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/yogurt-marinade-for-barbecue-scaled.jpg",
  },
  foodTypes: ["Маринад"],
  kitchens: ["Грузинская"],
  diets: [],
  durations: {
    preparation: 600,
    cooking: 20,
  },
  calories: 132,
  servings: 1,
  tools: ["Нож", "Кастрюля", "Чайная ложка", "Столовая ложка", "Разделочная доска"],
  ingredients: [
    {
      name: "чеснок",
      note: "крупные зубчики",
      amount: {
        value: 3.0,
        unit: "зубчик",
      },
    },
    {
      name: "йогурт натуральный",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "кинза",
      note: "мелко порезанная",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "корица",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "острый красный перец",
      note: "молотый",
      amount: {
        value: 0.5,
        unit: "ч. л.",
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Вылейте йогурт в большую миску или кастрюльку",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте красный перец",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте измельченный чеснок",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Соль по вкусу и перемешайте",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте кинзу",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте корицу и перемешайте",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
