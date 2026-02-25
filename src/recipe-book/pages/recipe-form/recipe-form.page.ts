import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
} from "@angular/core";
import { form, FormField, minLength, submit } from "@angular/forms/signals";
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../models/recipe";
import { RecipeMetadataForm } from "../../components/forms/recipe-metadata/recipe-metadata.form";
import { RecipeCategoriesForm } from "../../components/forms/recipe-categories/recipe-categories.form";
import { RecipeProfitabilityForm } from "../../components/forms/recipe-profitability/recipe-profitability.form";
import { RecipeToolsForm } from "../../components/forms/recipe-tools/recipe-tools.form";
import { RecipeIngredientsForm } from "../../components/forms/recipe-ingredients/recipe-ingredients.form";
import { RecipeStepGroupsForm } from "../../components/forms/recipe-step-groups/recipe-step-groups.form";
import { RecipeNotesForm } from "../../components/forms/recipe-notes/recipe-notes.form";
import {
  EMPTY_RECIPE_FORM_MODEL,
  RecipeFormModel,
  recipeFormModelToRecipe,
  recipeToRecipeFormModel,
} from "./recipe-form.model";
import { DialogService } from "../../services/dialog.service";
import { RecipeDraftService } from "../../services/recipe-draft.service";
import { CanDeactivateFn } from "@angular/router";

export const canDeactivateRecipeForm: CanDeactivateFn<RecipeFormPage> = async component => {
  const dialogService = inject(DialogService);
  const draftService = inject(RecipeDraftService);

  if (!component.isChanged()) {
    return true;
  }

  const confirmed = await dialogService.confirm({
    title: "Несохраненные изменения",
    message: "У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу?",
    confirmText: "Выйти",
    cancelText: "Остаться",
    danger: true,
  });

  if (!confirmed) {
    return false;
  }

  draftService.clearDraft();
  return true;
};

export const editRecipeTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const recipeId = route.paramMap.get("id") as Recipe["id"];
  const recipe = inject(RecipeService).findRecipe(recipeId)();

  return recipe ? `Редактирование: ${recipe.title}` : "Редактирование рецепта";
};

@Component({
  selector: "recipe-book-recipe-form",
  templateUrl: "./recipe-form.page.html",
  styleUrl: "./recipe-form.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormField,
    RecipeMetadataForm,
    RecipeCategoriesForm,
    RecipeProfitabilityForm,
    RecipeToolsForm,
    RecipeIngredientsForm,
    RecipeStepGroupsForm,
    RecipeNotesForm,
  ],
})
export class RecipeFormPage {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly draftService = inject(RecipeDraftService);
  private readonly recipeService = inject(RecipeService);

  protected readonly params = toSignal(this.activatedRoute.paramMap);
  protected readonly recipeId = computed(() => {
    const id = this.params()?.get("id");
    return id ? (id as Recipe["id"]) : undefined;
  });

  protected readonly recipe = this.recipeService.findRecipe(this.recipeId);

  protected readonly formTitle = computed(() => {
    const recipe = this.recipe();
    return `${recipe ? "Редактирование" : "Создание"} рецепта`;
  });

  protected readonly initialModel = computed<RecipeFormModel>(() => {
    const recipe = this.recipe();
    return recipe ? recipeToRecipeFormModel(recipe) : EMPTY_RECIPE_FORM_MODEL;
  });

  readonly recipeModel = linkedSignal<
    { recipe: Recipe | undefined; id: string | "new" },
    RecipeFormModel
  >({
    source: () => ({ recipe: this.recipe(), id: this.recipeId() || "new" }),
    computation: source => {
      const draft = this.draftService.getDraft(source.id);
      if (draft) {
        return draft.model;
      }
      return source.recipe ? recipeToRecipeFormModel(source.recipe) : EMPTY_RECIPE_FORM_MODEL;
    },
  });

  readonly isChanged = computed(() => {
    const currentRecipe = recipeFormModelToRecipe(this.recipeId() ?? "new", this.recipeModel());
    const initialRecipe = recipeFormModelToRecipe(this.recipeId() ?? "new", this.initialModel());
    return JSON.stringify(currentRecipe) !== JSON.stringify(initialRecipe);
  });

  protected recipeForm = form(this.recipeModel, recipe => {
    minLength(recipe.tools, 1, { message: "Необходимо перечислить используемую кухонную утварь" });
    minLength(recipe.ingredients.list, 1, {
      message: "Необходимо перечислить необходимые ингредиенты",
    });
    minLength(recipe.stepGroups, 1, { message: "Необходимо добавить хотя бы одну группу шагов" });
  });

  constructor() {
    effect(() => {
      if (this.recipe()) {
        const recipeFormModel = recipeToRecipeFormModel(this.recipe()!);
        this.recipeModel.set(recipeFormModel);
        this.initialModel();
        this.checkDraft(this.recipe()!.id);
      } else {
        this.checkDraft("new");
      }
    });

    effect(() => {
      if (!this.isChanged()) {
        return;
      }
      this.draftService.saveDraft(this.recipeId() || "new", this.recipeModel());
    });
  }

  private checkDraft(currentId: string | "new"): void {
    const draft = this.draftService.getDraft(currentId);
    if (draft) {
      this.recipeModel.set(draft.model);
    }
  }

  async navigateBack(): Promise<void> {
    if (this.recipeId()) {
      await this.router.navigate([".."], { relativeTo: this.activatedRoute });
    } else {
      await this.router.navigate(["/"]);
    }
  }

  async cancel(): Promise<void> {
    await this.navigateBack();
  }

  async submit(event: Event): Promise<void> {
    event.preventDefault();

    await submit(this.recipeForm, async () => {
      const recipeId = this.recipeId();
      const recipeFormModel = this.recipeModel();
      const recipe = recipeFormModelToRecipe(
        recipeId ?? RecipeService.generateId(),
        recipeFormModel,
      );
      this.recipeService.saveRecipe(recipe);
      this.draftService.clearDraft();
      await this.navigateBack();
    });
  }
}
