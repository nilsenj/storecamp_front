import { Component, OnInit } from '@angular/core';
import {UserBase} from "../../abstracts/user.base";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent extends UserBase {

}
