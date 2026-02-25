import { NewRecipe } from "../../models/recipe";

export const dranikiKartofelnye: NewRecipe = {
  title: "Драники картофельные",
  description: "Драники - очень простое в приготовлении и максимально сытное блюдо.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/draniki.jpeg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Белорусская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 20,
  },
  calories: 103,
  servings: 6,
  tools: ["Терка", "Миска", "Сковорода"],
  ingredients: [
    {
      name: "картофель",
      note: "",
      amount: {
        value: 750.0,
        unit: "г",
      },
    },
    {
      name: "лук",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "черный перец",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Мелко натрите картофель на терке.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Порежьте мелко лук.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Перемешайте, добавьте соли и свежемолотого перца.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Сразу поджаривайте на раскаленной сковороде на сливочном или растительном масле до готовности.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
