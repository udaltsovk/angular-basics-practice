import { ChangeDetectionStrategy, Component, computed, input, model } from "@angular/core";
import { DropdownInput } from "../dropdown/dropdown.input";
import { FormValueControl } from "@angular/forms/signals";

@Component({
  selector: "recipe-book-filter-group",
  templateUrl: "./filter-group.input.html",
  styleUrl: "./filter-group.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DropdownInput],
})
export class FilterGroupInput implements FormValueControl<string[]> {
  readonly label = input.required<string>();
  readonly options = input.required<readonly string[]>();

  readonly value = model<string[]>([]);

  readonly availableOptions = computed(() => {
    const selected = this.value();
    return this.options().filter(option => !selected.includes(option));
  });

  protected addOption(option: string): void {
    if (option) {
      this.value.update(formModel => {
        if (!formModel.includes(option)) {
          return [...formModel, option];
        }
        return formModel;
      });
    }
  }

  protected removeOption(option: string): void {
    this.value.update(formModel => formModel.filter(opt => option !== opt));
  }
}
