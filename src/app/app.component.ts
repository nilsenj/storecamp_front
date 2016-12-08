import {Component, OnInit} from '@angular/core';
import {User} from "./_models/user";
import {UserService} from "./_services/user.service";
import {arrays} from "./_helpers/arrays";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User[] = [];
  authenticated: boolean = false;

  constructor(private userService: UserService) {
    this.userService.userEvent.subscribe(data => {
      this.getUser();
    });
  }

  ngOnInit() {
    // get users from secure api end point
    this.getUser();
  }

  getUser() {
    // get users from secure api end point
    if (this.userService.token) {
      this.userService.getAuthenticatedUser()
        .subscribe(users => {
          this.user = arrays.transformToArray(users);
          this.authenticated = true;
        });
    } else {
      this.user = [];
      this.authenticated = false;
    }

  }
}
