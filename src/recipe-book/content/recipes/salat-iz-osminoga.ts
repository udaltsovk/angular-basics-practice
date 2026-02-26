import { NewRecipe } from "../../models/recipe";

export const salatIzOsminoga: NewRecipe = {
  title: "Салат из осьминога",
  description:
    "Испанский рецепт, который наилучшим образом передает весь вкус осьминога в идеальном салате для лета. Узнайте, как приготовить салат из осьминога.",
  image: {
    src: "/content/recipes/salat-iz-osminoga/octopus-salad.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Испанская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 35,
  },
  calories: 157,
  servings: 6,
  tools: ["Нож", "Разделочная доска", "Кастрюля", "Стакан"],
  ingredients: [
    {
      name: "осьминог",
      note: "",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "кинза",
      note: "",
      amount: {
        value: 1.0,
        unit: "пучок",
      },
    },
    {
      name: "белая луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "красный лук",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "лимон",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "кориандр",
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Поместите осьминога в кастрюлю вместе со стаканом воды и белым луком. Когда закипит, варите в течение 35 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Когда осьминог станет мягким, снимите с огня и оставьте остывать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте осьминога на небольшие кусочки и отложите в сторону.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Мелко нарежьте красный лук и кинзу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смешайте осьминога, лук и кориандр в миске. Приправьте оливковым маслом, уксусом, солью и перцем по своему вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Храните салат в холодильнике.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "При подаче добавьте в салат несколько ломтиков лимона.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
