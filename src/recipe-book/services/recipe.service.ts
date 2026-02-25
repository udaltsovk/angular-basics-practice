import { APP_ID, computed, effect, inject, Injectable, signal, Signal } from "@angular/core";
import { Recipe } from "../models/recipe";
import { recipes as default_recipes } from "../content/recipes";

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

    const recipes: Recipe[] = recipesJson
      ? JSON.parse(recipesJson)
      : default_recipes.map(defaultRecipe => ({
          ...defaultRecipe,
          id: RecipeService.generateId(),
        }));

    this.recipeMap.set(new Map(recipes.map(recipe => [recipe.id, recipe])));

    effect(() => {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.recipes()));
    });
  }

  findRecipe(
    recipeId: Recipe["id"] | Signal<Recipe["id"] | undefined>,
  ): Signal<Recipe | undefined> {
    if (typeof recipeId === "function") {
      return computed(() => {
        const id = recipeId();
        return id ? this.recipeMap().get(id) : undefined;
      });
    }

    return computed(() => this.recipeMap().get(recipeId));
  }

  static generateId = (): Recipe["id"] => crypto.randomUUID();

  saveRecipe(recipe: Recipe): void {
    this.recipeMap.update(recipesMap => {
      recipesMap.set(recipe.id, recipe);

      return new Map(recipesMap);
    });
  }

  deleteRecipe(recipeId: Recipe["id"]): void {
    this.recipeMap.update(recipesMap => {
      recipesMap.delete(recipeId);

      return new Map(recipesMap);
    });
  }
}
