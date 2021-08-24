import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private e1 : ElementRef,
    private renderer : Renderer2) { }

    @HostListener('mouseenter') onMouseEnter(){
      this.renderer.addClass(this.e1.nativeElement, 'highlight');
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.renderer.removeClass(this.e1.nativeElement, 'highlight');
    }
}
