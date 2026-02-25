import { ChangeDetectionStrategy, Component, computed, inject, signal } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { FormsModule } from "@angular/forms";
import { FiltersForm } from "../../components/forms/filters/filters.form";
import { form, FormField } from "@angular/forms/signals";
import { SearchQueryInput } from "../../components/inputs/search-query/search-query.input";
import { EMPTY_FILTER_FORM_MODEL } from "./home.model";

@Component({
  selector: "recipe-book-home",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent, FormsModule, FiltersForm, FormField, SearchQueryInput],
})
export class HomePage {
  private readonly recipeService = inject(RecipeService);

  protected readonly filterModel = signal(EMPTY_FILTER_FORM_MODEL);

  protected filterForm = form(this.filterModel);

  protected readonly areFiltersOpen = signal(false);

  protected readonly recipes = computed(() => {
    const allRecipes = this.recipeService.recipes();
    const { search, filters } = this.filterModel();
    const query = search.toLowerCase();
    const { foodTypes, kitchens, diets } = filters;

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

  protected resetFilters(): void {
    this.filterModel.set(EMPTY_FILTER_FORM_MODEL);
  }
}
