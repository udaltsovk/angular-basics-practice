import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { form, FormField, FormValueControl } from "@angular/forms/signals";
import { NgOptimizedImage } from "@angular/common";
import { EMPTY_IMAGE_FORM_MODEL, ImageFormModel, imageSchema } from "./image.model";
import { isInvalid } from "../../../utils/form.utils";
import { FormErrorsComponent } from "../../form-errors/form-errors.component";

@Component({
  selector: "recipe-book-image-form",
  templateUrl: "./image.form.html",
  styleUrl: "./image.form.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, NgOptimizedImage, FormErrorsComponent],
})
export class ImageForm implements FormValueControl<ImageFormModel> {
  readonly value = model(EMPTY_IMAGE_FORM_MODEL);

  protected imageForm = form(this.value, imageSchema);

  protected readonly isInvalid = isInvalid;
}
