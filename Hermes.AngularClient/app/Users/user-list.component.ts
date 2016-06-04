import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

import User from './user';
import { UserService } from './user.service';

@Component({
  template: `
  <div class="user-list">
    <div *ngFor="let item of users">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
})

export default class UserListComponent implements OnActivate {
  users: User[];
  private currSegment: RouteSegment;

  constructor(
    private userService: UserService,
    private router: Router) { }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.userService.getUsers().then(users => this.users = users);
  }
  
  gotoDetail(user: User) {
    this.router.navigate([`./${user.id}`], this.currSegment);
  }
}