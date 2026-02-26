import { NewRecipe } from "../../models/recipe";

export const oblepihovyjChajSImbirem: NewRecipe = {
  title: "Облепиховый чай с имбирем",
  description:
    "С наступлением прохладной погода, самое время закутаться в плед, взять с полки интересную книгу и пить горячий чай, как вариант облепиховый чай с имбирем.",
  image: {
    src: "/content/recipes/oblepihovyj-chaj-s-imbirem/oblepihoviy_chai_s_imbirem.jpg",
  },
  foodTypes: ["Напитки"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 7,
    cooking: 3,
  },
  calories: 51,
  servings: 3,
  tools: ["Заварочный чайник", "Дуршлаг", "Толкушка"],
  ingredients: [
    {
      name: "кипяток",
      note: "",
      amount: {
        value: 600.0,
        unit: "мл",
      },
    },
    {
      name: "облепиха",
      note: "замороженной",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "мёд",
      note: "цветочного",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "черный чай",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "корень имбиря",
      note: "",
      amount: {
        value: 30.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Перебрать облепиху в дуршлаге. Залить теплой водой и дать постоять пару минут, чтобы ягода оттаяла, после дать стечь воде. Примерно половину облепихи потолочь толкушкой, вторую часть ягод сохранить.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарезать корень имбиря. Наполнить чайник кипятком.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместить облепиховое пюре в чайник, добавляем оставшиеся целые ягоды, мед, черный чай, имбирь.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заливаем кипятком и даем настояться минут 7. Аккуратно перемешиваем.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
