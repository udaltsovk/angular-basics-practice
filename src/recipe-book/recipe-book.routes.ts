import { ActivatedRouteSnapshot, ResolveFn, Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { RecipePage } from "./pages/recipe/recipe.page";
import { inject } from "@angular/core";
import { RecipeService } from "./services/recipe.service";
import { Recipe } from "./models/recipe";

const viewRecipeTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const recipeId = route.paramMap.get("id") as Recipe["id"];
  const recipe = inject(RecipeService).findRecipe(recipeId);

  return recipe ? recipe.title : "Просмотр рецепта";
};

const editRecipeTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const recipeId = route.paramMap.get("id") as Recipe["id"];
  const recipe = inject(RecipeService).findRecipe(recipeId);

  return recipe ? `Редактирование: ${recipe.title}` : "Редактирование рецепта";
};

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
    title: "Главная",
  },
  {
    path: "not-found",
    loadComponent: () => import("./pages/not-found/not-found.page").then(m => m.NotFoundPage),
    title: "Страница не найдена",
  },
  {
    path: "recipes/new",
    loadComponent: () => import("./pages/recipe-form/recipe-form.page").then(m => m.RecipeFormPage),
    title: "Новый рецепт",
  },
  {
    path: "recipes/:id",
    component: RecipePage,
    title: viewRecipeTitleResolver,
  },
  {
    path: "recipes/:id/edit",
    loadComponent: () => import("./pages/recipe-form/recipe-form.page").then(m => m.RecipeFormPage),
    title: editRecipeTitleResolver,
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];
