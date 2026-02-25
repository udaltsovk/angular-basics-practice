import { NewRecipe } from "../../models/recipe";

export const svezhijSalatSSyrom: NewRecipe = {
  title: "Свежий салат с помидорами и сыром фета",
  description:
    "Идеально подходит для жарких дней и может быть подано в качестве гарнира или основного блюда. Попробуйте свежий салат с сыром.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/salad-with-tomatoes-and-feta-cheese.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Современная"],
  diets: ["Низкокалорийная", "Вегетарианская"],
  durations: {
    preparation: 15,
    cooking: 0,
  },
  calories: 20,
  servings: 4,
  tools: ["Нож", "Разделочная доска", "Миска"],
  ingredients: [
    {
      name: "помидор",
      note: "",
      amount: {
        value: 1.0,
        unit: "",
      },
    },
    {
      name: "огурец",
      note: "",
      amount: {
        value: 1.0,
        unit: "",
      },
    },
    {
      name: "красный лук",
      note: "",
      amount: {
        value: 1.0,
        unit: "",
      },
    },
    {
      name: "сыр фета",
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
      name: "бальзамический уксус",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "рецкие орехи",
      note: "поджаренные",
      amount: {
        value: 0,
        unit: "г",
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Вымойте и очистите овощи, нарезав их небольшими кусочками. Отложите в сторону.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разрежьте сыр на кубики.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смешайте вместе овощи и сыр.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте поджаренные грецкие орехи по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте оливковым маслом и бальзамическим уксусом.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
