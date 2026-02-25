import { NewRecipe } from "../../models/recipe";

export const prostojIBystryjKlubnichnyjSous: NewRecipe = {
  title: "Простой и быстрый клубничный соус",
  description:
    "Больше никакой долгой варки соуса и опасности, что фрукты пригорят. Теперь можно сделать rклубничный соус в течение 3 минут! ",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-0-scaled.jpg",
  },
  foodTypes: ["Соус"],
  kitchens: ["Современная"],
  diets: [],
  durations: {
    preparation: 0,
    cooking: 3,
  },
  calories: 160,
  servings: 1,
  tools: ["Микроволновая печь", "Вилка", "Чашка", "Блендер или кухонный комбайн", "Соусник"],
  ingredients: [
    {
      name: "клубника",
      note: "можно помятой, но не плесневелой",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "сгущенное молоко",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В чашку бросаем очищенную от хвостиков клубнику. Ясное дело, что она должна быть мытой. К клубнике при сборке пристает грунт. Ее необходимо мыть в проточной воде. Давим вилкой максимально.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-1-scaled.jpg",
          },
        },
        {
          body: "Наливаем в эту давленую ягоду воду.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-2-scaled.jpg",
          },
        },
        {
          body: "Засовываем чашку с клубникой на две минуты в микроволновую печь. Включаем ее на среднюю мощность. Получается неоднородное пюре.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-3-scaled.jpg",
          },
        },
        {
          body: "Добавляем сгущенное молоко.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-4-scaled.jpg",
          },
        },
        {
          body: "Перебиваем блендером в течение 15 секунд.",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-5-scaled.jpg",
          },
        },
        {
          body: "Переливаем соус из клубники и сгущенки в соусник. Подаем к ароматным сырникам! Приятного аппетита!",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2022/09/simple-and-quick-strawberry-sauce-6-scaled.jpg",
          },
        },
      ],
    },
  ],
  notes: [],
};
