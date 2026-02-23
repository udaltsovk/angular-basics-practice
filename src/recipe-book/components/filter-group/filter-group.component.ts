import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: "recipe-book-filter-group",
  templateUrl: "./filter-group.component.html",
  styleUrl: "./filter-group.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DropdownComponent],
})
export class FilterGroupComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly string[]>();
  readonly selectedOptions = input.required<string[]>();

  readonly changed = output<string[]>();

  readonly availableOptions = computed(() => {
    const selected = this.selectedOptions();
    return this.options().filter(option => !selected.includes(option));
  });

  protected addOption(option: string): void {
    this.changed.emit([...this.selectedOptions(), option]);
  }

  protected removeOption(option: string): void {
    this.changed.emit(this.selectedOptions().filter(opt => opt !== option));
  }
}
