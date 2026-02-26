import { NewRecipe } from "../../models/recipe";

export const kruzhevnoeMindalnoApelsinovoePechene: NewRecipe = {
  title: "Кружевное миндально-апельсиновое печенье",
  description:
    "Семена аниса добавят нотку лакрицы к этому красивому кружевному печенью из молотого миндаля. Апельсиновая цедра придаст цитрусовый аромат.",
  image: {
    src: "/content/recipes/kruzhevnoe-mindalno-apelsinovoe-pechene/lacy-almond-and-orange-cookies2.jpg",
  },
  foodTypes: ["Выпечка"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 10,
  },
  calories: 128,
  servings: 6,
  tools: [
    "Бумага для выпечки",
    "Кухонный комбайн",
    "Кастрюля",
    "Противень",
    "Чайная ложка",
    "Столовая ложка",
    "Стакан",
  ],
  ingredients: [
    {
      name: "Миндаль",
      note: "бланшированный и измельченный",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "Семена аниса",
      note: "или фенхеля",
      amount: {
        value: 0.75,
        unit: "ч. л.",
      },
    },
    {
      name: "Сливочное масло",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "Сахар",
      note: "",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "мёд",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "Соль",
      note: "крупная",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "мука",
      note: "универсальная",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "апельсиновая цедра",
      note: "мелко натертая",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Разогрейте духовку до 190 градусов. Застелите 2 противня пергаментной бумагой.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В кухонном комбайне измельчите миндаль и семена аниса до грубого помола. Переложите смесь в небольшую кастрюлю. Добавьте растопленное масло, сахар, мёд и соль. Доведите до кипения на среднем огне, перемешав ингредиенты. Кипятите 1 минуту, снимите с огня. Добавьте муку и цедру апельсина.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "С помощью чайной ложки выложите тесто в форме печенья на подготовленные противни на расстоянии 5-6 сантиметров друг от друга.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Запекайте до золотисто-коричневого цвета, 6-8 минут. Дайте полностью остыть.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
