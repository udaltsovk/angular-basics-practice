import { NewRecipe } from "../../models/recipe";

export const prostyeOnigiriYaponskieRisovyeShariki: NewRecipe = {
  title: "Простые онигири - японские рисовые шарики",
  description:
    "Простой рецепт онигири со вкусом вкусных японских приправ, завернутых в нори, идеально подходит для быстрого перекуса или вкусного ланчбокса.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/12/easy-onigiri-japanese-rice-balls.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Японская"],
  diets: ["Низкокалорийная"],
  durations: {
    preparation: 5,
    cooking: 5,
  },
  calories: 103,
  servings: 6,
  tools: [],
  ingredients: [
    {
      name: "сваренный рис",
      note: "для суши",
      amount: {
        value: 3.0,
        unit: "стакан",
      },
    },
    {
      name: "приправы фурикакэ",
      note: "для риса",
      amount: {
        value: 50.0,
        unit: "г",
      },
    },
    {
      name: "листы нори",
      note: "нарезанные на небольшие прямоугольники",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "вода",
      note: "",
      amount: {
        value: 0,
        unit: "",
      },
    },
    {
      name: "соль",
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
          body: "Переложите сваренный рис для суши в большую миску для смешивания. Добавьте приправу для риса фурикаке и равномерно перемешайте. Примечание: если вам захочется спрятать внутри что-нибудь вкусненькое, этот шаг можно пропустить.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разделите рис на равные порции, примерно по одной большой горсти для каждого онигири.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Смочите руки водой и разотрите их двумя щепотками соли. Это предотвратит прилипание риса к рукам и поможет дольше сохранить его свежим.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Возьмите одну горсть/порцию риса. Если вы хотите спрятать внутри начинку, сделайте углубление, положите ингредиенты внутрь и сверните рис, затем слегка сформируйте его в шар.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Положив рис на ладонь в основном кончиками пальцев, начните нажимать и сжимать рис, придавая ему треугольную форму, вращая его по ходу движения, чтобы он получился ровным. В итоге на одной стороне онигири должна остаться небольшая вмятина от пальцев.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Положите ломтик нори на нижнюю часть онигири шершавой стороной к рису. Затем сверните его по направлению к середине онигири.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Повторите для оставшихся порций риса. Приятного аппетита!",
          ingredientIndexes: [],
          image: {
            src: "https://eda.cooking/wp-content/uploads/2021/12/easy-onigiri-–-japanese-rice-balls-3.jpg",
          },
        },
      ],
    },
  ],
  notes: [],
};
