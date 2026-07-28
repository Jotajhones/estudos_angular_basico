import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlightPriority]',
})
export class HighlightPriority {

  priority = input<string>();

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {

    if (this.priority() === 'alta') {
      this.el.nativeElement.style.borderColor = 'var(--danger-color)';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {

    this.el.nativeElement.style.borderColor = 'var(--border-color)';
  }
}
