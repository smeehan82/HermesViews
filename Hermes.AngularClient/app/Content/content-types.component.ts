import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import ContentTypes from './content-types';
import ContentTypesService from './content-types.service';
import CONTENTTYPES from './content-types.service';

@Component({
  selector: 'contentType',
  template:`
  <div class="grid grid-pad">
    <h2>Content Types Available.</h2>
  </div>
  <div class="contentType">
    <div *ngFor="let item of contentTypes">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
  providers: [ContentTypesService]
})

export default class ContentTypesComponent {
  contentTypes: ContentTypes[];

  constructor(
    private router: Router,
    private contentTypesService: ContentTypesService) { }

  getContentTypes() {
    this.contentTypesService.getContentTypes().then(contentTypes => this.contentTypes = contentTypes);
  }

  ngOnInit() {
    this.getContentTypes();
  }
  
  gotoDetail(contentTypes: ContentTypes) {
    let link = ['ContentTypeDetails', { id: contentTypes.id }];
    this.router.navigate(link);
  }
  
  gotoContent(contentTypes: ContentTypes) {
    let link = ['Content', { name: contentTypes.name }];
    this.router.navigate(link);
  }
}