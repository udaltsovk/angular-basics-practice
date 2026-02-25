import { NewRecipe } from "../../models/recipe";

export const uhaSterlyazhyaSShampanskim: NewRecipe = {
  title: "Уха стерляжья с шампанским по-пушкински",
  description:
    "Пушкин в письме другу Соболевскому  написал инструкцию по приготовлению ухи из форели. Именно там прозвучало знаменитое: &quot;Влей в уху стакан шабли!&quot;",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/uha-sterljad.jpg",
  },
  foodTypes: ["Бульон", "Обед", "Основное блюдо", "Суп"],
  kitchens: ["Русская"],
  diets: ["Низкожировая"],
  durations: {
    preparation: 15,
    cooking: 60,
  },
  calories: 209,
  servings: 6,
  tools: ["Кастрюля", "Нож для чистки рыбы"],
  ingredients: [
    {
      name: "рыба",
      note: "мелкая рыба - ерши, пескари, окуни",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 3.0,
        unit: "л",
      },
    },
    {
      name: "рыба",
      note: "стерлядь или осетрина",
      amount: {
        value: 0.5,
        unit: "кг",
      },
    },
    {
      name: "картофель",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "лук",
      note: "репчатого",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "шампанское",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 0.5,
        unit: "щепотка",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Сварить уху из рыбной мелочи с луком и процедить.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подготовленную стерлядь или куски осетрины нарезать кусками, вытереть насухо бумажным полотенцем, опустить в кипящую уху, варить на слабом огне до готовности.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить порезанный картофель.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посолить уху по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Перед самой подачей влить в уху стакан шампанского.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
