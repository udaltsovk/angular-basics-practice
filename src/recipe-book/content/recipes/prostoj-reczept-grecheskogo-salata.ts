import { NewRecipe } from "../../models/recipe";

export const prostojReczeptGrecheskogoSalata: NewRecipe = {
  title: "Простой рецепт греческого салата",
  description:
    "Простой традиционный греческий салат со спелыми помидорами, огурцами, болгарским перцем, луком, оливками и сливочным сыром фета.",
  image: {
    src: "/content/recipes/prostoj-reczept-grecheskogo-salata/grecheskiy-salat_.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Греческая"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 15,
  },
  calories: 415,
  servings: 4,
  tools: ["Салатник"],
  ingredients: [
    {
      name: "красная луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "помидор",
      note: "спелых, среднего размера",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "огурец",
      note: "длинный плод",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "зеленый болгарский перец",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "оливки",
      note: "греческие оливки, лучше сорт Каламата",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "оливковое масло",
      note: "первого холодного отжима",
      amount: {
        value: 4.0,
        unit: "ст. л.",
      },
    },
    {
      name: "красный винный уксус",
      note: "",
      amount: {
        value: 1.5,
        unit: "ст. л.",
      },
    },
    {
      name: "сыр фета",
      note: "",
      amount: {
        value: 300.0,
        unit: "г",
      },
    },
    {
      name: "сушеный орегано",
      note: "",
      amount: {
        value: 0.5,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Красную луковицу разрезать пополам и тонко нарезать полукольцами. (Если вы хотите убрать резкость вкуса, поместите нарезанный лук в раствор ледяной воды и уксуса на некоторое время, прежде чем добавлять в салат).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Помидоры нарежьте дольками или крупными кусками (некоторые я нарезала кружочками, а остальные дольками).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте длинно плодный огурец вдоль пополам.  Тонко нарежьте кольцами болгарский перец.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложите все в большую салатницу. Добавьте хорошую горсть оливок каламата без косточек. Слегка приправьте салат солью (всего щепотку) и небольшим количеством сушеного орегано.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Полейте салат оливковым маслом и красным винным уксусом. Очень осторожно перемешайте все.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Теперь добавьте блоки фета сверху и посыпьте еще сушеным орегано. Подавать с хрустящим хлебом.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
