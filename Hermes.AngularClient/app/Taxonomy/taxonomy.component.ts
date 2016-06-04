import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import TaxonomyListComponent from './taxonomy-list.component';
import TaxonomyDetailsComponent from './taxonomy-details.component';
import { TaxonomyService } from './taxonomy.service';

@Component({
  template:`
  <h2>Taxonomies</h2>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [TaxonomyService]
})
@Routes([
    { path: '', component: TaxonomyListComponent}, //useAsDefault: true
    { path: '/:id', component: TaxonomyDetailsComponent}
])

export default class TaxonomyComponent {}