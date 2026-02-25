import { Pipe, PipeTransform } from "@angular/core";
import { IngredientAmount } from "../models/indgredient/amount";

@Pipe({
  name: "ingredientAmount",
})
export class IngredientAmountPipe implements PipeTransform {
  transform(ingredient_amount: IngredientAmount): string {
    const value = ingredient_amount.value.toFixed(2).replace(".00", "").replace(".0", "");

    return `${value} ${ingredient_amount.unit}`;
  }
}
