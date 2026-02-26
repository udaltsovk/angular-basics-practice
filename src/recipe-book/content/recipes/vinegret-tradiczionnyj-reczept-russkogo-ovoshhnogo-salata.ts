import { NewRecipe } from "../../models/recipe";

export const vinegretTradiczionnyjReczeptRusskogoOvoshhnogoSalata: NewRecipe = {
  title: "Винегрет: традиционный рецепт русского овощного салата",
  description:
    "Винегрет - это цветной и питательный салат, который является частью русской кулинарной традиции.",
  image: {
    src: "/content/recipes/vinegret-tradiczionnyj-reczept-russkogo-ovoshhnogo-salata/salad-vinaigrette.jpg",
  },
  foodTypes: ["Салат"],
  kitchens: ["Русская"],
  diets: ["Вегетарианская"],
  durations: {
    preparation: 60,
    cooking: 15,
  },
  calories: 19,
  servings: 6,
  tools: [
    "Кастрюля для варки овощей",
    "Овощечистка",
    "Нож",
    "Разделочная доска",
    "Миска для смешивания",
    "Ложка для перемешивания",
  ],
  ingredients: [
    {
      name: "Свекла",
      note: "средняя",
      amount: {
        value: 2.0,
        unit: "шт",
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
      name: "Квашеная капуста",
      note: "",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "Зеленый горошек",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "Лук репчатый",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "Растительное масло",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "Соль",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "Перец",
      note: "",
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
          body: "Свеклу, картофель и морковь отварить до готовности, остудить и очистить.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Овощи нарезать кубиками.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Квашеную капусту слегка отжать от лишней жидкости.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Лук мелко нарезать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Все ингредиенты смешать, добавить зеленый горошек.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заправить салат растительным маслом, посолить и поперчить по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
