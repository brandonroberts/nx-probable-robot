import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mygh-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.css']
})
export class UserResultsComponent implements OnInit {
  @Input() results = [];
    
  constructor() { }

  ngOnInit() {
  }

}
