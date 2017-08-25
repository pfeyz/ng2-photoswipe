import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[photoswipeDirective]'
})
export class PhotoswipeDirective {

  constructor(private el: ElementRef) {
  }

}
