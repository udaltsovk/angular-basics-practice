import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { RecipeFoodType, RecipeFoodTypes } from "../../models/recipe/category";
import { RecipeKitchen, RecipeKitchens } from "../../models/recipe/kitchen";
import { RecipeDiet, RecipeDiets } from "../../models/recipe/diet";
import { FilterGroupComponent } from "../filter-group/filter-group.component";

export type FilterState = {
  foodTypes: RecipeFoodType[];
  kitchens: RecipeKitchen[];
  diets: RecipeDiet[];
};

@Component({
  selector: "recipe-book-filters",
  templateUrl: "./filters.component.html",
  styleUrl: "./filters.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FilterGroupComponent],
})
export class FiltersComponent {
  readonly state = input.required<FilterState>();

  readonly stateChange = output<FilterState>();
  readonly resetFilters = output<void>();

  protected readonly foodTypesOptions = RecipeFoodTypes;
  protected readonly kitchensOptions = RecipeKitchens;
  protected readonly dietsOptions = RecipeDiets;

  protected updateFoodTypes(foodTypes: string[]): void {
    this.stateChange.emit({ ...this.state(), foodTypes: foodTypes as RecipeFoodType[] });
  }

  protected updateKitchens(kitchens: string[]): void {
    this.stateChange.emit({ ...this.state(), kitchens: kitchens as RecipeKitchen[] });
  }

  protected updateDiets(diets: string[]): void {
    this.stateChange.emit({ ...this.state(), diets: diets as RecipeDiet[] });
  }
}
