import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-list/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './events/common/toastr.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
   declarations: [
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot() // ToastrModule added
   ],
   providers: [EventService, ToastrService],
   bootstrap: [
      EventsAppComponent
   ]
})
export class AppModule { }
