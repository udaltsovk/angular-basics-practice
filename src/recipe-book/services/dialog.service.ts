import { Injectable, signal } from "@angular/core";

export type DialogConfig = {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  danger?: boolean;
};

@Injectable({ providedIn: "root" })
export class DialogService {
  private resolveConfirm?: (value: boolean) => void;
  readonly config = signal<DialogConfig | null>(null);

  confirm(config: DialogConfig): Promise<boolean> {
    if (this.config()) {
      return Promise.resolve(false);
    }

    this.config.set({
      confirmText: "Подтвердить",
      cancelText: "Отмена",
      ...config,
    });
    return new Promise(resolve => {
      this.resolveConfirm = resolve;
    });
  }

  handleResult(result: boolean): void {
    this.config.set(null);
    this.resolveConfirm?.(result);
  }
}
