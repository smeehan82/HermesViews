import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { Logger } from '../Logging';

import ContentType from './content-type';
import { ContentTypesService } from './content-types.service';

@Component({
  template:`
  <div class="content-types">
    <div *ngFor="let item of contentTypes">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
})

export default class ContentTypeListComponent implements OnActivate {
  contentTypes: ContentType[];
  private currSegment: RouteSegment;

  constructor(
    private contentTypesService: ContentTypesService,
    private router: Router,
    private logger: Logger ) { }
  
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.contentTypesService.getContentTypes().then(contentTypes => this.contentTypes = contentTypes);
  }
    
  gotoDetail(contentType: ContentType) {
    this.logger.log(this.currSegment);
    this.router.navigate([`/content`, contentType.id]);
    this.logger.log(contentType)
  }
}