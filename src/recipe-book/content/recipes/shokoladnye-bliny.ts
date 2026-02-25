import { NewRecipe } from "../../models/recipe";

export const shokoladnyeBliny: NewRecipe = {
  title: "Шоколадные блины",
  description:
    "Еще более сладкий вариант традиционных блинов в американском стиле. Узнайте, как приготовить вкусные шоколадные блины.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/chocolate-pancakes.jpg",
  },
  foodTypes: ["Выпечка", "Десерт"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 15,
  },
  calories: 271,
  servings: 4,
  tools: [],
  ingredients: [
    {
      name: "молоко",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "мука",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "шоколадная пудра",
      note: "или тертого шоколада",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
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
      name: "растопленное сливочное масло",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
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
          body: "Начните с добавления в кастрюлю жидких ингредиентов: молока, яйца и топленого масла.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Хорошо взбить, пока не образуется однородная масса.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "В другую емкость добавьте шоколадную пудру, сахар, муку и разрыхлитель. Хорошо перемешать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Вылейте кастрюлю (жидкие ингридиенты) в эту новую емкость (твердые ингредиенты).",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Перемешайте и соедините все ингредиенты. Внимание: если взбивать слишком сильно, блины не будут такими воздушными.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нагрейте сковороду с антипригарным покрытием на среднем огне и смажьте ее оливковым маслом или растопленным маслом.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выложите ложку теста на сковороду и немного разровняйте его.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Когда сверху начнут образовываться пузырьки, переверните блин.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Повторяйте процесс, пока тесто не закончится, смазывая сковороду жиром по мере необходимости.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
