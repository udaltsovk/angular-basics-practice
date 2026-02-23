import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { SvgIconDirective } from "../../directives/svg-icon.directive";

@Component({
  selector: "recipe-book-theme-toggle",
  templateUrl: "./theme-toggle.component.html",
  styleUrl: "./theme-toggle.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconDirective],
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
