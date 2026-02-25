import { NewRecipe } from "../../models/recipe";

export const shokoladnyjTortBezMukiProstoIBystro: NewRecipe = {
  title: "Шоколадный торт без муки",
  description:
    "Самый простой в мире шоколадный торт без муки является также одним из самых вкусных. Сочный и воздушный, как и должно быть.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/chocolate-cake-without-flour.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 5,
    cooking: 20,
  },
  calories: 271,
  servings: 6,
  tools: ["Кастрюля", "Форма для запекания", "Миска"],
  ingredients: [
    {
      name: "темный шоколад",
      note: "",
      amount: {
        value: 255.0,
        unit: "г",
      },
    },
    {
      name: "Сливочное масло",
      note: "",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Начните с предварительного разогрева духовки до 180 градусов.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В кастрюле растопите сливочное масло и шоколад.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выключите нагрев и добавьте яйца.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смешайте все вместе и поместите в форму для запекания.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выпекайте в течение 20-25 минут.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
