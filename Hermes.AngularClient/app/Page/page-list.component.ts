import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import Page from './page';
import PageService from './page.service';

@Component({
  selector: 'page-list',
  template: `
  <div class="grid grid-pad">
    <h2>Pages Available.</h2>
  </div>
  <div class="page-list">
    <div *ngFor="let item of pages">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
  providers: [PageService]
})

export default class PageListComponent {
  pages: Page[];

  constructor(
    private pageService: PageService,
    private router: Router) { }

  getPages() {
    this.pageService.getPages().then(pages => this.pages = pages);
  }

  ngOnInit() {
    this.getPages();
  }
  
  gotoDetail(page: Page) {
    let link = ['PageDetails', { id: page.id }];
    this.router.navigate(link);
  }
}