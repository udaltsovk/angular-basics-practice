import { NewRecipe } from "../../models/recipe";

export const marinadIzKrasnogoVinaDlyaShashlyka: NewRecipe = {
  title: "Маринад из красного вина для шашлыка",
  description:
    "Этот маринад из красного вина с оливковым маслом замечательно подойдет для баранины или говядины.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/marinade-from-red-wine.jpg",
  },
  foodTypes: ["Заготовки"],
  kitchens: ["Грузинская"],
  diets: [],
  durations: {
    preparation: 360,
    cooking: 20,
  },
  calories: 207,
  servings: 1,
  tools: ["Нож", "Разделочная доска", "Блюдо"],
  ingredients: [
    {
      name: "красное вино",
      note: "",
      amount: {
        value: 100.0,
        unit: "мл",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 10.0,
        unit: "мл",
      },
    },
    {
      name: "лимон",
      note: "- цедра и сок",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "зеленый лук",
      note: "(шнитт-лук или лук скорода)",
      amount: {
        value: 0.5,
        unit: "пучок",
      },
    },
    {
      name: "петрушка",
      note: "",
      amount: {
        value: 5.0,
        unit: "веточка",
      },
    },
    {
      name: "шалфея",
      note: "",
      amount: {
        value: 5.0,
        unit: "веточка",
      },
    },
    {
      name: "базилик",
      note: "",
      amount: {
        value: 5.0,
        unit: "веточка",
      },
    },
    {
      name: "орегано",
      note: "",
      amount: {
        value: 5.0,
        unit: "веточка",
      },
    },
    {
      name: "мята перечная",
      note: "",
      amount: {
        value: 5.0,
        unit: "веточка",
      },
    },
    {
      name: "перец грубо помолотый",
      note: "разные сорта",
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
          body: "Листья петрушки, шалфея, базилика, орегано, мяты отделить от веточек и мелко порезать",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Зеленый лук мелко порезать",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Мелко порубить рукколу",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смешать травы в емкости",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить в емкость вино и оливковое масло",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить цедру и сок лимона и все перемешать",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Перец добавить по вкусу и повторно перемешать",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Для мариновки используйте закрытое блюдо. Минимальное время мариновки должно составить не менее 6-8 часов.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2021/09/marinade-from-red-wine.jpg",
          },
        },
      ],
    },
  ],
  notes: [],
};
