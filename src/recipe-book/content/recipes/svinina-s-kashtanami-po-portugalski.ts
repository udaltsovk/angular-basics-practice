import { NewRecipe } from "../../models/recipe";

export const svininaSKashtanamiPoPortugalski: NewRecipe = {
  title: "Свинина с каштанами по-португальски",
  description:
    "Свинина с каштанами - португальское блюдо, полное аромата, приготовленное из типичных и натуральных продуктов, вкус которого порадует всех.",
  image: {
    src: "/content/recipes/svinina-s-kashtanami-po-portugalski/pork-with-chestnuts.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Португальская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 50,
  },
  calories: 1160,
  servings: 4,
  tools: ["Сковорода", "Разделочная доска", "Нож", "Стакан"],
  ingredients: [
    {
      name: "свинина",
      note: "без жира и порезанной на кубики",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "каштаны",
      note: "натуральных или замороженных",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "портвейн",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 1.0,
        unit: "зубчик",
      },
    },
    {
      name: "лавровый лист",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "белое вино",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 0.33,
        unit: "стакан",
      },
    },
    {
      name: "сало",
      note: "",
      amount: {
        value: 4.0,
        unit: "ст. л.",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "мёд",
      note: "",
      amount: {
        value: 4.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сладкая паприка",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
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
      name: "свежемолотый перец",
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
          body: "Для начала приправьте свинину солью, перцем, паприкой, раздавленным чесноком, белым вином, портвейном и медом.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Оберните мясо приправами и дайте ему замариноваться 30 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поставьте сковороду на огонь, сбрызнув маслом и положив сало.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "После того как сало растопится, добавьте мясо и хорошо обжарьте, периодически помешивая.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте лавровый лист и воду. Снова перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Варить на среднем огне 25 минут, при необходимости помешивая.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте каштаны и перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Отрегулируйте приправы и тушите еще 25 минут (или пока мясо не станет нежным). Время от времени перемешивайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Снимите с огня и подавайте с белым рисом, соте из овощей или жареным / отварным картофелем.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
