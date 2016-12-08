import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: UserService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  register() {
    this.loading = true;
    this.authenticationService.register(this.model.name, this.model.email, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Sorry your account isn\'t created';
          this.loading = false;
        }
      }, (data) => {
        this.error = 'Sorry your account isn\'t created';
        this.loading = false;
      });
  }
}
