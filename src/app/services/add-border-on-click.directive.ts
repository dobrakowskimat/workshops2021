import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddBorderOnClick]'
})
export class AddBorderOnClickDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '50px';
  }

  @HostListener('click') onClick(){
    if (this.el.nativeElement.style.borderColor === 'black'){
      this.el.nativeElement.style.borderColor = 'red';
    }
    else {
      this.el.nativeElement.style.borderColor = 'black';

    }
    this.el.nativeElement.style.borderWidth = '5px';
    this.el.nativeElement.style.borderStyle = 'solid';
  }

}
