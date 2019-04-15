import { animate, style, transition, trigger } from '@angular/animations';


export const easeInOut = trigger('easeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.1s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.1s', style({ opacity: 0 }))
  ])
]);
