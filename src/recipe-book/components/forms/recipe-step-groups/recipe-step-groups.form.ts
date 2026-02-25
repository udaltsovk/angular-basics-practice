import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import {
  EMPTY_RECIPE_STEP_FORM_MODEL,
  EMPTY_RECIPE_STEP_GROUP_FORM_MODEL,
  EMPTY_RECIPE_STEP_GROUPS_FORM_MODEL,
  RecipeStepGroupsFormModel,
  recipeStepGroupsSchema,
} from "./recipe-step-groups.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";

@Component({
  selector: "recipe-book-recipe-step-groups-form",
  templateUrl: "./recipe-step-groups.form.html",
  styleUrl: "./recipe-step-groups.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormErrorsComponent],
})
export class RecipeStepGroupsForm implements FormValueControl<RecipeStepGroupsFormModel> {
  readonly value = model(EMPTY_RECIPE_STEP_GROUPS_FORM_MODEL);

  protected recipeStepGroupsForm = form(this.value, recipeStepGroupsSchema);

  protected readonly isInvalid = isInvalid;

  protected addStepGroup(): void {
    this.value.update(formModel => [...formModel, EMPTY_RECIPE_STEP_GROUP_FORM_MODEL]);
  }

  protected removeStepGroup(stepGroupIndex: number): void {
    this.value.update(formModel => formModel.filter((_, idx) => idx !== stepGroupIndex));
  }

  protected addStep(stepGroupIndex: number): void {
    this.value.update(formModel => {
      const { name, steps } = formModel[stepGroupIndex];
      return [
        ...formModel.filter((_, index) => index !== stepGroupIndex),
        { name, steps: [...steps, EMPTY_RECIPE_STEP_FORM_MODEL] },
      ];
    });
  }

  protected removeStep(stepGroupIndex: number, stepIndex: number): void {
    this.value.update(formModel => {
      const { name, steps } = formModel[stepGroupIndex];
      return [
        ...formModel.filter((_, index) => index !== stepGroupIndex),
        { name, steps: steps.filter((_, idx) => idx !== stepIndex) },
      ];
    });
  }
}
