import { RecipeFoodType } from "./category";
import { RecipeKitchen } from "./kitchen";
import { Ingredient } from "../indgredient";
import { RecipeDiet } from "./diet";
import { RecipeStep, RecipeStepGroup } from "./step";
import { Image } from "../image";

export type NewRecipe = {
  title: string;
  description: string;
  image: Image;
  foodTypes: RecipeFoodType[];
  kitchens: RecipeKitchen[];
  diets: RecipeDiet[];
  durations: {
    preparation: number;
    cooking: number;
  };
  calories: number;
  tools: string[];
  ingredients: Ingredient[];
  steps: (RecipeStep | RecipeStepGroup)[];
  notes: string[];
};

export type Recipe = {
  id: `${string}-${string}-${string}-${string}-${string}`;
} & NewRecipe;
