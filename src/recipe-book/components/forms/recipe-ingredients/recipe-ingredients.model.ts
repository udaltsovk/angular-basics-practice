import { applyEach, max, min, minLength, required, schema } from "@angular/forms/signals";
import { IngredientAmount } from "../../../models/indgredient/amount";

export type RecipeIngredientFormModel = {
  name: string;
  note: string;
  amount: IngredientAmount;
};

export const recipeIngredientSchema = schema<RecipeIngredientFormModel>(recipeIngredient => {
  required(recipeIngredient.name, { message: "Необходимо указать название ингредиента" });
  minLength(recipeIngredient.name, 2, {
    message: "Название ингредиента не может быть короче 2 символов",
  });

  min(recipeIngredient.amount.value, 0, {
    message: "Количество ингредиента не может быть отрицательным",
  });
});

export const EMPTY_RECIPE_INGREDIENT_FORM_MODEL: RecipeIngredientFormModel = {
  name: "",
  note: "",
  amount: {
    value: 0,
    unit: "",
  },
};

export type RecipeIngredientsFormModel = {
  servings: number;
  list: RecipeIngredientFormModel[];
};

export const recipeIngredientsSchema = schema<RecipeIngredientsFormModel>(recipeIngredients => {
  required(recipeIngredients.servings, { message: "Укажите количество порций" });
  min(recipeIngredients.servings, 1, { message: "Количество порций должно быть не меньше 1" });
  max(recipeIngredients.servings, 25);

  applyEach(recipeIngredients.list, recipeIngredientSchema);
});

export const EMPTY_RECIPE_INGREDIENTS_FORM_MODEL: RecipeIngredientsFormModel = {
  servings: 1,
  list: [],
};
