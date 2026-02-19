import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "recipe-book-root",
  templateUrl: "./recipe-book.html",
  styleUrl: "./recipe-book.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent],
})
export class RecipeBook {}
