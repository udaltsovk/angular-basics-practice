import { ChangeDetectionStrategy, Component, model, output } from "@angular/core";
import { RecipeFoodTypes } from "../../../models/recipe/category";
import { RecipeKitchens } from "../../../models/recipe/kitchen";
import { RecipeDiets } from "../../../models/recipe/diet";
import { FilterGroupInput } from "../../inputs/filter-group/filter-group.input";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import { EMPTY_FILTERS_FORM_MODEL, FiltersFormModel } from "./filters.model";
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: "recipe-book-filters",
  templateUrl: "./filters.form.html",
  styleUrl: "./filters.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FilterGroupInput, FormField, UpperCasePipe],
})
export class FiltersForm implements FormValueControl<FiltersFormModel> {
  readonly value = model(EMPTY_FILTERS_FORM_MODEL);

  protected readonly valueForm = form(this.value);

  readonly resetFilters = output<void>();

  protected readonly foodTypesOptions = RecipeFoodTypes;
  protected readonly kitchensOptions = RecipeKitchens;
  protected readonly dietsOptions = RecipeDiets;

  protected reset(event: Event): void {
    event.preventDefault();
    this.resetFilters.emit();
  }
}
