import { NewRecipe } from "../../models/recipe";

export const bityeOgurczyMalosolnye: NewRecipe = {
  title: '"Битые" огурцы малосольные',
  description: "&quot;Битые&quot; огурцы малосольные - знаменитое азиатское блюдо",
  image: {
    src: "/content/recipes/bitye-ogurczy-malosolnye/main.jpg",
  },
  foodTypes: ["Закуска"],
  kitchens: ["Китайская"],
  diets: [],
  durations: {
    preparation: 15,
    cooking: 70,
  },
  calories: 13,
  servings: 10,
  tools: ["Скалка", "Пакет плотный"],
  ingredients: [
    {
      name: "огурцы",
      note: "",
      amount: {
        value: 1.0,
        unit: "кг",
      },
    },
    {
      name: "укроп",
      note: "",
      amount: {
        value: 1.0,
        unit: "пучок",
      },
    },
    {
      name: "чеснок",
      note: "",
      amount: {
        value: 0.5,
        unit: "шт",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
    {
      name: "сахар",
      note: "",
      amount: {
        value: 1.0,
        unit: "ст. л.",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Огурцы замочить на час в холодной воде",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Обработать огурцы, отрезав хвостики и порезав плоды пополам или на 3 части. В зависимости от огурцов, если маленькие, то только хвостики можно отрезать.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Кладем в плотный пакет, затем на доску так, чтобы срезы смотрели вниз, и отбиваем скалкой или молотком для мяса так, чтобы огурцы трескались при ударе, но не превращались в труху.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Порезать укроп, измельчить 4 или 5 долек чеснока в чеснокодавилке или мелко порезав. Огурцы положить в пакет и сверху добавить укроп, чеснок, соль и сахар.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Завязать в плотный пакет и хорошо все потрясти минуты 3. Оставить на пол часа в тепле, а потом можно убрать в холодильник, через на полчаса. Далее огурцы можно подавать на стол.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
