import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import User from './user';
import { UserService } from './user.service';

@Component({
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
})

export default class PageDetailsComponent implements OnActivate {
  user: User;
  private curSegment: RouteSegment;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;

    let id = +curr.getParam('id');
    this.userService.getUser(id).then(user => {
      if (user) {
        this.user = user;
      } else { // id not found
        this.gotoUsers();
      }
    });
  }
  
  gotoUsers() {
    // Relative link
    this.router.navigate(['../'], this.curSegment);
  }

  goBack() {
    this.gotoUsers();
  }
}