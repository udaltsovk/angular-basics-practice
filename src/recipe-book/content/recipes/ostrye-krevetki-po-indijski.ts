import { NewRecipe } from "../../models/recipe";

export const ostryeKrevetkiPoIndijski: NewRecipe = {
  title: "Острые креветки по-индийски",
  description: "Жгучая закуска из морепродуктов  с простым приготовлением.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/08/spicy-shrimp-2.jpg",
  },
  foodTypes: ["Морепродукты"],
  kitchens: ["Индийская"],
  diets: [],
  durations: {
    preparation: 30,
    cooking: 10,
  },
  calories: 564,
  servings: 2,
  tools: [
    "Сковорода из чугуна",
    "Бумажные полотенца",
    "Неглубокое блюдо",
    "Столовая ложка",
    "Чайная ложка",
  ],
  ingredients: [
    {
      name: "очищенные крупные креветки",
      note: "",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "Листья салата",
      note: "",
      amount: {
        value: 70.0,
        unit: "г",
      },
    },
    {
      name: "джин",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "тертый свежий имбирь",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "светло-коричневый сахар",
      note: "",
      amount: {
        value: 1.5,
        unit: "ч. л.",
      },
    },
    {
      name: "кайенский перец",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "черный перец",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "молотый тмин",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "молотая корица",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "молотая куркума",
      note: "",
      amount: {
        value: 0.25,
        unit: "ч. л.",
      },
    },
    {
      name: "молотая гвоздика",
      note: "",
      amount: {
        value: 0.25,
        unit: "ч. л.",
      },
    },
    {
      name: "Рапсовое масло",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "мелкая соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "свежий лимонный сок",
      note: "",
      amount: {
        value: 1.5,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
