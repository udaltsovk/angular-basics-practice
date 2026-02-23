import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RecipeStep } from "../../models/recipe/step";
import { Ingredient } from "../../models/indgredient";
import { IngredientAmountPipe } from "../../pipes/ingredient-amount.pipe";
import { MarkdownComponent } from "ngx-markdown";
import { NgOptimizedImage } from "@angular/common";
import { ImageFitDirective } from "../../directives/image-fit.directive";

@Component({
  selector: "recipe-book-recipe-step",
  templateUrl: "./recipe-step.component.html",
  styleUrl: "./recipe-step.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IngredientAmountPipe, MarkdownComponent, NgOptimizedImage, ImageFitDirective],
})
export class RecipeStepComponent {
  readonly step = input.required<RecipeStep>();
  readonly ingredients = input.required<Ingredient[]>();
}
