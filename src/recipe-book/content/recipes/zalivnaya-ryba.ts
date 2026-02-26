import { NewRecipe } from "../../models/recipe";

export const zalivnayaRyba: NewRecipe = {
  title: "Заливная рыба",
  description: "Традиционное блюдо для новогоднего стола в России.",
  image: {
    src: "/content/recipes/zalivnaya-ryba/zalivnaya_riba.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 90,
    cooking: 360,
  },
  calories: 63,
  servings: 12,
  tools: ["Кастрюля", "Ковш для кипячения", "Противень", "Форма для заливного"],
  ingredients: [
    {
      name: "рыба",
      note: "судак",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "филе рыбы",
      note: "судак",
      amount: {
        value: 300.0,
        unit: "г",
      },
    },
    {
      name: "филе рыбы",
      note: "треска",
      amount: {
        value: 300.0,
        unit: "г",
      },
    },
    {
      name: "филе рыбы",
      note: "осетр",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "желатин",
      note: "",
      amount: {
        value: 4.0,
        unit: "ч. л.",
      },
    },
    {
      name: "клюква",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "петрушка",
      note: "зеленой",
      amount: {
        value: 4.0,
        unit: "веточка",
      },
    },
    {
      name: "лимон",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "лавровый лист",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "сельдерей",
      note: "стебель",
      amount: {
        value: 2.0,
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
      name: "чеснок",
      note: "зубчика",
      amount: {
        value: 2.0,
        unit: "зубчик",
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
      name: "перец",
      note: "горошком",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 1.6,
        unit: "л",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Для бульона: чистим рыбу, режем и заливаем 1,6 литров воды, доводим до кипения. ",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Снимаем пену, добавляем 1 луковицу, 1 морковь, 2 стебля сельдерея, 3 ветки петрушки, 2 лавровых листа, 2 зубчика чеснока, 5 горошин перца, соль и черный молотый перец — по вкусу. Варим на небольшом огне 30-40 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Готовим рыбу для заливного. Пока варится бульон, закладываем в миску 4 полных чайных ложки желатина (40 грамм).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заливаем половиной стакана холодной воды. Даем желатину разбухнуть. Размокший желатин заливаем горячим, процеженным бульоном. Варим 5 минут и процеживаем еще раз.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Филе судака, трески, осетра солим, перчим, режем на бруски шириной 4 см., выкладываем в смазанную растительным маслом форму. Выпекаем при температуре 150 градусов — 40 минут до готовности. ",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Кусочки остуженной рыбы выкладываем в форму для заливного, украшаем кружочками варенной моркови, листьями петрушки, тонко порезанными ломтиками лимона и ягодами клюквы.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Аккуратно заливаем бульон, используя половник. Бульон должен покрывать рыбу на 1-2 см.  Ставим в холодильник для застывания на 5-6 часов.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
