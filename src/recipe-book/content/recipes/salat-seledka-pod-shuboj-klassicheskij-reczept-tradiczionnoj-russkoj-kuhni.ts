import { NewRecipe } from "../../models/recipe";

export const salatSeledkaPodShubojKlassicheskijReczeptTradiczionnojRusskojKuhni: NewRecipe = {
  title: "Салат селедка под шубой: классический рецепт традиционной русской кухни",
  description: "Салат &quot;Селедка под шубой&quot; - настоящая классика русской кулинарии",
  image: {
    src: "/content/recipes/salat-seledka-pod-shuboj-klassicheskij-reczept-tradiczionnoj-russkoj-kuhni/erring-under-a-fur-coat.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 30,
    cooking: 60,
  },
  calories: 280,
  servings: 6,
  tools: [
    "Кастрюля для варки овощей",
    "Овощечистка",
    "Нож",
    "Терка",
    "Миска для смешивания",
    "Плоское блюдо для сервировки",
  ],
  ingredients: [
    {
      name: "Селедка маринованная",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "Картофель",
      note: "средний",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "Морковь",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "Свекла",
      note: "большая",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "Лук репчатый",
      note: "маленькая головка",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "Майонез",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "Соль",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "Перец",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Картофель, морковь и свеклу отварить в мундире до готовности, затем остудить и очистить.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Овощи нарезать тонкими слоями или натереть на крупной терке.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Селедку нарезать мелкими кубиками.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Лук мелко нарезать и залить кипятком на 5 минут, чтобы убрать горечь.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложить ингредиенты слоями: сначала селедку, затем лук, картофель, морковь и свеклу, каждый слой промазывая майонезом.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Салат украсить по желанию.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
