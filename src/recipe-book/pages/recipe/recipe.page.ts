import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  untracked,
} from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
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
  ],
})
export class RecipePage implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  protected readonly params = toSignal(this.activatedRoute.paramMap);
  protected readonly recipeId = computed(() => this.params()!.get("id")! as Recipe["id"]);
  private readonly recipeService = inject(RecipeService);

  protected readonly recipe = this.recipeService.findRecipe$(this.recipeId);

  async ngOnInit(): Promise<void> {
    await this.redirectOnMissingRecipe();
  }

  async redirectOnMissingRecipe(): Promise<void> {
    if (this.recipe()) {
      return;
    }

    await this.router.navigate(["not-found"]);
  }

  async editRecipe(): Promise<void> {
    await this.router.navigate(["recipes", untracked(this.recipeId), "edit"]);
  }

  async deleteRecipe(): Promise<void> {
    this.recipeService.deleteRecipe(this.recipeId());
    await this.router.navigate([".."]);
  }
}
