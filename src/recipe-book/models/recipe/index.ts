import { RecipeFoodType } from "./category";
import { RecipeKitchen } from "./kitchen";
import { Ingredient } from "../indgredient";
import { RecipeDiet } from "./diet";
import { RecipeStepGroup } from "./step";
import { Image } from "../image";

export type RecipeMetadata = {
  title: string;
  description: string;
  image: Image;
};

export type RecipeClassification = {
  foodTypes: RecipeFoodType[];
  kitchens: RecipeKitchen[];
  diets: RecipeDiet[];
};

export type RecipeProfitability = {
  durations: {
    preparation: number;
    cooking: number;
  };
  calories: number;
};

export type RecipeTool = string;

export type RecipeNote = string;

export type NewRecipe = RecipeMetadata &
  RecipeClassification &
  RecipeProfitability & {
    tools: RecipeTool[];
    ingredients: Ingredient[];
    stepGroups: RecipeStepGroup[];
    notes: RecipeNote[];
  };

export type Recipe = {
  id: `${string}-${string}-${string}-${string}-${string}` | "new";
} & NewRecipe;
