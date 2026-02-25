import { NewRecipe } from "../../models/recipe";

export const kurnik: NewRecipe = {
  title: "Курник с курицей",
  description: "Курник с курицей - самый известный русский свадебный пирог.",
  image: {
    src: "https://eda.cooking/wp-content/uploads/2021/11/kurnik-s-kuricey.jpg",
  },
  foodTypes: ["Выпечка"],
  kitchens: ["Русская"],
  diets: [],
  durations: {
    preparation: 75,
    cooking: 75,
  },
  calories: 1226,
  servings: 7,
  tools: ["Пищевая пленка", "Миска", "Кастрюля", "Сковорода", "Противень"],
  ingredients: [
    {
      name: "сметана",
      note: "20%",
      amount: {
        value: 300.0,
        unit: "г",
      },
    },
    {
      name: "топленное масло",
      note: "",
      amount: {
        value: 180.0,
        unit: "г",
      },
    },
    {
      name: "пшеничная мука",
      note: "",
      amount: {
        value: 550.0,
        unit: "г",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 0.5,
        unit: "ч. л.",
      },
    },
    {
      name: "курица",
      note: "",
      amount: {
        value: 0.5,
        unit: "кг",
      },
    },
    {
      name: "луковица",
      note: "",
      amount: {
        value: 3.0,
        unit: "шт",
      },
    },
    {
      name: "сушеные грибы",
      note: "белых",
      amount: {
        value: 150.0,
        unit: "г",
      },
    },
    {
      name: "яйца",
      note: "",
      amount: {
        value: 2.0,
        unit: "шт",
      },
    },
    {
      name: "топленное масло",
      note: "",
      amount: {
        value: 200.0,
        unit: "г",
      },
    },
    {
      name: "рис",
      note: "",
      amount: {
        value: 1.0,
        unit: "стакан",
      },
    },
    {
      name: "соль",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
    {
      name: "черный перец",
      note: "",
      amount: {
        value: 1.0,
        unit: "щепотка",
      },
    },
  ],
  stepGroups: [
    {
      name: "",
      steps: [
        {
          body: "Сметану с маслом и солью тщательно растереть ложкой до однородности.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Добавить муку и замесить тесто, которому дать после этого &quot;отдохнуть&quot;, завернув в пленку и положив в холодильник на полчаса.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Пока делаем тесто, необходимо поставить вариться курицу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Заранее замочите так же грибы, а когда размокнут - отожмите, нарежьте соломкой, обжарьте их в топленном масле.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Нарежьте тонко лук, поджарьте.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Отварите рис. Сварите яйца, очистите их и порубите.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Соедините  куриное мясо, жаренный лук и грибы. Посолите и поперчите по вкусу.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Разделите тесто на 2 части. Меньший кусок теста раскатайте слоем не более чем сантиметр.  Выложите сперва на него рис, на рис - мясную часть начинки, верхним слоем - рубленные яйца. Теперь раскатывайте большой кусок теста и накрывайте им начинку &quot;куполом&quot;.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Защипните тесто внизу, соединив два слоя. Курник можно украсить сверху фигурками их теста. Важно: обязательно сделайте несколько проколов вилкой в верхней части курника. Смажьте курник желтком.",
          ingredientIndexes: [],
          image: null,
        },
        {
          body: "Выпекайте курник в духовке при температуре 220 С - 45 минут.",
          ingredientIndexes: [],
          image: null,
        },
      ],
    },
  ],
  notes: [],
};
