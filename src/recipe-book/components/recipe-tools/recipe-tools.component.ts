import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RecipeSectionComponent } from "../recipe-section/recipe-section.component";

@Component({
  selector: "recipe-book-recipe-tools",
  templateUrl: "./recipe-tools.component.html",
  styleUrl: "./recipe-tools.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeSectionComponent],
})
export class RecipeToolsComponent {
  readonly tools = input.required<string[]>();
}
