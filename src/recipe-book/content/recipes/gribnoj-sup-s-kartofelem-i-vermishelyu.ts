import { NewRecipe } from "../../models/recipe";

export const gribnojSupSKartofelemIVermishelyu: NewRecipe = {
  title: "Грибной суп с картофелем и вермишелью",
  description:
    "Грибной суп прост в приготовлении и доступный в дни поста и не только. Душистый по аромату и  приятный на вкус грибной суп одно из самых любимых блюд русской кухни.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/gribnoi_sup.jpg",
  },
  foodTypes: ["Суп"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 40,
    cooking: 50,
  },
  calories: 47,
  servings: 10,
  tools: ["Кастрюля", "Сковорода", "Сито"],
  ingredients: [
    {
      name: "грибы",
      note: "",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 1.5,
        unit: "л",
      },
    },
    {
      name: "картофель",
      note: "",
      amount: {
        value: 2.0,
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
      name: "морковь",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "вермишель",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "сметана",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Положите  свежие грибы в кастрюлю, посолите и залейте водой. Доведите до кипения и варите 30 минут на среднем огне. Если вы используете засушенные грибы, то предварительно замочите их на пару часов в теплой воде, а после приступайте к варке.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Мелко нарежьте лук и морковь. Обжарьте их с маслом на сковороде на медленном огне до готовности.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Когда грибы сварятся, вынимайте их кастрюли, при необходимости измельчите. Опускайте в кастрюлю нарезанный картофель, грибы же добавляйте к луку и моркови, и жарьте все вместе 10 минут. Когда картофель сварится, опустите в кастрюлю содержимое сковороды. Добавьте вермишель.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посолите суп. Варите его еще 10 минут на маленьком огне. Перед подачей посыпьте грибной суп свежей зеленью и добавьте ложку сметаны.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
