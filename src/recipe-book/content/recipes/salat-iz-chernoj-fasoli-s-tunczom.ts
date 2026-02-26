import { NewRecipe } from "../../models/recipe";

export const salatIzChernojFasoliSTunczom: NewRecipe = {
  title: "Салат из черной фасоли с тунцом",
  description:
    "Этот салат из черной фасоли с тунцом и яйцом - отличный выбор для жарких летних дней, его можно употреблять как основное блюдо, так и как гарнир.",
  image: {
    src: "/content/recipes/salat-iz-chernoj-fasoli-s-tunczom/black-bean-salad-with-tuna-and-egg.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Португальская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 20,
  },
  calories: 321,
  servings: 4,
  tools: ["Нож", "Разделочная доска", "Кастрюля", "Миска"],
  ingredients: [
    {
      name: "консервированный тунец",
      note: "",
      amount: {
        value: 350.0,
        unit: "г",
      },
    },
    {
      name: "черная фасоль",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "петрушка",
      note: "",
      amount: {
        value: 1.0,
        unit: "пучок",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "уксус",
      note: "",
      amount: {
        value: 0,
        unit: "",
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
      name: "перец",
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
          body: "Начните с приготовления черной фасоли в кастрюле с водой и солью.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Отварите яйца в другой кастрюле.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Когда яйца сварятся, очистите их от скорлупы и нарежьте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте петрушку и лук и смешайте их в миске.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Слейте воду с черной фасоли и смешайте ее с тунцом.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте смесь черной фасоли и тунца солью и перцем по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Украсьте смесь ломтиками яиц и заправьте маслом и уксусом по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посыпьте все смесью лука и петрушки и подавайте на стол.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
