import { NewRecipe } from "../../models/recipe";

export const hlebAvstralijskihFej: NewRecipe = {
  title: "Волшебный хлеб австралийских фей",
  description:
    "Волшебный Хлеб Феи - любимая австралийская закуска для вечеринок как детей, так и ностальгирующих взрослых. Приготовьте это красочное угощение за считанные минуты, используя всего три ингредиента!",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/fairy-bread-avstralian.jpeg",
  },
  foodTypes: ["Десерт", "Закуска", "Сэндвич"],
  kitchens: ["Австралийская"],
  diets: ["Низкокалорийная"],
  durations: {
    preparation: 5,
    cooking: 5,
  },
  calories: 68,
  servings: 12,
  tools: ["Нож", "Разделочная доска"],
  ingredients: [
    {
      name: "белый хлеб",
      note: "",
      amount: {
        value: 6.0,
        unit: "ломтик",
      },
    },
    {
      name: "сливочное масло",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "разноцветная кондитерская посыпка",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Чтобы приготовить свой собственный сказочный хлеб, смажьте каждый ломтик белого хлеба большим количеством масла.  Обязательно распределите его до краев.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Посыпьте каждый ломтик разноцветной кондитерской посыпкой.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Наконец, нарежьте хлеб на треугольники и наслаждайтесь!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
