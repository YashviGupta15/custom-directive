import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirectiveDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') enter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') leave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
