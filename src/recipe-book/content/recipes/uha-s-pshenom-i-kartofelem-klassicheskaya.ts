import { NewRecipe } from "../../models/recipe";

export const uhaSPshenomIKartofelemKlassicheskaya: NewRecipe = {
  title: "Уха с пшеном и картофелем классическая",
  description: "Уха - традиционное русское блюдо, рыбный суп.",
  image: {
    src: "/content/recipes/uha-s-pshenom-i-kartofelem-klassicheskaya/uha.jpg",
  },
  foodTypes: ["Суп"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 45,
  },
  calories: 208,
  servings: 5,
  tools: ["Кастрюля", "Сковорода", "Сито"],
  ingredients: [
    {
      name: "рыба",
      note: "",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 2.0,
        unit: "л",
      },
    },
    {
      name: "пшено",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "картофель",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "морковка",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "лук репчатый",
      note: "головка",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "лавровый лист",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "перец горошком",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "укроп",
      note: "",
      amount: {
        value: 1.0,
        unit: "пучок",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Подготовьте рыбу к варке. Удалите чешую, жабры, плавники рыбы. Поставьте вариться до кипения. Из головы и хвоста рыбы получается хороший бульон.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Почистить лук, нарезать его кубиками. Морковь необходимо почистить и нарезать. Все вместе потушите шесть минут на сковороде.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "При закипании воды в кастрюле - снимите пену и добавьте немного соли. Проварите еще 15 минут. Затем рыбу выньте, а бульон процедите через сито, чтобы избавиться от косточек.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Удалите косточки из рыбы и снимите шкурку. Рыбное мясо порежьте на среднего размера кусочки.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Бульон вновь поставьте вариться, доведите до кипения. Добавьте в кастрюлю порезанный картофель. Как только закипит, добавьте в кастрюлю пшено. Проварить около десяти минут и добавьте поджаренные овощи и рыбу. Варить до готовности картофеля и пшена, за 5 минут до конца добавьте измельченную зелень, лавровый лист и перец горошком.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "По приготовлении уха должна настояться под крышкой в течение 7—8 минут.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
