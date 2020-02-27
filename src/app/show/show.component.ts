import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { UserService } from '../user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy {
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.subj.pipe(
      untilComponentDestroyed(this)
    ).subscribe(({userFirstName, userLastName, userEmail}) => {
      this.firstName = userFirstName;
      this.lastName = userLastName;
      this.email = userEmail;
    });
  }

  ngOnDestroy() {

  }

}
