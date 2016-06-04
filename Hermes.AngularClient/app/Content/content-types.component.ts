import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import ContentTypeListComponent from './content-type-list.component';
import ContentListComponent from './content-list.component';
import { ContentTypesService } from './content-types.service';

@Component({
  template:`
  <h2>Content Types</h2>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ContentTypesService]
})
@Routes([
    { path: '', component: ContentTypeListComponent}, //useAsDefault: true
    { path: '/:id', component: ContentListComponent}
])

export default class ContentTypeComponent {}