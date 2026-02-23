import { Image } from "../image";

export type RecipeStep = {
  body: string;
  ingredientIndexes: number[];
  image: Image | null;
};

export type RecipeStepGroup = {
  name: string;
  steps: RecipeStep[];
};
