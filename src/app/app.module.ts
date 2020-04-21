import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
