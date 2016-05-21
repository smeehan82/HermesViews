import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import ContentTypes from './content-types';
import ContentTypesService from './content-types.service';
import CONTENTTYPES from './content-types.service';

@Component({
  selector: 'contentType-detail',
  template:`
  <div *ngIf="contentType">
    <h2>{{contentType.name}} details!</h2>
    <button (click)="goBack()">Back</button>
    <div>
      <label>id: </label>{{contentType.id}}
    </div>
    <div>
      <label>name: </label>{{contentType.name}}
    </div>
    <div>
      <button (click)="gotoContent(item)"> Content </button>
    </div>
  </div>
`,
  providers: [ContentTypesService]
})

export default class ContentTypesDetailsComponent implements OnInit {
  contentType: ContentTypes;

  constructor(
    private contentTypesService: ContentTypesService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id =+ this.routeParams.get('id');
    this.contentTypesService.getContentType(id)
      .then(contentType => this.contentType = contentType);
  }

  goBack() {
    window.history.back();
  }
}