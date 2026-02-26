import { NewRecipe } from "../../models/recipe";

export const slivochnoShokoladnyjTortPrigotovlennyjSPomoshhyuBlendera: NewRecipe = {
  title: "Сливочно-шоколадный торт приготовленный с помощью блендера",
  description:
    "Десерт, который всегда вкусный и ценный. Легкость кремового шоколадного торта удивляет и покоряет. ",
  image: {
    src: "/content/recipes/slivochno-shokoladnyj-tort-prigotovlennyj-s-pomoshhyu-blendera/a-piece-of-chocolate-cake.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 40,
  },
  calories: 803,
  servings: 6,
  tools: [],
  ingredients: [
    {
      name: "яйца",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "топленый маргарин",
      note: "",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "молоко",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
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
      name: "порошковый шоколад",
      note: "или тертого шоколада",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "просеянная пшеничная мука",
      note: "",
      amount: {
        value: 2.0,
        unit: "стакан",
      },
    },
    {
      name: "разрыхлитель",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сгущенное молоко",
      note: "",
      amount: {
        value: 1.0,
        unit: "банка",
      },
    },
    {
      name: "порошковый шоколад",
      note: "или тертого шоколада",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "сливки",
      note: "",
      amount: {
        value: 100.0,
        unit: "мл",
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
