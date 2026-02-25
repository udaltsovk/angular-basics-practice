import { NewRecipe } from "../../models/recipe";

export const salatIzSvekly: NewRecipe = {
  title: "Салат из свеклы",
  description:
    "Салат из свеклы - очень интересный рецепт для тех, кто хочет здорового питания. Смотрите наш рецепт.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/beetroot-salad.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Современная"],
  diets: ["Низкокалорийная", "Вегетарианская"],
  durations: {
    preparation: 10,
    cooking: 20,
  },
  calories: 18,
  servings: 2,
  tools: ["Разделочная доска", "Нож", "Терка"],
  ingredients: [
    {
      name: "свекла",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
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
      name: "оливковое масло",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "сок лайма",
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
          body: "Хорошо вымойте свеклу и обрежьте концы.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Варите свеклу в подсоленной воде в течение 30 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выньте свеклу из кипятка и нарежьте ее или натрите на терке длинными прядями.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приправьте солью, оливковым маслом и соком лайма по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Можно подавать на стол.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
