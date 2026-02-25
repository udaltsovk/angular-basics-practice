import { NewRecipe } from "../../models/recipe";

export const kishLorenSSemgoj: NewRecipe = {
  title: "Киш лорен с семгой",
  description: "Киш лорен семгой или лотарингский средневековый пирог",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/kish_loren.jpg",
  },
  foodTypes: ["Завтрак"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 60,
    cooking: 30,
  },
  calories: 379,
  servings: 5,
  tools: ["Форма для выпекания 20 см", "Миска", "Бумага для выпечки"],
  ingredients: [
    {
      name: "семга",
      note: "филе",
      amount: {
        value: 300.0,
        unit: "г",
      },
    },
    {
      name: "помидор",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "укроп",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "сливки",
      note: "жирность 10%",
      amount: {
        value: 180.0,
        unit: "мл",
      },
    },
    {
      name: "тертый сыр",
      note: "твердые сорта",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "каперсы",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
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
      name: "сливочное масло",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "мука",
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
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "желток",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
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
