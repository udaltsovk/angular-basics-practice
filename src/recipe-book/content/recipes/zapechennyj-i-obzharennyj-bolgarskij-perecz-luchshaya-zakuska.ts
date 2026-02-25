import { NewRecipe } from "../../models/recipe";

export const zapechennyjIObzharennyjBolgarskijPereczLuchshayaZakuska: NewRecipe = {
  title: "Запеченный и пожаренный болгарский перец",
  description:
    "Как запечь перец двумя простыми способами (в духовке или на плите), а также как замариновать его для последующего приготовления. Маринованный перец по-итальянски хранится в холодильнике от 1 до 2 недель.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2022/06/zapechennie_zharennie_bolgarskie_perci_-rotated.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Итальянская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 40,
  },
  calories: 71,
  servings: 5,
  tools: [],
  ingredients: [
    {
      name: "болгарский перец",
      note: "",
      amount: {
        value: 5.0,
        unit: "шт",
      },
    },
    {
      name: "оливковое масло",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 2.0,
        unit: "зубчик",
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
