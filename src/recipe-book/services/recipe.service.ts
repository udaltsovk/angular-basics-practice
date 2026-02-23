import { APP_ID, computed, effect, inject, Injectable, signal, Signal } from "@angular/core";
import { NewRecipe, Recipe } from "../models/recipe";
import { recipes as default_recipes } from "../content/recipes";

const assignId = (recipe: NewRecipe): Recipe => ({
  id: crypto.randomUUID(),
  ...recipe,
});

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private readonly recipeMap = signal<Map<Recipe["id"], Recipe>>(new Map());

  readonly recipes = computed(() => Array.from(this.recipeMap().values()));

  private readonly APP_ID = inject(APP_ID);
  private readonly LOCAL_STORAGE_KEY = `${this.APP_ID}::recipes::v0`;

  constructor() {
    const recipesJson = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    const recipes: Recipe[] = recipesJson ? JSON.parse(recipesJson) : default_recipes.map(assignId);

    this.recipeMap.set(new Map(recipes.map(recipe => [recipe.id, recipe])));

    effect(() => {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.recipes()));
    });
  }

  findRecipe(recipeId: Recipe["id"] | Signal<Recipe["id"] | undefined>): Signal<Recipe | undefined> {
    if (typeof recipeId === "function") {
      return computed(() => {
        const id = recipeId();
        return id ? this.recipeMap().get(id) : undefined;
      });
    }

    return computed(() => this.recipeMap().get(recipeId));
  }

  createRecipe(recipe: NewRecipe): void {
    this.recipeMap.update(recipes => {
      const newRecipes = new Map(recipes);
      const newRecipe = assignId(recipe);

      newRecipes.set(newRecipe.id, newRecipe);

      return newRecipes;
    });
  }

  updateRecipe(updatedRecipe: Recipe): void {
    this.recipeMap.update(recipes => {
      recipes.set(updatedRecipe.id, updatedRecipe);

      return new Map(recipes);
    });
  }

  deleteRecipe(recipeId: Recipe["id"]): void {
    this.recipeMap.update(recipes => {
      recipes.delete(recipeId);

      return new Map(recipes);
    });
  }
}
