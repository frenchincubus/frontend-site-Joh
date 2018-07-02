import { Directive, HostListener, HostBinding, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[hideImg]'
})
export class HiddenDirective {

  @HostBinding('class.reduceImg') isHidden = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', []) onWindowSroll() {
    let offset = window.pageYOffset;
    if (offset >= 150) {

      this.isHidden = true;
    } else if (offset < 150) {

      this.isHidden = false;
    }
  }

}
