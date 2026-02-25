import { NewRecipe } from "../../models/recipe";

export const fruktovyjSalatSMedovoLajmovojZapravkoj: NewRecipe = {
  title: "Фруктовый салат с медово-лаймовой заправкой",
  description: "Сладкое фруктовое попурри с соком лайма, медом и маком.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/pineapple-fruit-salad-1-scaled.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 5,
  },
  calories: 156,
  servings: 4,
  tools: ["Разделочная доска", "Нож", "Глубокая тарелка", "Чайная ложка", "Столовая ложка"],
  ingredients: [
    {
      name: "консервированный ананас",
      note: "без жидкости",
      amount: {
        value: 600.0,
        unit: "г",
      },
    },
    {
      name: "жидкость от консервированного ананаса",
      note: "",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "апельсин",
      note: "очищенный от кожуры и нарезанный кусочками",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "киви",
      note: "очищенное и нарезанное ломтиками",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "виноград",
      note: "без косточек",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "клубника",
      note: "нарезанный четвертинками",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "тертая цедра лайма",
      note: "",
      amount: {
        value: 0.25,
        unit: "ч. л.",
      },
    },
    {
      name: "сок лайма",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "мёд",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "семена мака",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В глубокую тарелку поместите ананас, апельсин, киви, виноград и клубнику.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Отдельно смешайте цедру лайма, сок лайма, мед, семена мака и 1/4 стакана ананасового сока.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Хорошо перемешайте и заправьте фрукты.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
