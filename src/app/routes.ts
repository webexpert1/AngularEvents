import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error-404/error404.component';
import { EventRouteActivator } from './events/event-detail/event.route.activator';
import { EventListResolver } from './events/events-list/events-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateEventCreate']},
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];
