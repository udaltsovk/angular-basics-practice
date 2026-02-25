import { Pipe, PipeTransform } from "@angular/core";
import { IngredientAmount } from "../models/indgredient/amount";

@Pipe({
  name: "ingredientAmount",
})
export class IngredientAmountPipe implements PipeTransform {
  transform(ingredient_amount: IngredientAmount): string {
    const totalValue = ingredient_amount.value;
    const integerPart = Math.floor(totalValue);
    const fractionalPart = totalValue - integerPart;

    const fraction = this.getFraction(fractionalPart);

    const value = fraction
      ? integerPart > 0
        ? `${integerPart} ${fraction}`
        : fraction
      : Number(totalValue.toFixed(2)).toString();

    return `${value} ${ingredient_amount.unit}`;
  }

  private getFraction(val: number): string | null {
    const rounded = Math.round(val * 100) / 100;

    switch (rounded) {
      case 0.5:
        return "1/2";
      case 0.25:
        return "1/4";
      case 0.75:
        return "3/4";
      case 0.33:
        return "1/3";
      case 0.67:
      case 0.66:
        return "2/3";
      default:
        return null;
    }
  }
}
