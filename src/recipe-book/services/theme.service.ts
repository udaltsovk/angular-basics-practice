import { APP_ID, effect, inject, Injectable, signal } from "@angular/core";

export type Theme = "light" | "dark";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly APP_ID = inject(APP_ID);
  private readonly storageKey = `${this.APP_ID}::theme`;
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      localStorage.setItem(this.storageKey, currentTheme);
      this.applyTheme(currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update(t => (t === "light" ? "dark" : "light"));
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(this.storageKey) as Theme;
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  private applyTheme(theme: Theme): void {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }
}
