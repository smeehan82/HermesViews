import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import Page from './page';
import PageService from './page.service';

@Component({
  selector: 'page-details',
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
  providers: [PageService]
})

export default class PageDetailsComponent implements OnInit {
  page: Page;

  constructor(
    private pageService: PageService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id =+ this.routeParams.get('id');
    this.pageService.getPage(id)
      .then(page => this.page = page);
  }

  goBack() {
    window.history.back();
  }
}