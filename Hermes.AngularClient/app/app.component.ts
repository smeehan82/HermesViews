import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import DashboardComponent from './Dashboard/dashboard.component';
import { ContentTypeComponent } from './Content';
import TaxonomyComponent from './Taxonomy/taxonomy.component';
import PageComponent from './Page/page.component';
import UserComponent from './Users/user.component';
import MyAccountComponent from './MyAccount/my-account.component';
import SystemSettingsComponent from './SystemSettings/system-settings.component';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/']">Dashboard</a>
      <a [routerLink]="['/content']">Content Types</a>
      <a [routerLink]="['/taxonomy']">Taxonomy</a>
      <a [routerLink]="['/pages']">Pages</a>
      <a [routerLink]="['/users']">Users</a>
      <a [routerLink]="['/my-account']">My Account</a>
      <a [routerLink]="['/system-settings']">System Settings</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
})

@Routes([
  { path: '', component: DashboardComponent },
  { path: '/content', component: ContentTypeComponent, },
  { path: '/taxonomy', component: TaxonomyComponent, },
  { path: '/pages', component: PageComponent, },
  { path: '/users', component: UserComponent, },
  { path: '/my-account', component: MyAccountComponent, },
  { path: '/system-settings', component: SystemSettingsComponent, },
])

export default class AppComponent{
  constructor(private router: Router) {}
  
  title = 'Hermes Admin';
}