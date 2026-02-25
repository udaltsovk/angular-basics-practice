import { NewRecipe } from "../../models/recipe";

export const pryanyjChajLatteReczeptVDomashnihUsloviyah: NewRecipe = {
  title: "Пряный чай латте - рецепт в домашних условиях",
  description: "Простой рецепт пряного итальянского чая с молоком.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/latte-tea-with-milk.jpg",
  },
  foodTypes: ["Напитки"],
  kitchens: ["Итальянская"],
  diets: [],
  durations: {
    preparation: 5,
    cooking: 5,
  },
  calories: 67,
  servings: 1,
  tools: ["Большая кружка", "Венчик для взбивания молока", "Чайная ложка"],
  ingredients: [
    {
      name: "чай",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "кипяток",
      note: "",
      amount: {
        value: 200.0,
        unit: "мл",
      },
    },
    {
      name: "козье молоко",
      note: "",
      amount: {
        value: 30.0,
        unit: "мл",
      },
    },
    {
      name: "белый сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "молотый кардамон",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Положите пакетик чая в большую кружку и залейте кипятком.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Настаивайте 2-3 минуты.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Козье молоко взбейте до состояния пенки.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте в чай сахар, затем взбитое козье молоко.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Украсьте щепоткой кардамона.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
