import { NewRecipe } from "../../models/recipe";

export const reczeptChizburgeraDlyaVeganovChizburgerSChernojFasolyuIKartofelem: NewRecipe = {
  title: "Чизбургер с черной фасолью и картофелем",
  description:
    "Веганская еда может быть такой же вкусной, как и любая другая. Чизбургер с черной фасолью и картофелем приятно вас удивит. Вот рецепт блюда.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2022/04/burger_dlia_veganov.jpg",
  },
  foodTypes: ["Уличная еда"],
  kitchens: ["Русская"],
  diets: ["Вегетарианская"],
  durations: {
    preparation: 15,
    cooking: 60,
  },
  calories: 1495,
  servings: 2,
  tools: [
    "Миксер",
    "Сковорода",
    "Духовой шкаф",
    "Форма для выпечки с небольшим диаметром — диаметром бургера",
  ],
  ingredients: [
    {
      name: "мука",
      note: "универсальной",
      amount: {
        value: 3.0,
        unit: "стакан",
      },
    },
    {
      name: "масло",
      note: "веганское и охлажденное",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
    {
      name: "вода",
      note: "ледяной",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "фасоль",
      note: "черной",
      amount: {
        value: 1.0,
        unit: "банка",
      },
    },
    {
      name: "картофель",
      note: "среднего размера и нарезанные",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "луковица",
      note: "среднего размера и нарезанная",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "помидор",
      note: "порезанные",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "веганский сыр",
      note: "альтернативы чеддер и пармезан",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "миндальное молоко",
      note: "или соевое молоко",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "семена льна",
      note: "",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 5.0,
        unit: "г",
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
      ],
    },
  ],
  notes: [],
};
