import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import {
  EMPTY_RECIPE_TOOLS_FORM_MODEL,
  RecipeToolsFormModel,
  recipeToolsSchema,
} from "./recipe-tools.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";

@Component({
  selector: "recipe-book-recipe-tools-form",
  templateUrl: "./recipe-tools.form.html",
  styleUrl: "./recipe-tools.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormErrorsComponent],
})
export class RecipeToolsForm implements FormValueControl<RecipeToolsFormModel> {
  readonly value = model(EMPTY_RECIPE_TOOLS_FORM_MODEL);

  protected recipeToolsForm = form(this.value, recipeToolsSchema);

  protected readonly isInvalid = isInvalid;

  protected addTool(): void {
    this.value.update(formModel => [...formModel, ""]);
  }

  protected removeTool(index: number): void {
    this.value.update(formModel => formModel.filter((_, i) => i !== index));
  }
}
