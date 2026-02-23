import { Pipe, PipeTransform } from "@angular/core";
import { IngredientAmount } from "../models/indgredient/amount";

@Pipe({
  name: "ingredientAmount",
})
export class IngredientAmountPipe implements PipeTransform {
  transform = (ingredient_amount: IngredientAmount): string =>
    `${ingredient_amount.value.toFixed(2)} ${ingredient_amount.unit}`;
}
