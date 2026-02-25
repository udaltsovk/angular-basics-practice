import { NewRecipe } from "../../models/recipe";

export const samyjVkusnyjPashalnyjKulich: NewRecipe = {
  title: "Самый вкусный пасхальный кулич",
  description: "Тесто послушное, легко работать и формировать будущие куличи.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/easter-cake2.jpg",
  },
  foodTypes: ["Выпечка"],
  kitchens: ["Греческая"],
  diets: [],
  durations: {
    preparation: 720,
    cooking: 40,
  },
  calories: 2747,
  servings: 1,
  tools: ["Кастрюля", "Венчик", "Бумажные формы"],
  ingredients: [
    {
      name: "молоко",
      note: "",
      amount: {
        value: 250.0,
        unit: "мл",
      },
    },
    {
      name: "свежие дрожжи",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "яйца куриные",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "масло сливочное",
      note: "или маргарин",
      amount: {
        value: 125.0,
        unit: "г",
      },
    },
    {
      name: "изюм",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "мука",
      note: "",
      amount: {
        value: 625.0,
        unit: "г",
      },
    },
    {
      name: "сахара",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "ванилин",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "соль",
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
          body: "Для начала нужно с вечера поставить опару. Для этого, необходимо в теплое молоко добавить дрожжи. Яйца взбить с сахаром, а масло нарезать кусочками. Затем все смешать в одной посуде и оставить на 8-12 часов.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Утром в смесь следует добавить остальные ингредиенты и вымесить тесто. Оставить в тепле до тех пор,пока оно не увеличится вдвое.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Наложить 1/3 формочек. Подойдут бумажные формы, очень удобно. Накрываем и оставляем, пока не подойдет почти до краев формочек. Выпекать нужно при температуре 180 градусов до готовности.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Остывшие куличи украшаем глазурью и посыпкой. Приятного вам приготовления!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
