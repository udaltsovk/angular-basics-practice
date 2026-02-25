import { ChangeDetectionStrategy, Component, model, output } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import { IngredientUnits } from "../../../models/indgredient/unit";
import {
  EMPTY_RECIPE_INGREDIENT_FORM_MODEL,
  RecipeIngredientFormModel,
  recipeIngredientSchema,
} from "../../forms/recipe-ingredients/recipe-ingredients.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";
import { DropdownInput } from "../dropdown/dropdown.input";
import { NumberInput } from "../number/number.input";

@Component({
  selector: "recipe-book-ingredient-input",
  standalone: true,
  templateUrl: "./ingredient.input.html",
  styleUrl: "./ingredient.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormErrorsComponent, DropdownInput, NumberInput],
})
export class IngredientInput implements FormValueControl<RecipeIngredientFormModel> {
  readonly value = model(EMPTY_RECIPE_INGREDIENT_FORM_MODEL);

  readonly remove = output<void>();

  protected readonly ingredientForm = form(this.value, recipeIngredientSchema);

  protected readonly ingredientUnits = IngredientUnits;

  protected readonly isInvalid = isInvalid;

  protected getStep(unit: string): number {
    switch (unit) {
      case "г":
      case "мл":
        return 5;
      case "шт":
      case "ст. л.":
      case "ч. л.":
        return 0.5;
      case "стакана":
        return 0.25;
      default:
        return 1;
    }
  }
}
