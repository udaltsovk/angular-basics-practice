import { NewRecipe } from "../../models/recipe";

export const marinovannyeOgurczySKoriczejITminom: NewRecipe = {
  title: "Маринованные огурцы с корицей и тмином",
  description: "Пикантная закуска - маринованные огурцы с корицей и тмином.",
  image: {
    src: "/content/recipes/marinovannye-ogurczy-s-koriczej-i-tminom/pickled-cucumbers-with-cinnamon.jpg",
  },
  foodTypes: ["Заготовки"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 15,
  },
  calories: 94,
  servings: 6,
  tools: ["Разделочная доска", "Нож", "Кастрюля", "Контейнер"],
  ingredients: [
    {
      name: "хлопья сушеного чили перца",
      note: "",
      amount: {
        value: 20.0,
        unit: "г",
      },
    },
    {
      name: "огурцы",
      note: "",
      amount: {
        value: 1.5,
        unit: "кг",
      },
    },
    {
      name: "отфильтрованная вода",
      note: "",
      amount: {
        value: 140.0,
        unit: "мл",
      },
    },
    {
      name: "молотые семена тмина",
      note: "",
      amount: {
        value: 20.0,
        unit: "г",
      },
    },
    {
      name: "свежий укроп",
      note: "рубленый",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "рисовый уксус",
      note: "",
      amount: {
        value: 260.0,
        unit: "г",
      },
    },
    {
      name: "крупномолотая соль каменная",
      note: "",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "молотая корица",
      note: "",
      amount: {
        value: 15.0,
        unit: "г",
      },
    },
    {
      name: "коричневый сахар",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "натуральный уксус яблочный",
      note: "",
      amount: {
        value: 240.0,
        unit: "мл",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "На слабый огонь поставить толстостенную кастрюлю и влить в нее весь уксус, насыпать необходимое количество соли,добавить отфильтрованную воду. Перемешать и прогревать уксусную смесь пять минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить сахар, насыпать корицу и специи,довести пряный маринад до кипения и варить его при периодическом помешивании еще пять минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Промыть огурцы, нарезать тоненьким кружочками, переложить в пластиковый контейнер и залить горячим маринадом,тщательно перемешать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Герметично закрыть контейнер и убрать его в холодильник на три часа, затем пикантную закуску из огурцов посыпать укропом и подавать в охлажденном виде.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
