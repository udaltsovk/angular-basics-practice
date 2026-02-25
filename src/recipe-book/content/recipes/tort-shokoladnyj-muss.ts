import { NewRecipe } from "../../models/recipe";

export const tortShokoladnyjMuss: NewRecipe = {
  title: "Торт шоколадный мусс",
  description:
    "Вкус шоколада в сливочном торте, который тает во рту и приглашает вас съесть еще один кусочек шоколадного муссового торта.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/tortshokmuss.jpeg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 20,
  },
  calories: 441,
  servings: 6,
  tools: [
    "Противень",
    "Бумага для выпечки",
    "Форма для запекания",
    "Чайная ложка",
    "Столовая ложка",
    "Мерный стакан",
  ],
  ingredients: [
    {
      name: "кулинарный шоколад",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "несоленое масло",
      note: "",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 4.0,
        unit: "шт",
      },
    },
    {
      name: "желтый сахар",
      note: "или белого сахара",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "ванильная эссенция",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "какао",
      note: "",
      amount: {
        value: 4.0,
        unit: "ст. л.",
      },
    },
    {
      name: "мука",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "разрыхлитель",
      note: "",
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
          body: "Разогрейте духовку до 160º. Выстелите дно противня для торта бумагой для выпечки.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смажьте сливочным маслом (основу и стороны) и присыпьте мукой. Отложите в сторону.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Растопите шоколад и масло в жаропрочной миске в пароварке.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Снимите с огня и дайте немного остыть.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Тем временем взбивайте яйца с сахаром в чаше электрического миксера в течение 10 минут или пока они не увеличатся в объеме втрое и не получится очень густая смесь светлого цвета.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте ваниль и взбивайте еще несколько секунд.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте растопленную шоколадную смесь и перемешайте. Просейте сверху какао, муку и аккуратно размешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Вылейте смесь в форму и выпекайте в духовке в течение 20 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выньте из духовки и оставьте немного остыть.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Проведите ножом для масла под тортом, чтобы снять его.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выньте и аккуратно переложите на сервировочное блюдо.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавайте теплым, по желанию с малиной, йогуртом или мороженым.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Пришло время попробовать !!! Наслаждайтесь едой!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
