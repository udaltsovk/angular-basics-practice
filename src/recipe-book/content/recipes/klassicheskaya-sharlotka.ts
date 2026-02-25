import { NewRecipe } from "../../models/recipe";

export const klassicheskayaSharlotka: NewRecipe = {
  title: "Классическая шарлотка",
  description: "Классическая шарлотка - легендарный яблочный десерт.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/sharlotka-klassicheskaya.jpg",
  },
  foodTypes: ["Выпечка"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 20,
  },
  calories: 136,
  servings: 5,
  tools: ["Чаша для взбивания", "Форма для запекания", "Противень"],
  ingredients: [
    {
      name: "куриные яйца",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "пшеничная мука",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "яблоки",
      note: "",
      amount: {
        value: 7.0,
        unit: "шт",
      },
    },
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сода",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Отделить белки от желтков. Белки взбивать в крепкую пену, постепенно добавляя сахар. Начните разогревать духовку до 180 градусов.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Продолжать взбивать, добавлять по одному желтки. Позднее добавить  гашеную соду, далее муку. Тесто по консистенции должно быть как сметана.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смазать форму для выпечки растительным маслом. Вылить половину теста в форму для выпечки. Разложите равномерно нарезанные дольками яблоки. Выньте семечки и снимите кожу с яблок. Вылейте вторую половину теста в форму.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместить противень с формой для выпечки в разогретую духовку. На температуре 180 градусов выпекайте шарлотку 20-25 минут.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
