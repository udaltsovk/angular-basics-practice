import { NewRecipe } from "../../models/recipe";

export const farshirovannyePomidoryVDuhovkeSKurinymFarshem: NewRecipe = {
  title: "Фаршированные помидоры в духовке с мясным фаршем",
  description: "Помидоры фаршированные куриным мясом - просто и вкусно.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/10/stuffed-tomatoes-scaled.jpg",
  },
  foodTypes: ["Основное блюдо"],
  kitchens: ["Французская"],
  diets: [],
  durations: {
    preparation: 25,
    cooking: 20,
  },
  calories: 2650,
  servings: 4,
  tools: ["Сковорода", "Чайная ложка", "Столовая ложка", "Противень", "Разделочная доска", "Нож"],
  ingredients: [
    {
      name: "помидоры",
      note: "",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "фарш",
      note: "куриного",
      amount: {
        value: 500.0,
        unit: "г",
      },
    },
    {
      name: "сыр",
      note: "твердого",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "лук репчатый",
      note: "",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
    {
      name: "подсолнечное масло",
      note: "",
      amount: {
        value: 2.0,
        unit: "ст. л.",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 4.0,
        unit: "г",
      },
    },
    {
      name: "молотый черный перец",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "сметана",
      note: "или майонеза",
      amount: {
        value: 3.0,
        unit: "ст. л.",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 1.0,
        unit: "зубчик",
      },
    },
    {
      name: "молотый черный перец",
      note: "по вкусу",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "петрушка",
      note: "или укроп",
      amount: {
        value: 100.0,
        unit: "г",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Для начала обжарьте фарш до румяной корочки. Затем на отдельной сковороде обжарьте лук. Соедините мясо и обжаренный репчатый лук, и хорошенько перемешайте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Приготовим помидоры.Отрежьте вверх у каждого помидора и чайной ложкой достаньте всю мякоть. Затем добавьте мякоть в уже подготовленный фарш и перемешайте. Не забудьте посолить и поперчить. Затем выкладываем готовую начинку в помидоры, посыпаем сверху сыром.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разогреваем духовой шкаф до 200 градусов. Выкладываем помидоры на противень и выпекаем в течение 20 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Пока помидоры стоят в духовке, приготовим соус для подачи. Чеснок и зелень нужно измельчить, затем добавить их в майонез или сметану (по вашему усмотрению), а также приправить полученную массу черным перцем.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Достаем помидоры, а сверху украшаем пикантным соусом.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
