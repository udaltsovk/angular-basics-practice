import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { RecipeFoodTypes } from "../../../models/recipe/category";
import { RecipeKitchens } from "../../../models/recipe/kitchen";
import { RecipeDiets } from "../../../models/recipe/diet";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import { FilterGroupInput } from "../../inputs/filter-group/filter-group.input";
import {
  EMPTY_RECIPE_CATEGORIES_FORM_MODEL,
  RecipeCategoriesFormModel,
  recipeCategoriesSchema,
} from "./recipe-categories.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";

@Component({
  selector: "recipe-book-recipe-categories-form",
  templateUrl: "./recipe-categories.form.html",
  styleUrl: "./recipe-categories.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FilterGroupInput, FormField, FormErrorsComponent],
})
export class RecipeCategoriesForm implements FormValueControl<RecipeCategoriesFormModel> {
  readonly value = model(EMPTY_RECIPE_CATEGORIES_FORM_MODEL);

  protected recipeCategoriesForm = form(this.value, recipeCategoriesSchema);

  protected readonly foodTypesOptions = RecipeFoodTypes;
  protected readonly kitchensOptions = RecipeKitchens;
  protected readonly dietsOptions = RecipeDiets;

  protected readonly isInvalid = isInvalid;
}
