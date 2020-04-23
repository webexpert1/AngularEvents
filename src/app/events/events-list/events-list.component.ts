import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  EVENTS: any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
  //  this.EVENTS = this.route.snapshot.data['events'];
   this.route.data.subscribe(data => {
     this.EVENTS = data['events'];
   });
  //  this.eventService.getEvents().subscribe(res => {
  //     this.EVENTS = res;
  //   });
  }

  handleClickMeEvent(data) {
    console.log('data received:', data);
  }

  handleEventThumbnaliClick(eventName) {
    this.toastr.success(eventName);
  }

}
