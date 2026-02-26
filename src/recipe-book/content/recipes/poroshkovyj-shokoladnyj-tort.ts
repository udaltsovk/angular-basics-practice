import { NewRecipe } from "../../models/recipe";

export const poroshkovyjShokoladnyjTort: NewRecipe = {
  title: "Торт из порошка кулинарного шоколада",
  description:
    "Шоколадный торт из порошка кулинарного шоколада - один из самых простых и легких в приготовлении, а также один из самых вкусных, с глазурью или без нее.",
  image: {
    src: "/content/recipes/poroshkovyj-shokoladnyj-tort/simple-chocolate-cake.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 45,
  },
  calories: 1381,
  servings: 4,
  tools: [],
  ingredients: [
    {
      name: "мука",
      note: "",
      amount: {
        value: 2.0,
        unit: "стакан",
      },
    },
    {
      name: "сахара",
      note: "",
      amount: {
        value: 2.0,
        unit: "стакан",
      },
    },
    {
      name: "масло",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "шоколадный порошок",
      note: "или тертого шоколада",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "разрыхлитель",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
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
      name: "шоколад",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "сливки",
      note: "",
      amount: {
        value: 100.0,
        unit: "мл",
      },
    },
    {
      name: "сливочное масло",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
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
