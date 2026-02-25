import { RecipeFoodType } from "../../../models/recipe/category";
import { RecipeKitchen } from "../../../models/recipe/kitchen";
import { RecipeDiet } from "../../../models/recipe/diet";
import { minLength, required, schema } from "@angular/forms/signals";

export type RecipeCategoriesFormModel = {
  foodTypes: RecipeFoodType[];
  kitchens: RecipeKitchen[];
  diets: RecipeDiet[];
};

export const recipeCategoriesSchema = schema<RecipeCategoriesFormModel>(recipeCategories => {
  required(recipeCategories.foodTypes, { message: "Необходимо указать типы блюда" });
  minLength(recipeCategories.foodTypes, 1, {
    message: "Необходимо указать хотя бы один тип блюда",
  });

  required(recipeCategories.kitchens, { message: "Необходимо указать кухни" });
  minLength(recipeCategories.kitchens, 1, {
    message: "Необходимо указать хотя бы одну кухню",
  });

  minLength(recipeCategories.diets, 1, {
    message: "Необходимо указать хотя бы одну диету",
  });
});

export const EMPTY_RECIPE_CATEGORIES_FORM_MODEL: RecipeCategoriesFormModel = {
  foodTypes: [],
  kitchens: [],
  diets: [],
};
