import { RecipeFoodType } from "../../../models/recipe/category";
import { RecipeKitchen } from "../../../models/recipe/kitchen";
import { RecipeDiet } from "../../../models/recipe/diet";

export type FiltersFormModel = {
  foodTypes: RecipeFoodType[];
  kitchens: RecipeKitchen[];
  diets: RecipeDiet[];
};

export const EMPTY_FILTERS_FORM_MODEL: FiltersFormModel = {
  foodTypes: [],
  kitchens: [],
  diets: [],
};
