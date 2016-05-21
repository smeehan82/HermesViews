import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import DashboardComponent from './Dashboard/dashboard.component';
import ContentTypesComponent from './Content/content-types.component';
import ContentTypesDetailsComponent from './Content/content-types-details.component';
import TaxonomyComponent from './Taxonomy/taxonomy.component';
import PageComponent from './Page/page.component';
import UsersComponent from './Users/users.component';
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
    component: ContentTypesComponent,
    useAsDefault: false
  },
  {
    path: '/content-types/:id',
    name: 'ContentTypeDetails',
    component: ContentTypesDetailsComponent,
    useAsDefault: false
  },
  {
    path: '/taxonomy',
    name: 'Taxonomy',
    component: TaxonomyComponent,
    useAsDefault: false
  },
  {
    path: '/pages',
    name: 'Pages',
    component: PageComponent,
    useAsDefault: false
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersComponent,
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