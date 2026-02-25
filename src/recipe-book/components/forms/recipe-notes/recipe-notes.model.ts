import { applyEach, schema } from "@angular/forms/signals";

export type RecipeNoteFormModel = string;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const recipeNoteSchema = schema<RecipeNoteFormModel>(_recipeNote => {
  /* empty */
});

export const EMPTY_RECIPE_NOTE_FORM_MODEL: RecipeNoteFormModel = "";

export type RecipeNotesFormModel = RecipeNoteFormModel[];

export const recipeNotesSchema = schema<RecipeNotesFormModel>(recipeNotes => {
  applyEach(recipeNotes, recipeNoteSchema);
});

export const EMPTY_RECIPE_NOTES_FORM_MODEL: RecipeNotesFormModel = [];
