import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RecipeStep, RecipeStepGroup } from "../../models/recipe/step";
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
  readonly steps = input.required<(RecipeStep | RecipeStepGroup)[]>();
  readonly ingredients = input.required<Ingredient[]>();

  protected isGroup(step: RecipeStep | RecipeStepGroup): step is RecipeStepGroup {
    return "name" in step;
  }

  protected asGroup(step: RecipeStep | RecipeStepGroup): RecipeStepGroup {
    return step as RecipeStepGroup;
  }

  protected asStep(step: RecipeStep | RecipeStepGroup): RecipeStep {
    return step as RecipeStep;
  }
}
