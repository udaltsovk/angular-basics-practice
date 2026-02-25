import { booleanAttribute, ChangeDetectionStrategy, Component, input, model } from "@angular/core";
import { FormValueControl } from "@angular/forms/signals";

@Component({
  selector: "recipe-book-number-input",
  standalone: true,
  templateUrl: "./number.input.html",
  styleUrl: "./number.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInput implements FormValueControl<number> {
  readonly min = input<number | undefined>(undefined);
  readonly max = input<number | undefined>(undefined);
  readonly step = input<number>(1);
  readonly compact = input(false, { transform: booleanAttribute });

  readonly value = model(0);

  protected readonly Infinity = Infinity;

  protected increment(): void {
    const newValue = this.value() + this.step();
    if (this.max() === undefined || newValue <= this.max()!) {
      this.value.set(newValue);
    }
  }

  protected decrement(): void {
    const newValue = this.value() - this.step();
    if (this.min() === undefined || newValue >= this.min()!) {
      this.value.set(newValue);
    }
  }

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    let val = parseFloat(target.value);

    if (isNaN(val)) {
      val = this.min() ?? 0;
    }

    if (this.min() !== undefined && val < this.min()!) {
      val = this.min()!;
    }
    if (this.max() !== undefined && val > this.max()!) {
      val = this.max()!;
    }

    this.value.set(val);
  }
}
