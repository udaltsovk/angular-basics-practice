import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RecipeStepGroup } from "../../models/recipe/step";
import { Ingredient } from "../../models/indgredient";
import { RecipeStepComponent } from "../recipe-step/recipe-step.component";
import { RecipeSectionComponent } from "../recipe-section/recipe-section.component";

@Component({
  selector: "recipe-book-recipe-steps-list",
  templateUrl: "./recipe-steps-list.component.html",
  styleUrl: "./recipe-steps-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeSectionComponent, RecipeStepComponent],
})
export class RecipeStepsListComponent {
  readonly stepGroups = input.required<RecipeStepGroup[]>();
  readonly ingredients = input.required<Ingredient[]>();
}
