import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import {
  EMPTY_RECIPE_PROFITABILITY_FORM_MODEL,
  RecipeProfitabilityFormModel,
  recipeProfitabilitySchema,
} from "./recipe-profitability.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";
import { NumberInput } from "../../inputs/number/number.input";

@Component({
  selector: "recipe-book-recipe-profitability-form",
  templateUrl: "./recipe-profitability.form.html",
  styleUrl: "./recipe-profitability.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormErrorsComponent, NumberInput],
})
export class RecipeProfitabilityForm implements FormValueControl<RecipeProfitabilityFormModel> {
  readonly value = model(EMPTY_RECIPE_PROFITABILITY_FORM_MODEL);

  protected recipeProfitabilityForm = form(this.value, recipeProfitabilitySchema);

  protected readonly isInvalid = isInvalid;
}
