import {User} from "../_models/user";
import {UserService} from "../_services/user.service";
import {arrays} from "../_helpers/arrays";
import {OnInit} from "@angular/core";

export abstract class UserBase implements OnInit{
  user: User[] = [];
  authenticated: boolean = false;

  constructor(protected userService: UserService) {
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
