import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { APP_NAME } from "../../recipe-book.config";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: "recipe-book-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent],
})
export class HeaderComponent {
  protected readonly appName = inject(APP_NAME);
}
