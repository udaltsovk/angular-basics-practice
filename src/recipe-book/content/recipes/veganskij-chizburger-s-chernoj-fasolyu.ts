import { NewRecipe } from "../../models/recipe";

export const veganskijChizburgerSChernojFasolyu: NewRecipe = {
  title: "Веганский чизбургер с мексиканской черной фасолью и карамелизированным луком",
  description:
    "Веганский чизбургер с мексиканской черной фасолью с карамелизированным луком - вариант приготовления вегетарианского чизбургера в домашних условиях.",
  image: {
    src: "/content/recipes/veganskij-chizburger-s-chernoj-fasolyu/burger_veganov_recept.jpg",
  },
  foodTypes: ["Уличная еда"],
  kitchens: ["Мексиканская"],
  diets: ["Вегетарианская"],
  durations: {
    preparation: 30,
    cooking: 35,
  },
  calories: 569,
  servings: 2,
  tools: ["Сковорода", "Форма для выпечки с небольшим диаметром — диаметром бургера", "Духовка"],
  ingredients: [
    {
      name: "фасоль",
      note: "черная",
      amount: {
        value: 1.0,
        unit: "банка",
      },
    },
    {
      name: "луковица",
      note: "головка",
      amount: {
        value: 1.0,
        unit: "шт",
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
      name: "чеснок",
      note: "",
      amount: {
        value: 3.0,
        unit: "зубчик",
      },
    },
    {
      name: "тмин",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "кинза",
      note: "",
      amount: {
        value: 2.0,
        unit: "веточка",
      },
    },
    {
      name: "чеддер",
      note: "сыр вегетарианский или иной аналог вегетарианского сыра",
      amount: {
        value: 250.0,
        unit: "г",
      },
    },
    {
      name: "миндальное молоко",
      note: "",
      amount: {
        value: 0.5,
        unit: "стакан",
      },
    },
    {
      name: "льняное семя",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "оливковое масло",
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
          body: "Начните с простой черной фасоли по-мексикански, нагрейте немного оливкового масла в сковороде и добавьте чеснок и лук, готовьте пару минут, а затем добавьте черную фасоль, кинзу, тмин и приправы. Продолжайте готовить еще 10-15 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Возьмите форму для пирога и сбрызните ее антипригарным спреем, положите фасоль на дно и покройте нарезанными помидорами. Добавьте сверху здоровый слой веганского сыра вместе с альтернативной веганской яичной смесью и миндальным молоком.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выпекать около 25-30 минут в духовке при температуре 180 градусов.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
