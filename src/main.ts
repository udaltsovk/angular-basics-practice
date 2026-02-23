import { bootstrapApplication } from "@angular/platform-browser";
import { recipeBookConfig } from "./recipe-book/recipe-book.config";
import { RecipeBook } from "./recipe-book/recipe-book";

bootstrapApplication(RecipeBook, recipeBookConfig).catch(err => console.error(err));
