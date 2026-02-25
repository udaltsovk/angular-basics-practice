import { UnitForms } from "../../utils/pluralize";

export const IngredientUnits = [
  "",
  "г",
  "кг",
  "шт",
  "ст. л.",
  "ч. л.",
  "мл",
  "л",
  "стакан",
  "банка",
  "зубчик",
  "веточка",
  "ломтик",
  "щепотка",
  "кусок",
  "пучок",
  "кочан",
] as const;

export type IngredientUnit = (typeof IngredientUnits)[number];

export const IngredientUnitPluralMap: Record<string, UnitForms> = {
  стакан: { nominative: "стакан", accusative: "стакана", genitive: "стаканов" },
  банка: { nominative: "банка", accusative: "банки", genitive: "банок" },
  зубчик: { nominative: "зубчик", accusative: "зубчика", genitive: "зубчиков" },
  веточка: { nominative: "веточка", accusative: "веточки", genitive: "веточек" },
  ломтик: { nominative: "ломтик", accusative: "ломтика", genitive: "ломтиков" },
  щепотка: { nominative: "щепотка", accusative: "щепотки", genitive: "щепоток" },
  кусок: { nominative: "кусок", accusative: "куска", genitive: "кусков" },
  пучок: { nominative: "пучок", accusative: "пучка", genitive: "пучков" },
  кочан: { nominative: "кочан", accusative: "кочана", genitive: "кочанов" },
};
