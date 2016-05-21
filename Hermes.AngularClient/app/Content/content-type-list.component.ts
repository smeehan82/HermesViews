import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import ContentType from './content-type';
import ContentTypesService from './content-types.service';

@Component({
  selector: 'content-type-list',
  template:`
  <div class="grid grid-pad">
    <h2>Content Types Available.</h2>
  </div>
  <div class="content-types">
    <div *ngFor="let item of contentTypes">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
  providers: [ContentTypesService]
})

export default class ContentTypeListComponent {
  contentTypes: ContentType[];

  constructor(
    private contentTypesService: ContentTypesService,
    private router: Router) { }

  getContentTypes() {
    this.contentTypesService.getContentTypes().then(contentTypes => this.contentTypes = contentTypes);
  }

  ngOnInit() {
    this.getContentTypes();
  }
  
  gotoDetail(contentType: ContentType) {
    let link = ['ContentTypeDetails', { id: contentType.id }];
    this.router.navigate(link);
  }
}