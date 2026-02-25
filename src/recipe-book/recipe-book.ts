import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DialogComponent } from "./components/dialog/dialog.component";

@Component({
  selector: "recipe-book-root",
  templateUrl: "./recipe-book.html",
  styleUrl: "./recipe-book.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DialogComponent],
})
export class RecipeBook {}
