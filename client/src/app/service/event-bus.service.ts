import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

class EmitEvent {
  name: Events;
  value: string;
}

class Events {
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject();

  constructor() {
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }

  on(event: Events, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EmitEvent) => e.name === event),
      map((e: EmitEvent) => e.value)
    ).subscribe(action);
  }
}
