import {Component, OnInit} from '@angular/core';
import {User} from './_models/user';
import {UserService} from './_services/user.service';
import {arrays} from './_helpers/arrays';
import {UserBase} from './abstracts/user.base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UserBase {
  constructor(protected userService: UserService) {
    super(userService);
  }
}
