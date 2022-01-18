import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighlight')
  colorOnMouseEnter = 'red';

  @Input()
  colorAfterMouseLeave = 'green';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlightElement(this.colorOnMouseEnter);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlightElement(this.colorAfterMouseLeave);
  }

  private highlightElement(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
