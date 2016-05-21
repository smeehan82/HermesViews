import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import MyAccount from './my-account';
import MyAccountService from './my-account.service';

@Component({
  selector: 'my-account',
  template: `
  <div *ngFor="let item of myAccount">
    <div class="grid grid-pad">
      <h2>Welcome, {{item.firstName}} {{item.middleName}} {{item.lastName}}.</h2>
    </div>
    <div>
      <label>First Name: </label>
      <input [(ngModel)]="item.firstName" placeholder="name" />
    </div>
    <div>
      <label>Middle Name: </label>
      <input [(ngModel)]="item.middleName" placeholder="password" />
    </div>
    <div>
      <label>Last Name: </label>
      <input [(ngModel)]="item.lastName" placeholder="name" />
    </div>
    <div>
      <label>Email: </label>
      <input [(ngModel)]="item.email" placeholder="email" />
    </div>
    <div>
      <label>Password: </label>
      <input [(ngModel)]="item.password" placeholder="password" />
    </div>
  </div>
`,
  providers: [MyAccountService]
})

export default class MyAccountComponent {
  myAccount: MyAccount[];

  constructor(
    private myAccountService: MyAccountService,
    private router: Router) { }

  getMyAccounts() {
    this.myAccountService.getMyAccounts().then(myAccount => this.myAccount = myAccount);
  }

  ngOnInit() {
    this.getMyAccounts();
  }
}