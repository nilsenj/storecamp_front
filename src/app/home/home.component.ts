import { Component, OnInit } from '@angular/core';

import { User } from '../_models';
import { UserService } from '../_services/index';
import { arrays } from '../_helpers/arrays';
@Component({
    templateUrl: '../home/home.component.html'
})

export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
              this.users = arrays.transformToArray(users);
            });
    }

}
