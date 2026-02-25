import { NewRecipe } from "../../models/recipe";

export const govyadinaVImbirnomSouse: NewRecipe = {
  title: "Говядина в имбирном соусе",
  description:
    "Тонкие полоски говядины, тушёные в крепком пикантном соусе из свежего имбиря и рисового вина.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/09/beef-in-ginger-sauce-1.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Японская"],
  diets: [],
  durations: {
    preparation: 10,
    cooking: 15,
  },
  calories: 1530,
  servings: 4,
  tools: [
    "Разделочная доска",
    "Небольшая миска",
    "Нож",
    "Сковорода ВОК",
    "Столовая ложка",
    "Чайная ложка",
  ],
  ingredients: [
    {
      name: "соевый соус",
      note: "",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "рисовое вино",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "коричневый сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "кукурузный крахмал",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
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
      name: "измельченный свежий корень имбиря",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "измельченный чеснок",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "говядина",
      note: "нарезанной тонкими ломтиками",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "В небольшой миске смешайте соевый соус, рисовое вино, коричневый сахар и кукурузный крахмал.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нагрейте масло в воке или сковороде на среднем огне. Обжарьте имбирь и чеснок в течение 30 секунд.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте мясо и жарьте, помешивая, в течение 2 минут или до тех пор, пока он не подрумянится равномерно.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавьте смесь соевого соуса, доведите до кипения, постоянно помешивая.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Убавьте огонь и тушите на медленном огне, пока соус не загустеет и не станет однородным. Подавайте немедленно.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
