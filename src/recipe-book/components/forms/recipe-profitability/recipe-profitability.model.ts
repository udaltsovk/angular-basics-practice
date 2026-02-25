import { min, required, schema } from "@angular/forms/signals";

export type RecipeProfitabilityFormModel = {
  durations: {
    preparation: number;
    cooking: number;
  };
  calories: number;
};

export const recipeProfitabilitySchema = schema<RecipeProfitabilityFormModel>(
  recipeProfitability => {
    min(recipeProfitability.durations.preparation, 0, {
      message: "Время подготовки не может быть отрицательным",
    });

    required(recipeProfitability.durations.cooking, {
      message: "Необходимо указать время готовки",
    });
    min(recipeProfitability.durations.cooking, 1, {
      message: "Время готовки не может быть меньше 1 минуты",
    });

    required(recipeProfitability.calories, {
      message: "Необходимо указать количество килокалорий на в 1 порции",
    });
    min(recipeProfitability.calories, 1, {
      message: "Количество килокалорий в 1 порции не может быть меньше 1",
    });
  },
);

export const EMPTY_RECIPE_PROFITABILITY_FORM_MODEL: RecipeProfitabilityFormModel = {
  durations: {
    preparation: 0,
    cooking: 0,
  },
  calories: 0,
};
