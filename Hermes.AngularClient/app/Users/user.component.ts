import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import UserListComponent from './user-list.component';
import UserDetailsComponent from './user-details.component';
import { UserService } from './user.service';

@Component({
  template:`
  <h2>Users</h2>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [UserService]
})
@Routes([
    { path: '', component: UserListComponent}, //useAsDefault: true
    { path: '/:id', component: UserDetailsComponent}
])

export default class UserComponent {}