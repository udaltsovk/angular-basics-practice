import {
  APP_ID,
  ApplicationConfig,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withViewTransitions,
} from "@angular/router";
import { provideMarkdown } from "ngx-markdown";
import { routes } from "./recipe-book.routes";
import { RecipeBookTitleStrategy } from "./strategy/title.strategy";
import { footerLinks } from "./content/footer-links";
import { FooterLink } from "./models/footer-link";

export const APP_NAME = new InjectionToken<string>("APP_NAME");
export const FOOTER_LINKS = new InjectionToken<FooterLink[]>("FOOTER_LINKS");
export const COPYRIGHT_NAME = new InjectionToken<string>("COPYRIGHT_NAME");

export const recipeBookConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideMarkdown(),
    { provide: APP_ID, useValue: "recipe-book" },
    { provide: APP_NAME, useValue: "Книга Рецептов" },
    { provide: TitleStrategy, useClass: RecipeBookTitleStrategy },
    {
      provide: FOOTER_LINKS,
      useValue: footerLinks,
    },
    { provide: COPYRIGHT_NAME, useValue: "Кирилл Удальцов" },
  ],
};
