import { Signal } from "@angular/core";
import { Recipe } from "../../models/recipe";
import {
  EMPTY_RECIPE_METADATA_FORM_MODEL,
  RecipeMetadataFormModel,
} from "../../components/forms/recipe-metadata/recipe-metadata.model";
import {
  EMPTY_RECIPE_CATEGORIES_FORM_MODEL,
  RecipeCategoriesFormModel,
} from "../../components/forms/recipe-categories/recipe-categories.model";
import {
  EMPTY_RECIPE_PROFITABILITY_FORM_MODEL,
  RecipeProfitabilityFormModel,
} from "../../components/forms/recipe-profitability/recipe-profitability.model";
import {
  EMPTY_RECIPE_TOOLS_FORM_MODEL,
  RecipeToolsFormModel,
} from "../../components/forms/recipe-tools/recipe-tools.model";
import {
  EMPTY_RECIPE_INGREDIENTS_FORM_MODEL,
  RecipeIngredientsFormModel,
} from "../../components/forms/recipe-ingredients/recipe-ingredients.model";
import {
  EMPTY_RECIPE_STEP_GROUPS_FORM_MODEL,
  RecipeStepGroupsFormModel,
} from "../../components/forms/recipe-step-groups/recipe-step-groups.model";
import {
  EMPTY_RECIPE_NOTES_FORM_MODEL,
  RecipeNotesFormModel,
} from "../../components/forms/recipe-notes/recipe-notes.model";
import {
  imageFormModelToImage,
  imageToImageFormModel,
} from "../../components/forms/image/image.model";

export type CanComponentDeactivate = {
  isChanged: Signal<boolean>;
};

export type RecipeFormModel = {
  metadata: RecipeMetadataFormModel;
  categories: RecipeCategoriesFormModel;
  profitability: RecipeProfitabilityFormModel;
  tools: RecipeToolsFormModel;
  ingredients: RecipeIngredientsFormModel;
  stepGroups: RecipeStepGroupsFormModel;
  notes: RecipeNotesFormModel;
};

export const EMPTY_RECIPE_FORM_MODEL: RecipeFormModel = {
  metadata: EMPTY_RECIPE_METADATA_FORM_MODEL,
  categories: EMPTY_RECIPE_CATEGORIES_FORM_MODEL,
  profitability: EMPTY_RECIPE_PROFITABILITY_FORM_MODEL,
  tools: EMPTY_RECIPE_TOOLS_FORM_MODEL,
  ingredients: EMPTY_RECIPE_INGREDIENTS_FORM_MODEL,
  stepGroups: EMPTY_RECIPE_STEP_GROUPS_FORM_MODEL,
  notes: EMPTY_RECIPE_NOTES_FORM_MODEL,
};

export const recipeToRecipeFormModel = (recipe: Recipe): RecipeFormModel => ({
  ...recipe,
  metadata: {
    ...recipe,
    image: imageToImageFormModel(recipe.image),
  },
  categories: {
    ...recipe,
  },
  profitability: {
    ...recipe,
  },
  ingredients: {
    servings: recipe.servings,
    list: recipe.ingredients.map(ingredient => ({
      ...ingredient,
    })),
  },
});

export const recipeFormModelToRecipe = (
  recipeId: Recipe["id"] | "new",
  recipeFormModel: RecipeFormModel,
): Recipe => {
  const servings = Math.max(1, recipeFormModel.ingredients.servings);

  return {
    ...recipeFormModel,
    ...recipeFormModel.categories,
    ...recipeFormModel.profitability,
    ...recipeFormModel.metadata,
    id: recipeId,
    servings,
    image: imageFormModelToImage(recipeFormModel.metadata.image),
    ingredients: recipeFormModel.ingredients.list.map(ingredient => ({
      ...ingredient,
      amount: {
        ...ingredient.amount,
        value: ingredient.amount.value / servings,
      },
    })),
  };
};
