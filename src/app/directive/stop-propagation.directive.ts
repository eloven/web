import { Directive, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[click.stop]'
})
export class StopPropagationDirective {

  @Output("click.stop") stopPropEvent = new EventEmitter();
  unsubscribe: () => void;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(
      this.element.nativeElement, 'click', event => {
        event.stopPropagation();
        this.stopPropEvent.emit(event);
      });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
