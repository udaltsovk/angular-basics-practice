import { computed, Directive, input } from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: "[recipeBookSvgIcon]",
  host: {
    "[style.mask-image]": "maskImage()",
    "[style.-webkit-mask-image]": "maskImage()",
    "[style.mask-repeat]": "'no-repeat'",
    "[style.-webkit-mask-repeat]": "'no-repeat'",
    "[style.mask-size]": "'contain'",
    "[style.-webkit-mask-size]": "'contain'",
    "[style.mask-position]": "'center'",
    "[style.-webkit-mask-position]": "'center'",
    "[style.display]": "'inline-block'",
    "[style.background-color]": "'currentColor'",
  },
})
export class SvgIconDirective {
  readonly iconPath = input.required<string>({ alias: "recipeBookSvgIcon" });

  protected readonly maskImage = computed(() => `url("icons/${this.iconPath()}.svg")`);
}
