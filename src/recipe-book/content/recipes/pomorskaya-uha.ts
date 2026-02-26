import { NewRecipe } from "../../models/recipe";

export const pomorskayaUha: NewRecipe = {
  title: "Поморская уха",
  description: "Самое знаменитое блюдо Русского севера — поморская уха.",
  image: {
    src: "/content/recipes/pomorskaya-uha/uha_pomorskaya.jpg",
  },
  foodTypes: ["Суп"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 40,
  },
  calories: 226,
  servings: 5,
  tools: ["Кастрюля", "Ковш для кипячения"],
  ingredients: [
    {
      name: "треска",
      note: "филе",
      amount: {
        value: 800.0,
        unit: "г",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 1.5,
        unit: "л",
      },
    },
    {
      name: "луковица",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "картофель",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "перец",
      note: "горошком",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "лавровый лист",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "молоко",
      note: "",
      amount: {
        value: 3.0,
        unit: "стакан",
      },
    },
    {
      name: "печень трески",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "зелень",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В кастрюле пассируете лук на растительном масле, добавляете морковку и картошку, заливаете все водой и варите 10 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавляете перец и лавровый лист.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Рыбу нужно нарезать крупно. Закладывайте треску.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Уху нужно посолить и поперчить. Вливайте сюда вскипевшее молоко.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавляете печень трески. Зелень. Выключаете и дайте настояться полчаса.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
