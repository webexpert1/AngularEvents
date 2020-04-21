import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail/event-thumbnail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NavComponent } from './nav/nav.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './events/common/toastr.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import {  appRoutes } from './routes';
import { Error404Component } from './errors/error-404/error404.component';
import { EventRouteActivator } from './events/event-detail/event.route.activator';




@NgModule({
   declarations: [
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavComponent,
      EventDetailComponent,
      CreateEventComponent,
      Error404Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot(), // ToastrModule added
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      EventService,
      ToastrService,
      EventRouteActivator,
      {
        provide: 'CanDeactivateEventCreate',
        useValue: CheckDirtyState
      }
    ],
   bootstrap: [
      EventsAppComponent
   ]
})
export class AppModule { }

export function CheckDirtyState(component: CreateEventComponent) {
  if (component.isDirtyState) {
    confirm('Are you sure you want to leave this page, Changes will be lost');
  }
  return true;
}
