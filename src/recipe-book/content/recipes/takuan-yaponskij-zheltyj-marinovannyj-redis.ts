import { NewRecipe } from "../../models/recipe";

export const takuanYaponskijZheltyjMarinovannyjRedis: NewRecipe = {
  title: "Такуан - японский желтый маринованный редис",
  description:
    "Желтый маринованный редис - самая милая и хрустящая закуска в Японии. Всего за 2 минуты вы приготовите свои собственные вкусные ломтики такуана, которые можно положить в домашние суши-роллы или съесть после обильного ужина.",
  image: {
    src: "/content/recipes/takuan-yaponskij-zheltyj-marinovannyj-redis/takuan-japanese-yellow-pickled-radish.jpg",
  },
  foodTypes: ["Заготовки", "Закуска", "Соленья"],
  kitchens: ["Корейская", "Японская"],
  diets: [],
  durations: {
    preparation: 3,
    cooking: 0,
  },
  calories: 481,
  servings: 1,
  tools: ["Стеклянная банка для хранения"],
  ingredients: [
    {
      name: "японский редис дайкон",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "сахара",
      note: "или ½ мерного стакана",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "Соль",
      note: "или 1 ст.л.",
      amount: {
        value: 20.0,
        unit: "г",
      },
    },
    {
      name: "уксус",
      note: "или 1 ст.л.",
      amount: {
        value: 20.0,
        unit: "мл",
      },
    },
    {
      name: "желтый пищевой краситель",
      note: "или 1 ч.л. порошка кукурма",
      amount: {
        value: 6.0,
        unit: "шт",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Очистите дайкон, удалив оба конца, и разрежьте по центру. Нарежьте полумесяцами.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместите их все в большой пакет с замком-молнией. Добавьте сахар, соль, уксус и желтый пищевой краситель (или кукурму).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Закройте пакет и массируйте в течение нескольких минут, пока дайкон не будет равномерно покрыт.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заверните и положите в герметичный контейнер в холодильник (для уменьшения запаха). Огурцы будут готовы минимум через 24 часа, и с каждым последующим днем их вкус будет только улучшаться.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
