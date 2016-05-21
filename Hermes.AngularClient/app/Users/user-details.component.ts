import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import User from './user';
import UserService from './user.service';

@Component({
  selector: 'user-details',
  template:`
  <div *ngIf="user">
    <h2>{{user.name}} details!</h2>
    <button (click)="goBack()">Back</button>
    <div>
      <label>id: </label>{{user.id}}
    </div>
    <div>
      <label>name: </label>{{user.name}}
    </div>
  </div>
`,
  providers: [UserService]
})

export default class PageDetailsComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id =+ this.routeParams.get('id');
    this.userService.getUser(id)
      .then(user => this.user = user);
  }

  goBack() {
    window.history.back();
  }
}