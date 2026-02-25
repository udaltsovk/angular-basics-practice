import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import {
  EMPTY_RECIPE_NOTES_FORM_MODEL,
  RecipeNotesFormModel,
  recipeNotesSchema,
} from "./recipe-notes.model";
import { ListInputComponent } from "../../inputs/list/list.input";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";

@Component({
  selector: "recipe-book-recipe-notes-form",
  templateUrl: "./recipe-notes.form.html",
  styleUrl: "./recipe-notes.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, ListInputComponent, FormErrorsComponent],
})
export class RecipeNotesForm implements FormValueControl<RecipeNotesFormModel> {
  readonly value = model(EMPTY_RECIPE_NOTES_FORM_MODEL);

  protected recipeNotesForm = form(this.value, recipeNotesSchema);

  protected readonly isInvalid = isInvalid;
}
