import { NewRecipe } from "../../models/recipe";

export const medovuhaSHmelem: NewRecipe = {
  title: "Медовуха с хмелем",
  description:
    "Медовуха - слабоалкогольный напиток, приготавливаемый методом брожения воды, меда и дрожжей",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/medovuha.jpg",
  },
  foodTypes: ["Напитки"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 150,
    cooking: 30240,
  },
  calories: 304,
  servings: 10,
  tools: ["Термос", "Кастрюля", "Пустые емкости бутылок"],
  ingredients: [
    {
      name: "мёд",
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
        value: 6.0,
        unit: "л",
      },
    },
    {
      name: "шишки хмеля",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "свежие дрожжи",
      note: "",
      amount: {
        value: 3.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Хмель заварить в трех стаканах кипятка. Настоять несколько часов. Можно настаивать в простом термосе.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Мед растворить в воде и прокипятить на небольшом огне, помешивая и тщательно снимая пену.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Через полчаса добавить процеженный настой хмеля.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Еще через полчаса снять с огня и охладить до 40 градусов С.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить дрожжи (! при желании дрожжи можно заменить на закваску (хлебную или квасную!)",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Хмельной мед бродит при комнатной температуре 2-3 дня.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "После медовуху переливают в бутылки с завинчивающимися пробками, и далее хранят х в холоде. Созревание медовухи длится 3-4 недели.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
