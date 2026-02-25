import { NewRecipe } from "../../models/recipe";

export const anglijskijSendvichSOgurczomPoTajski: NewRecipe = {
  title: "Английский сэндвич с огурцом по-тайски",
  description: "Классическая английская закуска",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/08/english-cucumber-sandwich.jpg",
  },
  foodTypes: ["Сэндвич"],
  kitchens: ["Британская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 2,
  },
  calories: 11,
  servings: 4,
  tools: ["Нож", "Разделочная доска", "Дуршлаг", "Венчик"],
  ingredients: [
    {
      name: "огурец средний",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "сливочное масло",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "перец чили красный маленький",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "красный лук",
      note: "",
      amount: {
        value: 0.5,
        unit: "шт",
      },
    },
    {
      name: "кинзовые веточки",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "тосты хлебные",
      note: "",
      amount: {
        value: 4.0,
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Нарежьте огурец на очень тонкие ломтики, затем присыпьте их солью, перемешайте и выложите в дуршлаг.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Оставьте минут на 20, чтобы стекла выделившаяся жидкость. Затем ломтики огурца хорошо обсушите с помощью бумажных полотенец.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Мягкое (размягчить заранее) масло соедините с очищенным от семян и очень мелко нарубленным перцем чили, мелко измельченными луком и зеленью кинзы. Взбейте венчиком на средней скорости.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разложите на рабочей поверхности 4 ломтика хлеба для тостов. Смажьте приготовленным пикантным маслом. Разложите ломтики огурцов и накройте каждый бутерброд вторым ломтиком хлеба.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Срежьте с бутербродов корки и разрежьте по диагонали на треугольники.  Сэндвич с огурцом можно сразу подавать.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
