import { NewRecipe } from "../../models/recipe";

export const punshKlassicheskij: NewRecipe = {
  title: "Пунш классический",
  description:
    "Пунш классический – алкогольный напиток, обычно содержащих фрукты или фруктовый сок, иногда пряности.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/punch.jpg",
  },
  foodTypes: ["Напитки"],
  kitchens: ["Средиземноморская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 120,
  },
  calories: 397,
  servings: 10,
  tools: ["Салатник", "Ковш для кипячения"],
  ingredients: [
    {
      name: "апельсины",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 250.0,
        unit: "мл",
      },
    },
    {
      name: "ром",
      note: "",
      amount: {
        value: 520.0,
        unit: "мл",
      },
    },
    {
      name: "апельсин",
      note: "цедры",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "лимон",
      note: "для сока",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "чай",
      note: "крепкого",
      amount: {
        value: 1.5,
        unit: "л",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Нарезать соломкой цедру двух апельсинов в фарфоровую или стеклянную емкость.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Залить цедру ромом или коньяком, накрыть крышкой и оставить на 1,5-2 часа.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Из сахара и воды сварить на огне сироп, вылить в него выжатый из апельсинов и лимонов сок.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Все хорошо размешать, добавить 50 гр рома и слитый с апельсинной цедры коньяк или ром.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Жидкость процедить, смешать с крепким чаем и разлить в стаканы.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
