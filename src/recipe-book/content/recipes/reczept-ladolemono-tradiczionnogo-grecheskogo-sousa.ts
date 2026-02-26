import { NewRecipe } from "../../models/recipe";

export const reczeptLadolemonoTradiczionnogoGrecheskogoSousa: NewRecipe = {
  title: "Рецепт Ладолемоно - традиционного греческого соуса",
  description:
    "Эта лимонно-оливковая заправка под названием ладолемоно — гораздо больше, чем просто заправка для греческого салата! Эта простая, яркая и острая заправка станет вашей любимой для добавления к салатам, блюдам из рыбы, мяса.",
  image: {
    src: "/content/recipes/reczept-ladolemono-tradiczionnogo-grecheskogo-sousa/ladolemono_-2.jpg",
  },
  foodTypes: ["Соус"],
  kitchens: ["Средиземноморская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 10,
  },
  calories: 363,
  servings: 4,
  tools: ["Миска"],
  ingredients: [
    {
      name: "лимоны",
      note: "большого размера",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "орегано",
      note: "сушеного",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "чеснок",
      note: "зубчик измельченный",
      amount: {
        value: 1.0,
        unit: "зубчик",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 0.75,
        unit: "ч. л.",
      },
    },
    {
      name: "черный перец",
      note: "",
      amount: {
        value: 0.75,
        unit: "ч. л.",
      },
    },
    {
      name: "оливковое масло",
      note: "extra virgin",
      amount: {
        value: 0.75,
        unit: "стакан",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Необходимо выжать сок из двух лимонов",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Положите лимонный сок, орегано, чеснок, соль и перец в миску. Взбейте, чтобы объединить.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Пока вы энергично взбиваете, медленно влейте оливковое масло первого холодного отжима.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
