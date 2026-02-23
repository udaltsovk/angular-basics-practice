import { Directive, ElementRef, HostListener, inject, Renderer2 } from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: "img[recipeBookImageFit]",
})
export class ImageFitDirective {
  private readonly el = inject(ElementRef<HTMLImageElement>);
  private readonly renderer = inject(Renderer2);

  @HostListener("load")
  onLoad(): void {
    this.updateParentAspectRatio();
  }

  private updateParentAspectRatio(): void {
    const img = this.el.nativeElement;
    const parent = img.parentElement;

    if (parent && img.naturalWidth && img.naturalHeight) {
      const ratio = img.naturalWidth / img.naturalHeight;
      this.renderer.setStyle(parent, "aspect-ratio", ratio.toString());
      this.renderer.setStyle(parent, "height", "auto");
    }
  }
}
