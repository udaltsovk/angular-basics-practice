import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";

@Component({
  selector: "recipe-book-home",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent],
})
export class HomePage {
  private readonly recipeService = inject(RecipeService);

  protected readonly recipes = this.recipeService.recipes;
}
