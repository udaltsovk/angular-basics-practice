import { NewRecipe } from "../../models/recipe";

export const kannoliKakSdelat: NewRecipe = {
  title: "Рецепт канноли (как сделать ракушки канноли и начинку)",
  description:
    "Классический рецепт канноли (оболочки и начинка). По-настоящему мечтательные, идеально хрустящие скорлупки, наполненные смесью рикотты и шоколада",
  image: {
    src: "/content/recipes/kannoli-kak-sdelat/cannole.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Итальянская"],
  diets: [],
  durations: {
    preparation: 25,
    cooking: 20,
  },
  calories: 94,
  servings: 24,
  tools: ["Формы для канноли", "Большая миска для смешивания"],
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
      name: "соль",
      note: "",
      amount: {
        value: 5.0,
        unit: "г",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сливочное масло",
      note: "несоленого, нарезанного небольшими кусочками",
      amount: {
        value: 5.0,
        unit: "ст. л.",
      },
    },
    {
      name: "яйца",
      note: "взбитых",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "вино Марсала",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "яичный белок",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "растительное масло",
      note: "для жарки",
      amount: {
        value: 250.0,
        unit: "мл",
      },
    },
    {
      name: "сахарная пудра",
      note: "для посыпки",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "темный шоколад",
      note: "тертого,",
      amount: {
        value: 60.0,
        unit: "г",
      },
    },
    {
      name: "сыр рикотта",
      note: "можно использовать обезжиренную рикотту",
      amount: {
        value: 340.0,
        unit: "г",
      },
    },
    {
      name: "молоко",
      note: "",
      amount: {
        value: 0.3333333333333333,
        unit: "стакан",
      },
    },
    {
      name: "сахарная пудра",
      note: "",
      amount: {
        value: 0.75,
        unit: "стакан",
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
      name: "цукаты",
      note: "нарезанных",
      amount: {
        value: 85.0,
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
