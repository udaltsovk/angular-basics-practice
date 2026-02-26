import { NewRecipe } from "../../models/recipe";

export const malenkijTortikPetitGateauxIzPoroshkovogoShokolada: NewRecipe = {
  title: 'Маленькие шоколадные кексы "Petit gâteau"',
  description:
    "Маленькие шоколадные кексы &quot;Petit gâteau&quot; из шоколадной пудры - лакомство для тех, кто его пробует. И это всегда радует и детей, и взрослых.",
  image: {
    src: "/content/recipes/malenkij-tortik-petit-gateaux-iz-poroshkovogo-shokolada/chocolate-petit-gateau.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 7,
  },
  calories: 378,
  servings: 4,
  tools: ["Противень", "Формочки для кексов", "Чайная ложка", "Столовая ложка"],
  ingredients: [
    {
      name: "Сливочное масло",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "шоколадная пудра",
      note: "или тертого шоколада",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "мука",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "Соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Смешайте растопленное масло с яйцами, просеянной мукой, шоколадом, сахаром и солью до однородности.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Формочки для маффинов смажьте растопленным маслом и посыпьте мукой.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заполните формочки смесью на ⅔ их объема.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выпекайте в предварительно разогретой духовке при 220ºC в течение 7 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разложите и подавайте.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
