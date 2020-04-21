import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';

@NgModule({
   declarations: [
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [EventService],
   bootstrap: [
      EventsAppComponent
   ]
})
export class AppModule { }
