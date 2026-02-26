import { NewRecipe } from "../../models/recipe";

export const siczilijskayaKaponataIliOvoshhnoeRagu: NewRecipe = {
  title: "Сицилийская капоната или овощное рагу",
  description:
    "Сицилийская капоната или овощное рагу по-сицилийски - это прекрасный гарнир на основе баклажанов. Гарнир удачен как в горячем, так и в холодном состоянии.",
  image: {
    src: "/content/recipes/siczilijskaya-kaponata-ili-ovoshhnoe-ragu/siciliyskoe_ragu_caponnata.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Средиземноморская"],
  diets: [],
  durations: {
    preparation: 20,
    cooking: 25,
  },
  calories: 247,
  servings: 4,
  tools: ["Сковорода"],
  ingredients: [
    {
      name: "баклажаны",
      note: "",
      amount: {
        value: 600.0,
        unit: "г",
      },
    },
    {
      name: "луковица",
      note: "",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "протертые помидоры",
      note: "или пасаты",
      amount: {
        value: 100.0,
        unit: "мл",
      },
    },
    {
      name: "сельдерей",
      note: "стебель",
      amount: {
        value: 1.0,
        unit: "шт",
      },
    },
    {
      name: "помидоры",
      note: "черри",
      amount: {
        value: 120.0,
        unit: "г",
      },
    },
    {
      name: "оливки",
      note: "зеленых",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "каперсы",
      note: "",
      amount: {
        value: 1.0,
        unit: "ч. л.",
      },
    },
    {
      name: "базилик",
      note: "зеленый",
      amount: {
        value: 2.0,
        unit: "веточка",
      },
    },
    {
      name: "кедровые орехи",
      note: "",
      amount: {
        value: 40.0,
        unit: "г",
      },
    },
    {
      name: "винный уксус",
      note: "белого",
      amount: {
        value: 40.0,
        unit: "мл",
      },
    },
    {
      name: "оливковое масло",
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
        value: 2.0,
        unit: "щепотка",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Измельчить баклажаны и поджарить на оливковом масле. После приготовления – откладываем их на бумажные полотенца.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарезать мелко сельдерей, лук. Черри разделить пополам.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Обжарить лук на масле, добавить пассату (тертые томаты). Пассату (протертый помидор) можно заменить на на 1 столовую ложку томатной пасты, растворенной в воде. На небольшом огне готовить несколько минут. Добавляем измельченный сельдерей. Готовим еще 2 минуты.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавляем каперсы, оливки и помидоры. Оставляем на сковороде еще 5 минут.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавляем приготовленные баклажаны и листы базилика зеленого свежего.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Попробуйте блюдо, посолите по вкусу. Если любите, то добавьте поджаренные кедровые орешки в конце. В оригинальном сицилийском варианте они присутствуют, но можно и пропустить этот момент. При подаче удачно сочетается со слегка хрустящими тостами!",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
