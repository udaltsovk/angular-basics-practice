import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { COPYRIGHT_NAME, FOOTER_LINKS } from "../../recipe-book.config";
import { FooterLinkDirective } from "../../directives/footer-link.directive";
import { SvgIconDirective } from "../../directives/svg-icon.directive";

@Component({
  selector: "recipe-book-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FooterLinkDirective, SvgIconDirective],
})
export class FooterComponent {
  protected readonly footerLinks = inject(FOOTER_LINKS);
  protected readonly copyrightName = inject(COPYRIGHT_NAME);
  protected readonly currentYear = new Date().getFullYear();
}
