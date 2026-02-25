import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { DialogService } from "../../services/dialog.service";

@Component({
  selector: "recipe-book-dialog",
  standalone: true,
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  protected readonly dialogService = inject(DialogService);
}
