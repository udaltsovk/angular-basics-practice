import { NewRecipe } from "../../models/recipe";

export const portugalskijSalatAlgarve: NewRecipe = {
  title: 'Португальский салат "Альгарве"',
  description:
    "Полноценное, питательное, здоровое блюдо со всеми ароматами родом из Алгарве. Если вы ищете свежий салат, этот рецепт для вас.",
  image: {
    src: "/content/recipes/portugalskij-salat-algarve/algarvian-salad.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Португальская"],
  diets: ["Вегетарианская"],
  durations: {
    preparation: 15,
    cooking: 0,
  },
  calories: 126,
  servings: 2,
  tools: [],
  ingredients: [
    {
      name: "средний помидор",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "небольшой огурец",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "красный болгарский перец",
      note: "",
      amount: {
        value: 0.5,
        unit: "шт",
      },
    },
    {
      name: "зеленый болгарский перец",
      note: "",
      amount: {
        value: 0.5,
        unit: "шт",
      },
    },
    {
      name: "небольшая луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "уксус",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "соль цветочная",
      note: "Fleur de Sal",
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
          body: "Начните с того, что хорошо вымойте все овощи.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Удалите семена из помидора и огурца.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте все овощи небольшими квадратиками и сложите их в миску.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте солью по вкусу, оливковым маслом и посыпьте орегано.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавайте охлажденным.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
