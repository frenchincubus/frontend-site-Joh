import { Directive, HostListener, HostBinding, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[scrollfix]'
})
export class ScrollDirective {
  @HostBinding('class.navette-scrolled') isFixed = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', []) onWindowScroll() {
    let offset = window.pageYOffset;
    if (offset >= 150) {
      this.isFixed = true;
    } else if (offset < 50) {
      this.isFixed = false;
    }
  }

}
