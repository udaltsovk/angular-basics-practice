import { NewRecipe } from "../../models/recipe";

export const poshagovyjReczeptZapechennyhYablok: NewRecipe = {
  title: "Пошаговый рецепт запеченных яблок",
  description:
    "Вы можете использовать этот рецепт, чтобы приготовить фаршированные запеченные яблоки с восхитительной смесью корицы и коричневого сахара. В рецепт можно добавить орехи.",
  image: {
    src: "/content/recipes/poshagovyj-reczept-zapechennyh-yablok/pechennie_yabloki_.jpg",
  },
  foodTypes: ["Десерт"],
  kitchens: ["Русская"],
  diets: ["Безглютеновая"],
  durations: {
    preparation: 10,
    cooking: 40,
  },
  calories: 97,
  servings: 6,
  tools: ["Противень", "Миска для смешивания", "Форма для запекания"],
  ingredients: [
    {
      name: "большие яблоки для запекания",
      note: "",
      amount: {
        value: 6.0,
        unit: "шт",
      },
    },
    {
      name: "коричневый сахар",
      note: "",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "орехи",
      note: "измельченных грецких орехов, фисташек",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "клюква",
      note: "или других нарезанных сухофруктов на ваш     выбор",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "корица",
      note: "молотой",
      amount: {
        value: 0.75,
        unit: "ч. л.",
      },
    },
    {
      name: "изюм",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "сливочное масло",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Разогрейте духовку до 180 градусов.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В небольшой миске смешайте коричневый сахар, орехи, изюм или сухофрукты по вашему выбору. Добавьте корицу. Хорошо перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "С помощью острого ножа удалите верх и сердцевину.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разложите яблоки полостью вверх в форму для запекания. Ложкой насыпьте смесь коричневого сахара и орехов в углубления яблок, чтобы заполнить их полностью.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложите небольшой кусочек сливочного масла в область фарширования  яблок.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Поместите форму для запекания на центральную решетку разогретой духовки и запекайте в течение 40–45 минут или до тех пор, пока яблоки не станут полностью приготовленными и нежными (будьте осторожны, чтобы не пережарить их, если вы не хотите, чтобы яблоки стали мягкими).",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
