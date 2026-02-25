import { applyEach, minLength, required, schema } from "@angular/forms/signals";
import { ImageFormModel } from "../image/image.model";

export type RecipeStepFormModel = {
  body: string;
  ingredientIndexes: number[];
  image: ImageFormModel | null;
};

export const recipeStepSchema = schema<RecipeStepFormModel>(recipeStep => {
  required(recipeStep.body, { message: "Необходимо указать подробности шага" });
  minLength(recipeStep.body, 10, { message: "Подробности шага должны быть не короче 10 символов" });
});

export const EMPTY_RECIPE_STEP_FORM_MODEL: RecipeStepFormModel = {
  body: "",
  ingredientIndexes: [],
  image: null,
};

export type RecipeStepGroupFormModel = {
  name: string;
  steps: RecipeStepFormModel[];
};

export const recipeStepGroupSchema = schema<RecipeStepGroupFormModel>(recipeStepGroup => {
  minLength(recipeStepGroup.steps, 1, { message: "Группа шагов должна содержать хотя бы 1 шаг" });

  applyEach(recipeStepGroup.steps, recipeStepSchema);
});

export const EMPTY_RECIPE_STEP_GROUP_FORM_MODEL: RecipeStepGroupFormModel = {
  name: "",
  steps: [],
};

export type RecipeStepGroupsFormModel = RecipeStepGroupFormModel[];

export const recipeStepGroupsSchema = schema<RecipeStepGroupsFormModel>(recipeStepGroups => {
  applyEach(recipeStepGroups, recipeStepGroupSchema);
});

export const EMPTY_RECIPE_STEP_GROUPS_FORM_MODEL: RecipeStepGroupsFormModel = [];
