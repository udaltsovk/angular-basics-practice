import { NewRecipe } from "../../models/recipe";

export const sochnyeShokoladnyeMaffiny: NewRecipe = {
  title: "Сочные шоколадные маффины",
  description:
    "Никто не устоит перед этими сочными шоколадными маффинами. Они тают во рту и съесть только один невозможно. Узнай рецепт!",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/juicy-chocolate-muffins.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Американская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 8,
  },
  calories: 214,
  servings: 6,
  tools: [],
  ingredients: [
    {
      name: "темный шоколад",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "сахара",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "Сливочное масло",
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
        value: 30.0,
        unit: "г",
      },
    },
    {
      name: "яйца",
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
          body: "Разогрейте духовку до 200ºC.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Положите масло и шоколад, измельченные на кусочки, в емкость и поставьте в микроволновую печь на 1 минуту.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Если шоколад уже растоплен, добавьте сахар и хорошо перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Затем добавьте яйца (ранее взбитые) и снова перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Наконец, добавьте муку и аккуратно перемешайте до однородной массы.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Вылейте смесь в небольшие формочки и запекайте 8 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Снимите и дайте немного остыть, прежде чем вынимать из формы.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
