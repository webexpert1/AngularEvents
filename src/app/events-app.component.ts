import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: ` <app-nav></app-nav>,
    <app-events-list></app-events-list>`
})
export class EventsAppComponent {
  title = 'Angular Events';
}
