import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, map, timer } from 'rxjs';

const baseStyles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({ position: 'relative', overflow: 'hidden' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-50px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({ transform: 'translateX(50px)', opacity: 0 }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ]),

      transition(':decrement', [
        style({ position: 'relative', overflow: 'hidden' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(50px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({ transform: 'translateX(-50px)', opacity: 0 }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ]),

      transition('* => secondary', [
        style({ position: 'relative' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'scale(0.8)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({ transform: 'scale(1.2)', opacity: 0 }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ], { optional: true })
        ])
      ]),

      transition('secondary => *', [
        style({ position: 'relative' }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'scale(1.25)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({ transform: 'scale(0.8)', opacity: 0 }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))
          ], { optional: true })
        ])
      ])
    ]),

    trigger('bgAnim', [
      transition(':leave', [animate(1000, style({ opacity: 0 }))])
    ]),

    trigger('fadeAnim', [
      transition(':enter', [
        style({ opacity: 0 }), animate(250, style({ opacity: 1 }))
      ]),

      transition(':leave', [animate(250, style({ opacity: 0 }))])
    ])
  ]
})
export class AppComponent implements OnInit {

  backgrounds: string[] = [
    'https://fastly.picsum.photos/id/66/3264/2448.jpg?hmac=H9yvGug9-Lk5f-1qZqs6dEV-Yd40jFOIC7oudo4eBK4'
  ];

  loadingBackgroundImage: boolean = false;
  dateTime!: Observable<Date>;

  constructor() { }

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(map(() => new Date()));
  }

  prepareRoute(outlet: RouterOutlet): string | void {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab'];

      if (!tab) return 'secondary';
      return tab;
    }

    return;
  }

  async changeBackgroundImage(): Promise<void> {
    this.loadingBackgroundImage = true;

    await fetch('https://picsum.photos/1920/1080').then(((result) => {
      const alreadyGot = this.backgrounds.includes(result.url);

      if (alreadyGot)
        return this.changeBackgroundImage();

      this.backgrounds.push(result.url);
      return;
    }));

  };

  onBackgroundImageLoad(imageEvent: Event): void {
    const imageElement = imageEvent.target as HTMLImageElement;
    const src = imageElement.src;

    this.backgrounds = this.backgrounds.filter(b => b === src);
    this.loadingBackgroundImage = false;
  }

}
