import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  model,
  TemplateRef,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { form, FormValueControl } from "@angular/forms/signals";

@Component({
  selector: "recipe-book-list-input",
  standalone: true,
  templateUrl: "./list.input.html",
  styleUrl: "./list.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ListInputComponent<T> implements FormValueControl<T[]> {
  readonly label = input("");
  readonly addButtonText = input("Добавить");
  readonly emptyItem = input.required<T>();

  readonly value = model<T[]>([]);

  protected readonly listForm = form(this.value);

  readonly itemTemplate = contentChild(TemplateRef);

  protected addItem(): void {
    this.value.update(formModel => [...formModel, this.emptyItem()]);
  }

  protected removeItem(index: number): void {
    this.value.update(formModel => formModel.filter((_, i) => i !== index));
  }
}
