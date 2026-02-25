import { RecipeTool } from "../../../models/recipe";
import { applyEach, minLength, required, schema } from "@angular/forms/signals";

export type RecipeToolsFormModel = RecipeTool[];

export const recipeToolSchema = schema<RecipeTool>(recipeTool => {
  required(recipeTool, { message: "Необходимо указать название необходимого инструмента" });
  minLength(recipeTool, 2, { message: "Название инструмента не может быть короче 2 символов" });
});

export const recipeToolsSchema = schema<RecipeToolsFormModel>(recipeTools => {
  applyEach(recipeTools, recipeToolSchema);
});

export const EMPTY_RECIPE_TOOLS_FORM_MODEL: RecipeToolsFormModel = [];
