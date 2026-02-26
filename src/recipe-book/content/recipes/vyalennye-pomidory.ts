import { NewRecipe } from "../../models/recipe";

export const vyalennyePomidory: NewRecipe = {
  title: "Вяленные помидоры",
  description: "Вяленые помидоры - легендарная итальянская закуска.",
  image: {
    src: "/content/recipes/vyalennye-pomidory/vialennie_pomidory_duhovka.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Итальянская"],
  diets: [],
  durations: {
    preparation: 25,
    cooking: 600,
  },
  calories: 185,
  servings: 4,
  tools: ["Противень", "Бумага для выпечки", "Банка для консервации"],
  ingredients: [
    {
      name: "томаты",
      note: "сливовидные",
      amount: {
        value: 1.5,
        unit: "кг",
      },
    },
    {
      name: "соль морская",
      note: "",
      amount: {
        value: 30.0,
        unit: "г",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "орегано",
      note: "специя",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 3.0,
        unit: "зубчик",
      },
    },
    {
      name: "базилик",
      note: "свежий",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "каперсы",
      note: "",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "оливковое масло",
      note: "extra virgin",
      amount: {
        value: 40.0,
        unit: "мл",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Нарезаем томаты на ровные половинки. Если плодоножки небольшие их необязательно обрезать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "На противень постелить пергаментную бумагу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Равномерно распределить половинки помидор разрезом вверх.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Далее в ход идут соль, сахар и специи. Используйте специи на ваш вкус. На каждую половинку томата распределяйте щепотку морской соли и чуть меньшую щепотку сахара. Он «заберет» из помидора лишнюю влагу. Далее добавляйте измельченный свежий базилик и орегано.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Направляем противень в духовку на 8-10 часов при 100 градусах. Если в доме нет детей, рекомендуется на какое-то время немного приоткрыть духовой шкаф, чтобы оттуда вышел лишний пар — так томаты приготовятся быстрее. ",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Удобным вам способом простерилизуйте банку.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "После того как достанете томаты из духовки, дайте им остыть до комнатной температуры.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В подготовленную банку выкладывайте томаты слоями, а между ними кусочки нарезанного чеснока и специи (по вкусу). Добавляем в банку базилик, каперсы (по желанию).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заливаем томаты оливковым маслом так, чтобы покрыть все томаты. Важно: не закатываем банку! Закручиваем руками крышку. На утро вяленные томаты готовы!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
