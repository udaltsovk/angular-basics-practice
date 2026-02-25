import { NewRecipe } from "../../models/recipe";

export const zalivnoeMorskojAkvarium: NewRecipe = {
  title: 'Заливное "Морской аквариум"',
  description: "Это блюдо порадует поклонников кухни из морепродуктов.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/08/zalivnoe1.jpg",
  },
  foodTypes: ["Заливное"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 80,
    cooking: 60,
  },
  calories: 231,
  servings: 4,
  tools: ["Кастрюля", "Марля", "Нож", "Полукруглая ваза", "Разделочная доска"],
  ingredients: [
    {
      name: "красная рыба",
      note: "",
      amount: {
        value: 300.0,
        unit: "г",
      },
    },
    {
      name: "морской коктейль",
      note: "",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
    {
      name: "кальмар",
      note: "",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "креветки",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "яйцо",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
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
      name: "луковка",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "маслины",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "оливки",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "лимон небольшой",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "желатин",
      note: "",
      amount: {
        value: 20.0,
        unit: "г",
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
      name: "приправа для рыбы",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "перец молотый",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "лаврушка",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "укроп",
      note: "",
      amount: {
        value: 1.0,
        unit: "веточка",
      },
    },
    {
      name: "петрушка",
      note: "",
      amount: {
        value: 1.0,
        unit: "веточка",
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
