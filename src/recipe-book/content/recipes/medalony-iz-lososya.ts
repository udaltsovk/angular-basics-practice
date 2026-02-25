import { NewRecipe } from "../../models/recipe";

export const medalonyIzLososya: NewRecipe = {
  title: "Медальоны из лосося",
  description:
    "Блюда из лосося - визитная карточка коренных народов северо-запада России. Гармония в еде - основополагающее свойство кухни народов Приладожья и Балтики",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/zapechenniy_losos3.jpg",
  },
  foodTypes: ["Обед", "Основное блюдо"],
  kitchens: ["Карельская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 40,
  },
  calories: 479,
  servings: 6,
  tools: ["Сковорода", "Духовой шкаф"],
  ingredients: [
    {
      name: "лосось",
      note: "",
      amount: {
        value: 2.0,
        unit: "кг",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 1.0,
        unit: "л",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
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
      name: "укроп",
      note: "",
      amount: {
        value: 0.33,
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
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Удалите у рыбы голову и внутренности, по возможности не разрезая брюшину (можно использовать ложку). Голову и плавники можно использовать в приготовлении других блюд, например, ухи. Очистите чешую рыбы.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приготовьте 10% раствор соли. Порежьте рыбу поперек на медальоны. Положите медальоны в соленный раствор на 15 минут. Просушите медальоны и оставьте пропитаться.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте перец. Разогрейте на сковороде сливочное и растительное масло. Дождитесь, пока масляная пена осядет, и обжарьте медальоны с обеих сторон.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Доведите до полной готовности в духовке при температуре 120 градусов.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавайте медальоны с укропом, овощами и топленным маслом",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
