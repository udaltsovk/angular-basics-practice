import { NewRecipe } from "../../models/recipe";

export const syrnikiIzTvorogaPoshagovyjReczept: NewRecipe = {
  title: "Сырники из творога. Пошаговый рецепт",
  description: "Сырники из творога - блюдо знакомое детства. Сырники идеальны для завтраков.",
  image: {
    src: "/content/recipes/syrniki-iz-tvoroga-poshagovyj-reczept/sirniki-iz-tvoroga.jpg",
  },
  foodTypes: ["Завтрак"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 25,
  },
  calories: 160,
  servings: 3,
  tools: ["Миска", "Сковорода", "Сито", "Марля", "Венчик"],
  ingredients: [
    {
      name: "творог",
      note: "",
      amount: {
        value: 350.0,
        unit: "г",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сахар",
      note: "ванильный",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "яйцо",
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
        value: 2.0,
        unit: "ст. л.",
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
    {
      name: "растительное масло",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 0.25,
        unit: "ч. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Творог протрите через сито в миску. Если творог слишком влажный, откиньте его на марлю и отожмите.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В миску с творогом добавьте обычный и ванильный сахар, а также маленькую щепотку соли. Перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Взбейте яйца венчиком. Добавьте в творожную массу и перемешайте лопаткой или вилкой.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Всыпьте муку. Перемешивайте до получения теста однородной гладкой консистенции. Тесто для сырников уберите на 15 минут в холодильник.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Стол присыпьте небольшим количеством муки. Выложите приготовленное тесто для классических сырников и руками сформуйте из него толстую колбаску диаметром 5 см. Получившуюся «колбаску» нарежьте кружочками толщиной не более 1,5 см.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В сковороде нагрейте оба вида масла. Жарьте сырники по 2 минуты с каждой стороны. Затем накройте крышкой и готовьте еще 7 минут на маленьком огне.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
