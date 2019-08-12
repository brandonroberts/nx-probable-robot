import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mygh-user-searchbox',
  templateUrl: './user-searchbox.component.html',
  styleUrls: ['./user-searchbox.component.css']
})
export class UserSearchboxComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
