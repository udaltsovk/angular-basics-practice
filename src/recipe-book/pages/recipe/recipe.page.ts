import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  untracked,
} from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { Recipe } from "../../models/recipe";
import { EnumerationPipe } from "../../pipes/enumeration.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";
import { RecipeNotesComponent } from "../../components/recipe-notes/recipe-notes.component";
import { RecipeToolsComponent } from "../../components/recipe-tools/recipe-tools.component";
import { RecipeIngredientsComponent } from "../../components/recipe-ingredients/recipe-ingredients.component";
import { RecipeStepsListComponent } from "../../components/recipe-steps-list/recipe-steps-list.component";
import { MarkdownComponent } from "ngx-markdown";
import { NgOptimizedImage } from "@angular/common";
import { ImageFitDirective } from "../../directives/image-fit.directive";
import { DialogService } from "../../services/dialog.service";
import { ServingsInput } from "../../components/inputs/servings/servings.input";

export const viewRecipeTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const recipeId = route.paramMap.get("id") as Recipe["id"];
  const recipe = inject(RecipeService).findRecipe(recipeId)();

  return recipe ? recipe.title : "Просмотр рецепта";
};

@Component({
  selector: "recipe-book-recipe-page",
  templateUrl: "./recipe.page.html",
  styleUrl: "./recipe.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EnumerationPipe,
    DurationPipe,
    MarkdownComponent,
    NgOptimizedImage,
    ImageFitDirective,
    RecipeNotesComponent,
    RecipeToolsComponent,
    RecipeIngredientsComponent,
    RecipeStepsListComponent,
    MarkdownComponent,
    NgOptimizedImage,
    ImageFitDirective,
    ServingsInput,
  ],
})
export class RecipePage {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  protected readonly params = toSignal(this.activatedRoute.paramMap);
  protected readonly recipeId = computed(
    () => this.params()?.get("id") as Recipe["id"] | undefined,
  );

  private readonly recipeService = inject(RecipeService);
  private readonly dialogService = inject(DialogService);

  protected readonly recipe = this.recipeService.findRecipe(this.recipeId);

  protected readonly currentServings = linkedSignal<number | undefined, number>({
    source: () => this.recipe()?.servings,
    computation: (newServings, previous) => previous?.value ?? newServings ?? 1,
  });

  protected readonly scaledIngredients = computed(() => {
    const recipe = this.recipe();
    if (!recipe) {
      return [];
    }

    const ratio = this.currentServings() / (recipe.servings ?? 1);
    return recipe.ingredients.map(ingredient => ({
      ...ingredient,
      amount: {
        ...ingredient.amount,
        value: ingredient.amount.value * ratio,
      },
    }));
  });

  constructor() {
    effect(() => {
      const recipe = this.recipe();
      if (recipe) {
        untracked(() => this.currentServings.set(recipe.servings));
      }
    });

    effect(async () => {
      const recipe = this.recipe();
      const params = this.params();

      if (params && !recipe) {
        await untracked(() => this.router.navigate(["/"]));
      }
    });
  }

  async editRecipe(): Promise<void> {
    await this.router.navigate(["edit"], { relativeTo: this.activatedRoute });
  }

  async deleteRecipe(): Promise<void> {
    const id = this.recipeId();
    if (!id) {
      return;
    }

    const confirmed = await this.dialogService.confirm({
      title: "Удаление рецепта",
      message: "Вы уверены, что хотите удалить этот рецепт? Это действие необратимо.",
      confirmText: "Удалить",
      danger: true,
    });

    if (!confirmed) {
      return;
    }

    this.recipeService.deleteRecipe(id);
  }
}
