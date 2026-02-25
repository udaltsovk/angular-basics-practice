import { NewRecipe } from "../../models/recipe";

export const tortCherepashka: NewRecipe = {
  title: 'Торт "Черепашка"',
  description:
    "Простой в изготовлении  и оригинальный в оформлении торт,  подходит по вкусу как детям, так и взрослым.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/turtle-cake.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 30,
    cooking: 50,
  },
  calories: 479,
  servings: 6,
  tools: ["Венчик", "Противень", "Бумага для выпечки", "Чайная ложка", "Плоское блюдо"],
  ingredients: [
    {
      name: "мука",
      note: "",
      amount: {
        value: 2.0,
        unit: "стакан",
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
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "какао",
      note: "",
      amount: {
        value: 4.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сгущенка",
      note: "",
      amount: {
        value: 1.0,
        unit: "банка",
      },
    },
    {
      name: "сливочное масло",
      note: "",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
