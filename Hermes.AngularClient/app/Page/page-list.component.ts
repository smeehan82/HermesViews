import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

import Page from './page';
import { PageService } from './page.service';

@Component({
  template: `
  <div class="page-list">
    <div *ngFor="let item of pages">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
})

export default class PageListComponent implements OnActivate {
  pages: Page[];
  private currSegment: RouteSegment;

  constructor(
    private pageService: PageService,
    private router: Router) { }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.pageService.getPages().then(pages => this.pages = pages);
  }
  
  gotoDetail(page: Page) {
    this.router.navigate([`./${page.id}`], this.currSegment);
  }
}