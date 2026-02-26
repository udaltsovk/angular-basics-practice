import { NewRecipe } from "../../models/recipe";

export const salatOliveKlassicheskijReczeptDlyaPrazdnichnogoStola: NewRecipe = {
  title: "Салат Оливье: классический рецепт для праздничного стола",
  description: "Откройте для себя истинный вкус праздника с классическим рецептом салата Оливье.",
  image: {
    src: "/content/recipes/salat-olive-klassicheskij-reczept-dlya-prazdnichnogo-stola/olivie.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 30,
    cooking: 15,
  },
  calories: 205,
  servings: 6,
  tools: [
    "Кастрюли для варки овощей и яиц",
    "Острый нож для нарезки",
    "Разделочная доска",
    "Большая миска для смешивания ингредиентов",
    "Ложка для перемешивания",
  ],
  ingredients: [
    {
      name: "Картофель",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "Морковь",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "Зеленый горошек",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "Вареная колбаса",
      note: "или курица",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "Огурцы маринованные",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "Яйца",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "Майонез",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "Соль",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "Перец",
      note: "по вкусу",
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
          body: "",
          ingredientIndexes: [],
          image: null,
        },
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
