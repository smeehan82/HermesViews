import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import DashboardComponent from './Dashboard/dashboard.component';
import ContentTypeListComponent from './Content/content-type-list.component';
import ContentTypeDetailsComponent from './Content/content-type-details.component';
import TaxonomyListComponent from './Taxonomy/taxonomy-list.component';
import TaxonomyDetailsComponent from './Taxonomy/taxonomy-details.component';
import PageListComponent from './Page/page-list.component';
import PageDetailsComponent from './Page/page-details.component';
import UserListComponent from './Users/user-list.component';
import UserDetailsComponent from './Users/user-details.component';
import MyAccountComponent from './MyAccount/my-account.component';
import SystemSettingsComponent from './SystemSettings/system-settings.component';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['ContentTypes']">Content Types</a>
      <a [routerLink]="['Taxonomy']">Taxonomy</a>
      <a [routerLink]="['Pages']">Pages</a>
      <a [routerLink]="['Users']">Users</a>
      <a [routerLink]="['MyAccount']">My Account</a>
      <a [routerLink]="['SystemSettings']">System Settings</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/content-types',
    name: 'ContentTypes',
    component: ContentTypeListComponent,
    useAsDefault: false
  },
  {
    path: '/content-types/:id',
    name: 'ContentTypeDetails',
    component: ContentTypeDetailsComponent,
    useAsDefault: false
  },
  {
    path: '/taxonomy',
    name: 'Taxonomy',
    component: TaxonomyListComponent,
    useAsDefault: false
  },
  {
    path: '/taxonomy/:id',
    name: 'TaxonomyDetails',
    component: TaxonomyDetailsComponent,
    useAsDefault: false
  },
  {
    path: '/pages',
    name: 'Pages',
    component: PageListComponent,
    useAsDefault: false
  },
  {
    path: '/pages/:id',
    name: 'PageDetails',
    component: PageDetailsComponent,
    useAsDefault: false
  },
  {
    path: '/users',
    name: 'Users',
    component: UserListComponent,
    useAsDefault: false
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetailsComponent,
    useAsDefault: false
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccountComponent,
    useAsDefault: false
  },
  {
    path: '/system-settings',
    name: 'SystemSettings',
    component: SystemSettingsComponent,
    useAsDefault: false
  },
])
export default class AppComponent {
  title = 'Hermes Admin';
}