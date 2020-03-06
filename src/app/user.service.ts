import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  private state = new Subject();
  get getState$() {
    return this.state.asObservable();
  }
  set newState(data) {
    this.state.next(data);
  }
}
