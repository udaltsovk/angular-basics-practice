import { NewRecipe } from "../../models/recipe";

export const prostayaYaponskayaKuriczaTeriyaki: NewRecipe = {
  title: "Простая японская курица терияки",
  description:
    "Готовы к сочной курице-гриль с приторно-сладкой соевой глазурью? Насыщенная вкусом курица терияки - легкое блюдо для всей семьи. Перенеситесь в Японию с этим культовым блюдом!",
  image: {
    src: "/content/recipes/prostaya-yaponskaya-kuricza-teriyaki/easy-japanese-teriyaki-chicken.jpg",
  },
  foodTypes: ["Основное блюдо", "Ужин"],
  kitchens: ["Японская"],
  diets: [],
  durations: {
    preparation: 5,
    cooking: 10,
  },
  calories: 140,
  servings: 2,
  tools: ["Миска для смешивания", "Большая сковорода ВОК для жарки"],
  ingredients: [
    {
      name: "куриные бедра",
      note: "или 300 грамм",
      amount: {
        value: 2.0,
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
      name: "мирина",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "кулинарный саке",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "соевый соус",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "устричный соус",
      note: "",
      amount: {
        value: 0.5,
        unit: "ст. л.",
      },
    },
    {
      name: "рубленный чеснок",
      note: "",
      amount: {
        value: 0.5,
        unit: "ст. л.",
      },
    },
    {
      name: "перец",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "соуса терияки",
      note: "",
      amount: {
        value: 225.0,
        unit: "мл",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В миску среднего размера положите куриные бедра и добавьте соевый соус, саке, мирин, устричный соус, чеснок и перец. Накройте и оставьте мариноваться в холодильнике минимум на 30 минут (или на ночь).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте растительное масло в большую сковороду на сильном огне. Как только масло нагреется, добавьте маринованные куриные бедра и готовьте в течение 3 минут, затем переверните на другую сторону.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте соус терияки и готовьте еще 3 минуты. Переворачивайте курицу каждые пару минут или около того, пока соус не загустеет, чтобы получилась красивая и равномерная глазурь.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Продолжайте готовить, пока соус не прилипнет к курице и не загустеет (около 3-5 минут).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Снимите со сковороды и дайте постоять пару минут, прежде чем нарезать для подачи. Покройте или полейте оставшимся на сковороде соусом.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Подавайте горячим с рисом и мисо-супом.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
