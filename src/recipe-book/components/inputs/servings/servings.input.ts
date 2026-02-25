import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
} from "@angular/core";
import { FormValueControl } from "@angular/forms/signals";
import { NumberInput } from "../number/number.input";

@Component({
  selector: "recipe-book-servings-input",
  standalone: true,
  templateUrl: "./servings.input.html",
  styleUrl: "./servings.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NumberInput],
})
export class ServingsInput implements FormValueControl<number> {
  readonly compact = input(false, { transform: booleanAttribute });
  readonly label = input<string>("Количество порций");

  protected readonly formattedLabel = computed(() => `${this.label()}${this.compact() ? ":" : ""}`);

  readonly value = model(1);

  readonly min = input<number | undefined>();
  readonly max = input<number | undefined>();
}
