import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('dropState', [
      state('normal', style({
        transform: 'translateX(-100px)',
        opacity: 0
      })),
      state('dropped', style({
        transform: "translateX(0px)",
        opacity: 1
      })),
      transition('normal => dropped', animate(100))
    ])

    // trigger('dropState', [
    //   state('in', style({
    //     transform: 'translateX(0)',
    //     opacity: 1
    //   })),
    //   transition('void => in',
    //   style({
    //     transform: 'translateX(-100px)',
    //     opacity: 0
    //   })
    //    ,animate(1000))
    // ])
  ]
})
export class HeaderComponent implements OnInit {
  state = 'normal';
  imgState = '';

  constructor(private dropdownDirective: DropdownDirective, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(s => {
     if (s instanceof NavigationEnd) {
       const tree = this.router.parseUrl(this.router.url);
       if (tree.fragment) {
         const element = document.querySelector("#" + tree.fragment);
         if (element) { element.scrollIntoView(); }
       }
     }
   });
 }


  onAnchorClick () {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ()
    });
  }


// onAnimate() {
//   if ( this.dropdownDirective.isOpen == true) {
//     this.state = 'dropped';
//   } else {
//     this.state = 'normal';
//   }
//
// }

// onLeave() {
//   this.state == 'dropped' ? this.state = 'normal' : this.state = 'dropped';
// }
}
