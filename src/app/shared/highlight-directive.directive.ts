import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseeneter') enter() {
    this.element.nativeElement.style.backgroundColor = 'bule';
  }

  @HostListener('mouseleave') leave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
