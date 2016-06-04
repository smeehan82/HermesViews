import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import Page from './page';
import { PageService } from './page.service';

@Component({
  template:`
  <div *ngIf="page">
    <h2>{{page.name}} details!</h2>
    <button (click)="goBack()">Back</button>
    <div>
      <label>id: </label>{{page.id}}
    </div>
    <div>
      <label>name: </label>{{page.name}}
    </div>
  </div>
`,
})

export default class PageDetailsComponent implements OnActivate {
  page: Page;
  private curSegment: RouteSegment;

  constructor(
    private pageService: PageService,
    private router: Router
    ) { }

  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;

    let id = +curr.getParam('id');
    this.pageService.getPage(id).then(page => {
      if (page) {
        this.page = page;
      } else { // id not found
        this.gotoPages();
      }
    });
  }
  
  gotoPages() {
    // Relative link
    this.router.navigate(['../'], this.curSegment);
  }

  goBack() {
    this.gotoPages();
  }
}