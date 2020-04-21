import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service';
import { Error404Component } from 'src/app/errors/error-404/error404.component';
import { Injectable } from '@angular/core';

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot) {
    const isExist = !!this.eventService.getEvent(+route.params['id']);

    if (!isExist) {
      this.router.navigate(['/404']);
    }
    return isExist;
  }


}
