import { NewRecipe } from "../../models/recipe";

export const domashniePalochkiMoczarellySSyromKosichkoj: NewRecipe = {
  title: "Домашние палочки моцареллы с сыром косичкой",
  description:
    "Приготовить домашние палочки моцареллы с сыром &quot;косичка&quot; очень просто, ведь сыр уже идеально подходит для порций! Просто панируйте и обжарьте во фритюре до совершенства!",
  image: {
    src: "/content/recipes/domashnie-palochki-moczarelly-s-syrom-kosichkoj/homemade-mozzarella-sticks-1-scaled.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Итальянская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 1,
  },
  calories: 530,
  servings: 4,
  tools: ["Чугунная сковорода  или фритюрница", "Миска", "Бумажное полотенце"],
  ingredients: [
    {
      name: "сыр &quot;косичка&quot;",
      note: "",
      amount: {
        value: 450.0,
        unit: "г",
      },
    },
    {
      name: "итальянские панировочные сухари",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "молоко",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "масло",
      note: "для жарки",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "итальянский соус Маринара",
      note: "для обмакивания",
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
          body: "Наполните сковороду маслом на 5 сантиметров и разогрейте до 185 градусов по Цельсию.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Взбейте вместе молоко и яйцо в миске.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте панировочные сухари в отдельную миску.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Обмакните струнный сыр в яйцо, затем в сухари, затем снова в яйцо и снова в сухари.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Обжаривайте во фритюре партиями до золотисто-коричневой корочки, около 1 минуты.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выньте из фритюра и дайте стечь на бумажном полотенце, затем подавайте с итальянским соусом маринара.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
