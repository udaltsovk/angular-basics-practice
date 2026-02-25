import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  model,
  signal,
} from "@angular/core";
import { FormValueControl } from "@angular/forms/signals";

@Component({
  selector: "recipe-book-dropdown",
  templateUrl: "./dropdown.input.html",
  styleUrl: "./dropdown.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownInput implements FormValueControl<string> {
  readonly options = input.required<readonly string[]>();
  readonly placeholder = input<string>("Выберите...");
  readonly resetOnSelect = input(false, { transform: booleanAttribute });

  readonly value = model("");

  protected readonly isOpen = signal(false);

  private readonly elementRef = inject(ElementRef);

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  protected toggle(): void {
    if (this.options().length) {
      this.isOpen.update(v => !v);
    }
  }

  protected select(option: string): void {
    this.value.set(option);
    this.isOpen.set(false);

    if (this.resetOnSelect()) {
      this.value.set("");
    }
  }
}
