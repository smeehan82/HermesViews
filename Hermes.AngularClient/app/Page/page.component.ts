import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import PageListComponent from './page-list.component';
import PageDetailsComponent from './page-details.component';
import { PageService } from './page.service';

@Component({
  template:`
  <h2>Pages</h2>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [PageService]
})
@Routes([
    { path: '', component: PageListComponent}, //useAsDefault: true
    { path: '/:id', component: PageDetailsComponent}
])

export default class PageComponent {}