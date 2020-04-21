import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  EVENTS: any;

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    this.EVENTS = this.eventService.getEvents();
  }

  handleClickMeEvent(data) {
    console.log('data received:', data);
  }

  handleEventThumbnaliClick(eventName) {
    this.toastr.success(eventName);
  }

}
