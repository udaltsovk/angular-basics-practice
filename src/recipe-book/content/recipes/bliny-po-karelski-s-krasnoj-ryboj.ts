import { NewRecipe } from "../../models/recipe";

export const blinyPoKarelskiSKrasnojRyboj: NewRecipe = {
  title: "Блины по-карельски с красной рыбой",
  description: "Первое место в карельской кухне занимает рыба.",
  image: {
    src: "/content/recipes/bliny-po-karelski-s-krasnoj-ryboj/main.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Карельская"],
  diets: [],
  durations: {
    preparation: 120,
    cooking: 60,
  },
  calories: 1077,
  servings: 4,
  tools: ["Сковорода", "Миска", "Противень"],
  ingredients: [
    {
      name: "молоко",
      note: "",
      amount: {
        value: 1.0,
        unit: "л",
      },
    },
    {
      name: "яйцо",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "мука",
      note: "пшеничной",
      amount: {
        value: 500.0,
        unit: "г",
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
      name: "растительное масло",
      note: "",
      amount: {
        value: 20.0,
        unit: "мл",
      },
    },
    {
      name: "красная рыба",
      note: "",
      amount: {
        value: 400.0,
        unit: "г",
      },
    },
    {
      name: "яйцо",
      note: "вареное",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "лук",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "сметана",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "сыр",
      note: "тертый",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
    {
      name: "укроп",
      note: "свежего",
      amount: {
        value: 10.0,
        unit: "г",
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
          body: "Тесто: приготовить тесто, размешав в молоке яйцо, муку и соль. Необходимо настоять тесто в течении 2 часов. Испечь тонкие блины",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Рыбная начинка: перемешайте отварную рыбу, отваренные яйца, лук, сметану и укроп. Соль, перец - по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложите начинку на блин и сверните в трубочку или конверт, по желанию.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Начиненные блины сложите на противень, посыпьте тертым сыром. Запекайте в духовке 8-10 минут на температуре 200 градусов. Блины подавайте с чаем",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
