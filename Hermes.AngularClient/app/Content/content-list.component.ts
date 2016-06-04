import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import ContentTypes from './content-type';
import Content from './content';
import { ContentTypesService } from './content-types.service';

@Component({
  template:`
  <div *ngIf="contentType">
    <button (click)="goBack()">Back</button>
    <div>
      <div *ngFor="let item of content">
        <div><label>Title: </label>{{item.title}}</div>
        <div><label>Published Date: </label>{{item.datePublished}}</div>
      </div>
    </div>
  </div>
`,
})

export default class ContentListComponent implements OnActivate {
  contentType: ContentTypes;
  content: Content[];
  private curSegment: RouteSegment;

  constructor(
    private contentTypesService: ContentTypesService,
    private router: Router
    ) { }

  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;

    const id = +curr.getParam('id');
    this.contentTypesService.getContentType(id).then(contentType => {
      if (contentType) {
        this.contentType = contentType;
        this.contentTypesService.getContent(contentType.name).then(content => {
          this.content = content;
        });
      } else { // id not found
        this.gotoContentTypes();
      }
    });
  }
  
  gotoContentTypes() {
    // Relative link
    this.router.navigate(['../'], this.curSegment);
  }

  goBack() {
    this.gotoContentTypes();
  }
}