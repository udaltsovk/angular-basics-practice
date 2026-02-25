import { NewRecipe } from "../../models/recipe";

export const supSLapshojUdon: NewRecipe = {
  title: "Суп с лапшой Удон",
  description:
    "Этот легкий и вкусный японский суп с лапшой удон идеально подходит для быстрого обеда, ужина или закуски. Выберите свои любимые начинки для удона, такие как зеленый лук, кацуобоси (хлопья бонито) и шичимо тогараси (японские хлопья чили).",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/12/udon-noodle-soup-recipe.jpg",
  },
  foodTypes: ["Суп"],
  kitchens: ["Японская"],
  diets: ["Низкокалорийная", "Вегетарианская"],
  durations: {
    preparation: 5,
    cooking: 5,
  },
  calories: 52,
  servings: 1,
  tools: ["Миска для супа с лапшой", "Большой мерный стакан"],
  ingredients: [
    {
      name: "лапша удон",
      note: "замороженной или свежей",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "порошок даси",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "мирина",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "соевый соус",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "кипящая вода",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "зеленый лук",
      note: "мелко нарезанного по диагонали",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "хлопья бонито",
      note: "или кацуобуси",
      amount: {
        value: 2.0,
        unit: "ч. л.",
      },
    },
    {
      name: "хлопья чили шичими тогараси",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Приготовьте лапшу удон в соответствии с инструкцией на упаковке.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Чтобы сделать основу супа, поместите порошок даси, соевый соус, мирин, соль и сахар в глубокую миску, затем залейте кипятком доверху.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложите готовую лапшу удон в основу супа. Сверху посыпьте нарезанным зеленым луком, хлопьями бонито (кацуобуси) и хлопьями чили или шичими тогараси.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
