import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./recipe-book/app.config";
import { RecipeBook } from "./recipe-book/recipe-book";

bootstrapApplication(RecipeBook, appConfig).catch(err => console.error(err));
