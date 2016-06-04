import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { Logger } from '../Logging';

import Taxonomy from './taxonomy';
import { TaxonomyService } from './taxonomy.service';

@Component({
  template: `
  <div class="taxonomy-list">
    <div *ngFor="let item of taxonomys">
      <button (click)="gotoDetail(item)"> {{item.name}} </button>
    </div>
  </div>
`,
})

export default class TaxonomyListComponent implements OnActivate {
  taxonomys: Taxonomy[];
  private currSegment: RouteSegment;

  constructor(
    private taxonomyService: TaxonomyService,
    private router: Router,
    private logger: Logger ) { }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.taxonomyService.getTaxonomys().then(taxonomys => this.taxonomys = taxonomys);
  }
  
  gotoDetail(taxonomy: Taxonomy) {
    this.logger.log(this.currSegment);
    this.router.navigate([`./${taxonomy.id}`], this.currSegment);
  }
}