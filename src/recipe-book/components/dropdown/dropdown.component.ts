import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
} from "@angular/core";

@Component({
  selector: "recipe-book-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  readonly options = input.required<readonly string[]>();
  readonly placeholder = input<string>("Выберите...");

  readonly optionSelected = output<string>();

  protected readonly isOpen = signal(false);

  private readonly elementRef = inject(ElementRef);

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  protected toggle(): void {
    if (this.options().length > 0) {
      this.isOpen.update(v => !v);
    }
  }

  protected select(option: string): void {
    this.optionSelected.emit(option);
    this.isOpen.set(false);
  }
}
