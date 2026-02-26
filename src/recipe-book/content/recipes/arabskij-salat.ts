import { NewRecipe } from "../../models/recipe";

export const arabskijSalat: NewRecipe = {
  title: "Арабский салат",
  description:
    "Этот рецепт практичен, вкусен и полезен. Наслаждайтесь арабским салатом в те дни, когда вам нужно почувствовать себя легче, не теряя при этом удовольствия.",
  image: {
    src: "/content/recipes/arabskij-salat/main.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Арабская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 0,
  },
  calories: 194,
  servings: 2,
  tools: ["Нож", "Разделочная доска"],
  ingredients: [
    {
      name: "вареный нут",
      note: "",
      amount: {
        value: 1.0,
        unit: "банка",
      },
    },
    {
      name: "салатный лист",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "помидор",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "морковь",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "маринованная свекла",
      note: "",
      amount: {
        value: 5.0,
        unit: "ломтик",
      },
    },
    {
      name: "майонез",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "кетчуп",
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
      name: "оливковое масло",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "уксус",
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
          body: "Приготовьте коктейльный соус, смешав майонез с кетчупом и отставив.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте салат, помидор, морковь и свеклу на небольшие кусочки и положите в подходящую емкость. Добавьте нут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте солью, перцем, маслом и уксусом. Добавьте приготовленный ранее коктейльный соус.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавайте охлажденным.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
