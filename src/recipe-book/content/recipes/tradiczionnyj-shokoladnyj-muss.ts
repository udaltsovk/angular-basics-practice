import { NewRecipe } from "../../models/recipe";

export const tradiczionnyjShokoladnyjMuss: NewRecipe = {
  title: "Традиционный шоколадный мусс",
  description:
    "Это, пожалуй, самый классический из всех десертов, который порадует самые взыскательные вкусы. Узнайте, как приготовить традиционный домашний шоколадный мусс.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/traditional-chocolate-mousse.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 3,
  },
  calories: 234,
  servings: 6,
  tools: ["Миксер", "Столовая ложка", "Миска"],
  ingredients: [
    {
      name: "шоколад",
      note: "для приготовления",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 6.0,
        unit: "шт",
      },
    },
    {
      name: "сахара",
      note: "",
      amount: {
        value: 8.0,
        unit: "ст. л.",
      },
    },
    {
      name: "Сливочное масло",
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
          body: "Разломайте шоколад на мелкие кусочки и положите в подходящую емкость, чтобы растопить вместе со столовой ложкой масла.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместите емкость на водяной пар или в качестве альтернативы, поместите в микроволновую печь.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "К растопленному шоколаду аккуратно по очереди добавляйте желтки. Не переставайте помешивать, в идеале - электрическим миксером.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте сахар и продолжайте взбивать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Взбейте яичные белки и аккуратно сложите в предыдущую смесь.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместите в подходящую миску и охладите.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
