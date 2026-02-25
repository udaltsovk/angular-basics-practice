import { NewRecipe } from "../../models/recipe";

export const salatIzKozegoSyraSBekonom: NewRecipe = {
  title: "Салат из козьего сыра с беконом",
  description:
    "Салат с насыщенным вкусом и хрустящей ноткой бекона. Узнайте, как приготовить салат из козьего сыра с беконом.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/goat-cheese-salad-with-bacon-1.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Современная"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 15,
  },
  calories: 355,
  servings: 4,
  tools: ["Нож", "Разделочная доска", "Сковорода", "Салатник"],
  ingredients: [
    {
      name: "козий сыр",
      note: "",
      amount: {
        value: 140.0,
        unit: "г",
      },
    },
    {
      name: "бекон",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "салат латук",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
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
          body: "Начните с обжаривания полосок бекона на сковороде с добавлением нескольких капель того же ароматизированного оливкового масла, которое вы будете использовать для заправки салата.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте лук и обжарьте его на той же сковороде. Таким образом, лук приобретет аромат бекона и ароматизированного оливкового масла.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Затем отрежьте несколько ломтиков от рулета из козьего сыра и слегка обжарьте эти ломтики с обеих сторон на той же сковороде.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В салатнике соедините салат с беконом, луком и ломтиками козьего сыра.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте солью и ароматизированным оливковым маслом или другой приправой по вашему выбору.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавать немедленно.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
