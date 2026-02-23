import { Directive } from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: "a[recipeBookFooterLink]",
  host: {
    target: "_blank",
    rel: "noopener",
    class: "footer__link",
  },
})
export class FooterLinkDirective {}
