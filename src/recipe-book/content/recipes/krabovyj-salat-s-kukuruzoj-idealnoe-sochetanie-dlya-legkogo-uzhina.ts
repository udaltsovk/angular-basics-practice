import { NewRecipe } from "../../models/recipe";

export const krabovyjSalatSKukuruzojIdealnoeSochetanieDlyaLegkogoUzhina: NewRecipe = {
  title: "Крабовый салат с кукурузой: идеальное сочетание для легкого ужина",
  description:
    "Крабовый салат с кукурузой - популярное блюдо, сочетающее в себе нежность крабового мяса и сладость кукурузы.",
  image: {
    src: "/content/recipes/krabovyj-salat-s-kukuruzoj-idealnoe-sochetanie-dlya-legkogo-uzhina/crab-salad-with-corn.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Европейская", "Русская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 5,
  },
  calories: 250,
  servings: 4,
  tools: [
    "Кастрюля для варки яиц",
    "Нож",
    "Разделочная доска",
    "Миска для смешивания",
    "Ложка для перемешивания",
    "Тарелка для подачи",
  ],
  ingredients: [
    {
      name: "Крабовые палочки",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "Консервированная кукуруза",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "Огурцы",
      note: "средние",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "Яйца",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "Майонез",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "Укроп",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "Петрушка",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "Соль",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "Перец",
      note: "по вкусу",
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
          body: "Яйца сварить вкрутую, охладить и мелко нарезать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Крабовые палочки нарезать небольшими кусочками.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Огурцы нарезать кубиками.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смешать крабовые палочки, огурцы, кукурузу и яйца.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить майонез, соль и перец по вкусу, аккуратно перемешать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посыпать свежей зеленью перед подачей.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
