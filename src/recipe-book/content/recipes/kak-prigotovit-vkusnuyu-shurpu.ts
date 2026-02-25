import { NewRecipe } from "../../models/recipe";

export const kakPrigotovitVkusnuyuShurpu: NewRecipe = {
  title: "Как приготовить вкусную шурпу",
  description:
    "Шурпа - мясной суп густой консистенции. Ингредиенты для шурпы всегда одинаковы, лишь благодаря технике приготовления и специям этот суп может отличаться от своих собратьев.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2023/01/how-to-cook-a-delicious-shurpa-6-scaled.jpg",
  },
  foodTypes: ["Бульон", "Обед", "Основное блюдо", "Ужин"],
  kitchens: ["Казахская", "Киргизская", "Таджикская", "Узбекская"],
  diets: [],
  durations: {
    preparation: 25,
    cooking: 90,
  },
  calories: 304,
  servings: 4,
  tools: ["Нож", "Казан или сковорода ВОК"],
  ingredients: [
    {
      name: "мясо",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
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
      name: "томатная паста",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "лук",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "болгарский перец",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "картофель",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "лавровый лист",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "масло для обжаривания",
      note: "",
      amount: {
        value: 75.0,
        unit: "мл",
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
      name: "специи",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "зелень",
      note: "для украшения",
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
          body: "Все ингредиенты необходимо подготовить: морковь – нарезать наискосок ломтиками, болгарский перец и лук – полукольцами, мясо на порционные куски.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2023/01/how-to-cook-a-delicious-shurpa-2-scaled.jpg",
          },
        },
        {
          body: "В глубокий казан необходимо влить растительное масло, дождаться, когда оно накалиться до появления белого дыма и опустить в него мясо. Мясо обжаривать до золотистой корочки.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2023/01/how-to-cook-a-delicious-shurpa-3-scaled.jpg",
          },
        },
        {
          body: "После того, как мясо обжариться, к нему следует добавить лук, еще жарить около 5 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В казан с жареным мясом и луком следует добавить морковь и болгарский перец. Все ингредиенты следует тщательно перемешать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "После того как овощи размягчатся к ним следует добавить томат и обжаривать еще пару минут. В качестве замены томатной пасты можно использовать свежие помидоры, а также консервированные.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2023/01/how-to-cook-a-delicious-shurpa-4-scaled.jpg",
          },
        },
        {
          body: "Обжаренные овощи с мясом следует залить водой, в нашем случае 1.5 – 2 л. и довести до кипения. Чтобы шурпа получилась вкусной, обязательно после закипания необходимо убрать всю пенку с поверхности супа и только после этого шурпу следует посолить. Шурпу варят в течении 1-1.5 часа на маленьком огне, и только спустя это время в неё опускают подготовленный картофель. После того как картофель свариться в суп следует добавить специи. Через 5 минут суп следует снять с плиты и дать постоять с закрытой крышкой 15 минут.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2023/01/how-to-cook-a-delicious-shurpa-5-scaled.jpg",
          },
        },
        {
          body: "Готовую шурпу налить в тарелку и сверху украсить зеленью.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
