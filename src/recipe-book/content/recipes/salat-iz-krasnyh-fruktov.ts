import { NewRecipe } from "../../models/recipe";

export const salatIzKrasnyhFruktov: NewRecipe = {
  title: "Салат из красных фруктов",
  description:
    "Мы не уверены, десерт это, салат или закуска… или все сразу. Узнайте, как приготовить салат из красных фруктов.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/red-fruit-salad-with-salad.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Современная"],
  diets: ["Вегетарианская"],
  durations: {
    preparation: 10,
    cooking: 0,
  },
  calories: 153,
  servings: 6,
  tools: [],
  ingredients: [
    {
      name: "салат латук",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "руккола",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "кресс-салат",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "черника",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "малина",
      note: "",
      amount: {
        value: 20.0,
        unit: "г",
      },
    },
    {
      name: "клубника",
      note: "",
      amount: {
        value: 400.0,
        unit: "г",
      },
    },
    {
      name: "грецкие орехи",
      note: "",
      amount: {
        value: 80.0,
        unit: "г",
      },
    },
    {
      name: "кишмиш",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "йогуртовый соус",
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
          body: "Смешайте сначала салат и рукколу, затем остальные ингредиенты: чернику, малину, клубнику и грецкие орехи.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте йогуртовым соусом. Если вы предпочитаете более традиционную приправу, добавьте соль, масло и уксус.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посыпьте сверху кишмишем и подавайте!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
