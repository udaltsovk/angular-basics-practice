import { NewRecipe } from "../../models/recipe";

export const grogKlassicheskij: NewRecipe = {
  title: "Грог классический",
  description:
    "Грог— это классический спиртной напиток крепостью примерно 17-20%, изготовляемый путем смешивания рома с водой и сахаром.",
  image: {
    src: "/content/recipes/grog-klassicheskij/grog-11.jpg",
  },
  foodTypes: ["Напитки"],
  kitchens: ["Британская"],
  diets: [],
  durations: {
    preparation: 4,
    cooking: 5,
  },
  calories: 175,
  servings: 3,
  tools: ["Ковш для кипячения", "Миска"],
  ingredients: [
    {
      name: "ром темный",
      note: "",
      amount: {
        value: 200.0,
        unit: "мл",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 400.0,
        unit: "мл",
      },
    },
    {
      name: "лимон",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 4.0,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Налить в емкость воду, довести до кипения",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Отдельно выдавить сок из двух лимонов",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Убавить огонь, тонкой струйкой влить в воду ром, затем добавить лимонный сок и сахар, хорошо перемешать",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Проварить домашний грог 2-3 минуты до полного растворения сахара, помешивая",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Снять напиток с огня и разлить в бокалы",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
