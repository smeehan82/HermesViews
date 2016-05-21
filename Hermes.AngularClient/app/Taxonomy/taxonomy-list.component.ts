import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import Taxonomy from './taxonomy';
import TaxonomyService from './taxonomy.service';

@Component({
  selector: 'taxonomy-list',
  template: `
  <div class="grid grid-pad">
    <h2>Taxonomys Available.</h2>
  </div>
  <div class="taxonomy-list">
    <div *ngFor="let item of taxonomys">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
  providers: [TaxonomyService]
})

export default class TaxonomyListComponent {
  taxonomys: Taxonomy[];

  constructor(
    private taxonomyService: TaxonomyService,
    private router: Router) { }

  getTaxonomys() {
    this.taxonomyService.getTaxonomys().then(taxonomys => this.taxonomys = taxonomys);
  }

  ngOnInit() {
    this.getTaxonomys();
  }
  
  gotoDetail(taxonomy: Taxonomy) {
    let link = ['TaxonomyDetails', { id: taxonomy.id }];
    this.router.navigate(link);
  }
}