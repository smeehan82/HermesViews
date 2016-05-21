import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import User from './user';
import UserService from './user.service';

@Component({
  selector: 'user-list',
  template: `
  <div class="grid grid-pad">
    <h2>Users Available.</h2>
  </div>
  <div class="user-list">
    <div *ngFor="let item of users">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
  providers: [UserService]
})

export default class UserListComponent {
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router) { }

  getUsers() {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }
  
  gotoDetail(user: User) {
    let link = ['UserDetails', { id: user.id }];
    this.router.navigate(link);
  }
}