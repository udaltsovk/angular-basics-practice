import { NewRecipe } from "../../models/recipe";

export const prianikiKozuli: NewRecipe = {
  title: "Пряники козули Архангельской области",
  description:
    "Пряники &quot;Козули&quot; - традиционная выпечка на Русском ­Севере на праздник Рождества.",
  image: {
    src: "/content/recipes/prianiki-kozuli/prianiki_kozuli.jpg",
  },
  foodTypes: ["Выпечка"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 25,
  },
  calories: 1004,
  servings: 10,
  tools: ["Сотейник", "Венчик", "Бумага для выпечки"],
  ingredients: [
    {
      name: "белок яичный",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "мука",
      note: "",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "желтки яичные",
      note: "",
      amount: {
        value: 6.0,
        unit: "шт",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "сливочное масло",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "мёд",
      note: "",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "сахарная пудра",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
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
      name: "пряности",
      note: "корицы, гвоздики, имбиря, кардамона",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Масло с медом и сахаром растопить в сотейнике",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В желтки добавить щепотку соли, перемешать венчиком, вылить их в растопленное масло и быстро перемешать",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Затем в горячую смесь добавить муку. Добавлять лучше медленно, порциями, вмешивая муку деревянной лопаткой. Мука в горячем масле заваривается, и тесто потом хорошо держит форму. Добавить специи",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Вмешав всю муку, вывалить тесто на стол и долго месить руками. Месить нужно как можно дольше, не меньше десяти минут",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Раскатать тесто в лист толщиной 1 см, вырезать из него фигурки — с помощью специальной формы или просто ножом",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложить фигурки на застеленный пекарской бумагой противень и поставить в разогретую до 200 градусов духовку на пятнадцать-двадцать минут",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Сделать глазурь: два белка смешать с сахарной пудрой. Достать козули и, пока они горячие, кистью обмазать их глазурью. Можно еще сделать козулям глаза — например, из сушеных ягод.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
