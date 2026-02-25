import { NewRecipe } from "../../models/recipe";

export const ruletIzForeliPoKarelski: NewRecipe = {
  title: "Рулет из форели по-карельски",
  description: "Рулет из филе форели по рецепту жителей деревни Кирхи",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/rulet-iz-foreli-scaled.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Карельская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 20,
  },
  calories: 772,
  servings: 4,
  tools: ["Нить кулинарная", "Терка для сыра", "Сковорода"],
  ingredients: [
    {
      name: "форель",
      note: "филе",
      amount: {
        value: 1.5,
        unit: "кг",
      },
    },
    {
      name: "сыр",
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
      name: "укроп",
      note: "",
      amount: {
        value: 0.5,
        unit: "пучок",
      },
    },
    {
      name: "перец",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Очистите филе от костей.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Аккуратно отделите до половины кожу на куске филе форели. Половину отмеряйте от хвоста к голове.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посолите и поперчите филе, добавьте нашинкованный укроп. Посыпьте сверху тертым сыром (твердых или полутвердых сортов).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Сверните рулет так, чтобы кожа осталась сверху. Оберните ей кусок рулета снаружи и все перевяжите кулинарной нитью.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Растопите на сковороде масло, жарьте филе на слабом огне 5 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поставьте блюдо в духовку на 10 минут на температуру 150 градусов.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "При подаче блюда хорошо сочетается с маринованным луком.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
