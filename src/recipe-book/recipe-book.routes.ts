import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import {
  canDeactivateRecipeForm,
  editRecipeTitleResolver,
} from "./pages/recipe-form/recipe-form.page";
import { viewRecipeTitleResolver } from "./pages/recipe/recipe.page";

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
    canDeactivate: [canDeactivateRecipeForm],
  },
  {
    path: "recipes/:id",
    loadComponent: () => import("./pages/recipe/recipe.page").then(m => m.RecipePage),
    title: viewRecipeTitleResolver,
  },
  {
    path: "recipes/:id/edit",
    loadComponent: () => import("./pages/recipe-form/recipe-form.page").then(m => m.RecipeFormPage),
    title: editRecipeTitleResolver,
    canDeactivate: [canDeactivateRecipeForm],
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];
