import { NewRecipe } from "../../models/recipe";

export const zharennayaKartoshkaSLisichkami: NewRecipe = {
  title: "Жаренная картошка с лисичками",
  description:
    "В разгаре сезона лисичек стоит вспомнить простой и очень русский рецепт - жаренная картошка с лисичками. Знали ли вы, что лисички это единственные грибы, которые не бывают червивыми? Собирать их одно удовольствие, они всегда хорошо видны.",
  image: {
    src: "/content/recipes/zharennaya-kartoshka-s-lisichkami/zharennaya-kartoshka-s-lisichkami.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 30,
  },
  calories: 908,
  servings: 4,
  tools: ["Сковорода", "Сито"],
  ingredients: [
    {
      name: "картофель",
      note: "",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "грибы",
      note: "лисички",
      amount: {
        value: 350.0,
        unit: "г",
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
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 0.5,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Пропорции картофеля и лисичек могут быть любыми, настолько насобирали и насколько нравится вам самим. Лука репкой тоже можно брать по вкусу, сколько любите.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Тщательно промойте лисички. Выкладывайте их на сковороду с небольшим количеством растительного масла. Обжаривайте. Лесные грибы лучше жарить подольше, чтобы они легче усвоились. После 15 минут жарки добавляйте к грибам резанный лук репку, обжаривайте 5 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавляем к грибам с луком резанный картофель. Жарьте картошку до готовности. Я жарю без крышки для образования корочки. Посолите и блюдо готово!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
