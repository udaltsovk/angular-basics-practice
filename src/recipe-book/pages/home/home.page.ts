import { ChangeDetectionStrategy, Component, computed, inject, signal } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { RecipeFoodType } from "../../models/recipe/category";
import { RecipeKitchen } from "../../models/recipe/kitchen";
import { RecipeDiet } from "../../models/recipe/diet";
import { FormsModule } from "@angular/forms";
import { FiltersComponent, FilterState } from "../../components/filters/filters.component";

@Component({
  selector: "recipe-book-home",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent, FormsModule, FiltersComponent],
})
export class HomePage {
  private readonly recipeService = inject(RecipeService);

  protected readonly searchQuery = signal("");
  protected readonly selectedFoodTypes = signal<RecipeFoodType[]>([]);
  protected readonly selectedKitchens = signal<RecipeKitchen[]>([]);
  protected readonly selectedDiets = signal<RecipeDiet[]>([]);

  protected readonly filterState = computed<FilterState>(() => ({
    foodTypes: this.selectedFoodTypes(),
    kitchens: this.selectedKitchens(),
    diets: this.selectedDiets(),
  }));

  protected readonly areFiltersOpen = signal(false);

  protected readonly recipes = computed(() => {
    const allRecipes = this.recipeService.recipes();
    const query = this.searchQuery().toLowerCase().trim();
    const { foodTypes, kitchens, diets } = this.filterState();

    return allRecipes.filter(recipe => {
      const matchesQuery =
        !query ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query);

      const matchesFoodType =
        !foodTypes.length || recipe.foodTypes.some(t => foodTypes.includes(t));

      const matchesKitchen = !kitchens.length || recipe.kitchens.some(k => kitchens.includes(k));

      const matchesDiet = !diets.length || recipe.diets.some(d => diets.includes(d));

      return matchesQuery && matchesFoodType && matchesKitchen && matchesDiet;
    });
  });

  protected updateFilters(state: FilterState): void {
    this.selectedFoodTypes.set(state.foodTypes);
    this.selectedKitchens.set(state.kitchens);
    this.selectedDiets.set(state.diets);
  }

  protected resetFilters(): void {
    this.searchQuery.set("");
    this.selectedFoodTypes.set([]);
    this.selectedKitchens.set([]);
    this.selectedDiets.set([]);
  }
}
