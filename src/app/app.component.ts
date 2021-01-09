import { Component } from '@angular/core';
import { trigger, transition, query, group, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // 0 => 1,0=>2,0 =>3,0 =>4,1 => 0,1 =>2 ,1 =>3,1 => 4,2 =>0,2 =>1,2 =>3,2 =>4,3 =>0,3 =>1,3=>2,3=>4,4=>0,4=>1,4=>2,4 => 3
    trigger('router', [
      transition('0=>3,0=>1,0=>2,0=>4,1=>2,1=>3,1=>4,2=>3,2=>4,3=>4', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ]),
      transition('3=>0,1=>0,2=>0,4=>0,2=>1,3=>1,4=>1,3=>2,4=>2,4=>3', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(100%)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'firebaseMarket';
}
