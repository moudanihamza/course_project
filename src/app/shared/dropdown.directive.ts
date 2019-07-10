import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

private isOpen = false;

@HostListener('click') toggleOpen(eventData: Event) {
  const elt = this.elementRef.nativeElement.querySelector('.dropdown-menu');
  if (this.isOpen) {
    this.renderer.removeClass(elt, 'show');
    this.isOpen = !this.isOpen;
  } else {
    this.renderer.addClass(elt, 'show');
    this.isOpen = !this.isOpen;
  }
}

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
