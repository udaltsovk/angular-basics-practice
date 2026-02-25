import { NewRecipe } from "../../models/recipe";

export const sousDlyaBigMakSostavIngredientovIPoshagovyjReczept: NewRecipe = {
  title: "Специальный соус для Биг Мак",
  description:
    "Этот пошаговый рецепт соуса Биг Мак настолько близок к специальному секретному соусу Макдоналдс, что вы не сможете почувствовать разницу!",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2022/04/sauce-big-mac.jpg",
  },
  foodTypes: ["Соус"],
  kitchens: ["Американская"],
  diets: [],
  durations: {
    preparation: 0,
    cooking: 5,
  },
  calories: 135,
  servings: 12,
  tools: ["Миска"],
  ingredients: [
    {
      name: "майонез",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "салат из сладких огурцов релиш",
      note: "или соус огуречный",
      amount: {
        value: 0.25,
        unit: "стакан",
      },
    },
    {
      name: "готовая желтая горчица",
      note: "",
      amount: {
        value: 0.5,
        unit: "ст. л.",
      },
    },
    {
      name: "белый винный уксус",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "паприка",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "чесночный порошок",
      note: "",
      amount: {
        value: 0.25,
        unit: "ч. л.",
      },
    },
    {
      name: "луковый порошок",
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
          body: "Поместите все ингредиенты в миску и взбейте, чтобы их соединить между собой.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Можно употреблять сразу, но вкус лучше всего раскрывается, если оставить на ночь в холодильнике. Хранить в герметичном контейнере.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
