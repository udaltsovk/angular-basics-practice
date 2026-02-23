import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "recipe-book-recipe-section",
  templateUrl: "./recipe-section.component.html",
  styleUrl: "./recipe-section.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeSectionComponent {
  readonly title = input.required<string>();
}
