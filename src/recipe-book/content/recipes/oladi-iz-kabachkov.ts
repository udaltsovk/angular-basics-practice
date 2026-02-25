import { NewRecipe } from "../../models/recipe";

export const oladiIzKabachkov: NewRecipe = {
  title: "Оладьи из кабачков",
  description:
    "Рецепт - спасение в момент сбора урожаев кабачков, а урожаи обычно обширны ) Оладьи из кабачков.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/oladi-iz-kabachkov-na-skovorode.jpg",
  },
  foodTypes: ["Обед", "Основное блюдо", "Ужин"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 12,
    cooking: 30,
  },
  calories: 40,
  servings: 7,
  tools: ["Миска", "Терка", "Сковорода"],
  ingredients: [
    {
      name: "кабачки",
      note: "молодые, небольшие",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "яйцо",
      note: "куриное",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "мука",
      note: "",
      amount: {
        value: 5.0,
        unit: "ст. л.",
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
        value: 2.0,
        unit: "ч. л.",
      },
    },
    {
      name: "сметана",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Очистить кабачки от кожуры и крупных семян внутри. Потереть на крупной терке.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2021/10/peel-the-zucchini.jpg",
          },
        },
        {
          body: "Добавить яйца и муку с солью. Все перемешать. Выпекать на разогретой сковороде, используя растительное масло, чтобы не пригорали оладии.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2021/10/zucchini-molds-and-baking.jpg",
          },
        },
        {
          body: "По готовности подавать со сметаной или йогуртом",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2021/09/oladi-iz-kabachkov-na-skovorode.jpg",
          },
        },
      ],
    },
  ],
  notes: [],
};
