import { ChangeDetectionStrategy, Component, input, model } from "@angular/core";
import { Ingredient } from "../../models/indgredient";
import { IngredientAmountPipe } from "../../pipes/ingredient-amount.pipe";
import { MarkdownComponent } from "ngx-markdown";
import { RecipeSectionComponent } from "../recipe-section/recipe-section.component";
import { ServingsInput } from "../inputs/servings/servings.input";

@Component({
  selector: "recipe-book-recipe-ingredients",
  templateUrl: "./recipe-ingredients.component.html",
  styleUrl: "./recipe-ingredients.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IngredientAmountPipe, MarkdownComponent, RecipeSectionComponent, ServingsInput],
})
export class RecipeIngredientsComponent {
  readonly ingredients = input.required<Ingredient[]>();
  readonly servings = model(1);
}
