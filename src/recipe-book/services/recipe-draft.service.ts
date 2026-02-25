import { Injectable } from "@angular/core";
import { RecipeFormModel } from "../pages/recipe-form/recipe-form.model";
import { Recipe } from "../models/recipe";

export type RecipeDraft = {
  id: string | "new";
  model: RecipeFormModel;
  timestamp: number;
};

@Injectable({ providedIn: "root" })
export class RecipeDraftService {
  private readonly DRAFT_KEY = "recipe-book::draft";

  saveDraft(id: Recipe["id"] | "new", model: RecipeFormModel): void {
    const draft: RecipeDraft = {
      id,
      model,
      timestamp: Date.now(),
    };
    localStorage.setItem(this.DRAFT_KEY, JSON.stringify(draft));
  }

  getDraft(id: string | "new"): RecipeDraft | null {
    const saved = localStorage.getItem(this.DRAFT_KEY);
    if (!saved) {
      return null;
    }

    try {
      const draft: RecipeDraft = JSON.parse(saved);
      return draft.id === id ? draft : null;
    } catch {
      this.clearDraft();
      return null;
    }
  }

  clearDraft(): void {
    localStorage.removeItem(this.DRAFT_KEY);
  }
}
