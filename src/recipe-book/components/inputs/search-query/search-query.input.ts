import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { FormValueControl } from "@angular/forms/signals";

@Component({
  selector: "recipe-book-search-query",
  templateUrl: "./search-query.input.html",
  styleUrl: "./search-query.input.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class SearchQueryInput implements FormValueControl<string> {
  readonly value = model("");

  protected updateValue(event: Event): void {
    event.preventDefault();
    const inputEvent = event as InputEvent;
    this.value.set(inputEvent.data ?? "");
  }

  reset(): void {
    this.value.set("");
  }
}
