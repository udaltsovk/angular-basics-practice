import { IngredientAmount } from "./amount";

export type Ingredient = {
  name: string;
  note: string;
  amount: IngredientAmount;
};
