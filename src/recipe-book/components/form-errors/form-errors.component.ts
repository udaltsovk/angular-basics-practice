import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { FieldTree } from "@angular/forms/signals";

@Component({
  selector: "recipe-book-form-errors",
  standalone: true,
  templateUrl: "./form-errors.component.html",
  styleUrl: "./form-errors.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorsComponent<T> {
  readonly field = input.required<FieldTree<T>>();
}
