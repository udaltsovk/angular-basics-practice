import {
  ChangeDetectionStrategy,
  Component,
  effect,
  linkedSignal,
  model,
  untracked,
} from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import { IngredientUnits } from "../../../models/indgredient/unit";
import {
  EMPTY_RECIPE_INGREDIENT_FORM_MODEL,
  EMPTY_RECIPE_INGREDIENTS_FORM_MODEL,
  RecipeIngredientsFormModel,
  recipeIngredientsSchema,
} from "./recipe-ingredients.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";
import { DropdownInput } from "../../inputs/dropdown/dropdown.input";
import { NumberInput } from "../../inputs/number/number.input";

@Component({
  selector: "recipe-book-recipe-ingredients-form",
  templateUrl: "./recipe-ingredients.form.html",
  styleUrl: "./recipe-ingredients.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormErrorsComponent, DropdownInput, NumberInput],
})
export class RecipeIngredientsForm implements FormValueControl<RecipeIngredientsFormModel> {
  readonly value = model(EMPTY_RECIPE_INGREDIENTS_FORM_MODEL);

  protected readonly internalState = linkedSignal<number, RecipeIngredientsFormModel>({
    source: () => this.value().servings,
    computation: (newServings, prev) => {
      const current = untracked(this.value);
      const oldServings = prev?.source;

      if (
        oldServings === undefined ||
        oldServings <= 0 ||
        newServings <= 0 ||
        newServings === oldServings
      ) {
        return current;
      }

      const ratio = newServings / oldServings;
      return {
        ...current,
        servings: newServings,
        list: current.list.map(item => ({
          ...item,
          amount: {
            ...item.amount,
            value: item.amount.value * ratio,
          },
        })),
      };
    },
  });

  protected recipeIngredientsForm = form(this.internalState, recipeIngredientsSchema);

  protected readonly ingredientUnits = IngredientUnits;

  protected readonly isInvalid = isInvalid;

  constructor() {
    effect(() => {
      this.value.set(this.internalState());
    });
  }

  protected addIngredient(): void {
    this.internalState.update(formModel => ({
      ...formModel,
      list: [...formModel.list, EMPTY_RECIPE_INGREDIENT_FORM_MODEL],
    }));
  }

  protected removeIngredient(index: number): void {
    this.internalState.update(formModel => ({
      ...formModel,
      list: formModel.list.filter((_, i) => i !== index),
    }));
  }

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
