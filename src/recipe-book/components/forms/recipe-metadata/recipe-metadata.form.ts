import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import { ImageForm } from "../image/image.form";
import {
  EMPTY_RECIPE_METADATA_FORM_MODEL,
  RecipeMetadataFormModel,
  recipeMetadataSchema,
} from "./recipe-metadata.model";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";
import { isInvalid } from "../../../utils/form.utils";
import { RecipeSectionComponent } from "../../recipe-section/recipe-section.component";

@Component({
  selector: "recipe-book-recipe-metadata-form",
  templateUrl: "./recipe-metadata.form.html",
  styleUrl: "./recipe-metadata.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ImageForm, FormField, FormErrorsComponent, RecipeSectionComponent],
})
export class RecipeMetadataForm implements FormValueControl<RecipeMetadataFormModel> {
  readonly value = model(EMPTY_RECIPE_METADATA_FORM_MODEL);

  protected recipeMetadataForm = form(this.value, recipeMetadataSchema);

  protected readonly isInvalid = isInvalid;
}
