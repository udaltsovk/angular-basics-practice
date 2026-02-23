import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from "@angular/core";
import { form, FormField, submit } from "@angular/forms/signals";
import { ActivatedRoute, Router } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { RecipeService } from "../../services/recipe.service";
import { NewRecipe, Recipe } from "../../models/recipe";

@Component({
  selector: "recipe-book-recipe-form",
  templateUrl: "./recipe-form.page.html",
  styleUrl: "./recipe-form.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField],
})
export class RecipeFormPage {
  private readonly router = inject(Router);

  private readonly activatedRoute = inject(ActivatedRoute);
  protected readonly params = toSignal(this.activatedRoute.paramMap);
  protected readonly recipeId = computed(() => {
    const id = this.params()?.get("id");

    return id ? (id as Recipe["id"]) : undefined;
  });
  private readonly recipeService = inject(RecipeService);

  protected readonly recipe = this.recipeService.findRecipe(this.recipeId);

  protected readonly formTitle = computed(() => {
    const recipe = this.recipe();

    return `${recipe ? "Редактирование" : "Создание"} рецепта`;
  });

  readonly recipeModel = signal<NewRecipe>({
    title: "",
    description: "",
    image: {
      src: "",
    },
    foodTypes: [],
    kitchens: [],
    diets: [],
    durations: {
      preparation: 0,
      cooking: 0,
    },
    calories: 0,
    tools: [],
    ingredients: [],
    steps: [],
    notes: [],
  });

  recipeForm = form(this.recipeModel);

  constructor() {
    effect(() => {
      const recipe = this.recipe();
      if (recipe) {
        this.recipeModel.set(recipe);
      }
    });
  }

  async submit(event: Event): Promise<void> {
    event.preventDefault();

    await submit(this.recipeForm, async () => {
      const recipeId = this.recipeId();

      if (!recipeId) {
        this.recipeService.createRecipe(this.recipeModel());
        await this.router.navigate(["/"]);
        return;
      }

      this.recipeService.updateRecipe({
        id: recipeId,
        ...this.recipeModel(),
      });

      await this.router.navigate(["recipes", recipeId]);
    });
  }
}
