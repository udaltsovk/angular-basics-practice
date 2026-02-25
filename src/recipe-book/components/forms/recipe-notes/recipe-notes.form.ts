import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import {
  EMPTY_RECIPE_NOTE_FORM_MODEL,
  EMPTY_RECIPE_NOTES_FORM_MODEL,
  RecipeNotesFormModel,
  recipeNotesSchema,
} from "./recipe-notes.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";

@Component({
  selector: "recipe-book-recipe-notes-form",
  templateUrl: "./recipe-notes.form.html",
  styleUrl: "./recipe-notes.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormErrorsComponent],
})
export class RecipeNotesForm implements FormValueControl<RecipeNotesFormModel> {
  readonly value = model(EMPTY_RECIPE_NOTES_FORM_MODEL);

  protected recipeNotesForm = form(this.value, recipeNotesSchema);

  protected readonly isInvalid = isInvalid;

  protected addNote(): void {
    this.value.update(formModel => [...formModel, EMPTY_RECIPE_NOTE_FORM_MODEL]);
  }

  protected removeNote(index: number): void {
    this.value.update(formModel => formModel.filter((_, i) => i !== index));
  }
}
