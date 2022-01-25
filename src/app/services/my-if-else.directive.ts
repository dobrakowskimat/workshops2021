import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIfElse]'
})
export class MyIfElseDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appMyIfElseThen')
  elseTemplate: TemplateRef<any> | null = null;

  @Input() set appMyIfElse(condition: boolean){
    if (condition) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!condition && this.elseTemplate !== null) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.elseTemplate)
    }
  }

}
