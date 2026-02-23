import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { Recipe } from "../../models/recipe";
import { RecipeService } from "../../services/recipe.service";
import { EnumerationPipe } from "../../pipes/enumeration.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";
import { RouterLink } from "@angular/router";
import { MarkdownComponent } from "ngx-markdown";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "recipe-book-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrl: "./recipe-card.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EnumerationPipe, DurationPipe, RouterLink, MarkdownComponent, NgOptimizedImage],
})
export class RecipeCardComponent {
  readonly recipe = input.required<Recipe>();
  private readonly recipeService = inject(RecipeService);

  protected delete(): void {
    this.recipeService.deleteRecipe(this.recipe().id);
  }
}
