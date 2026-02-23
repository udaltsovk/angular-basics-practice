import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: "recipe-book-recipe-notes",
  templateUrl: "./recipe-notes.component.html",
  styleUrl: "./recipe-notes.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownComponent],
})
export class RecipeNotesComponent {
  readonly notes = input.required<string[]>();
}
