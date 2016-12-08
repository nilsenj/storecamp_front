import {Component, OnInit, Input} from '@angular/core';
import { User } from "../_models/user";

@Component({
  selector: 'app-navigaion',
  templateUrl: './navigaion.component.html',
  styleUrls: ['./navigaion.component.css']
})

export class NavigaionComponent implements OnInit {

  @Input() user: User[] = [];
  @Input() authenticated: boolean = false;

  ngOnInit() {
  }
}
