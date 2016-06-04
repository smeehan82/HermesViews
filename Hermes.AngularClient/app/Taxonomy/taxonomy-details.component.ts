import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import Taxonomy from './taxonomy';
import { TaxonomyService } from './taxonomy.service';

@Component({
  template:`
  <div *ngIf="taxonomy">
    <h4>{{taxonomy.name}} details!</h4>
    <button (click)="goBack()">Back</button>
    <div>
      <label>id: </label>{{taxonomy.id}}
    </div>
    <div>
      <label>name: </label>{{taxonomy.name}}
    </div>
  </div>
`,
})

export default class TaxonomyDetailsComponent implements OnActivate {
  taxonomy: Taxonomy;
  private curSegment: RouteSegment;

  constructor(
    private taxonomyService: TaxonomyService,
    private router: Router
    ) { }

  routerOnActivate(curr: RouteSegment) {
    this.curSegment = curr;

    let id = +curr.getParam('id');
    this.taxonomyService.getTaxonomy(id).then(taxonomy => {
      if (taxonomy) {
        this.taxonomy = taxonomy;
      } else { // id not found
        this.gotoTaxonomies();
      }
    });
  }
  
  gotoTaxonomies() {
    // Relative link
    this.router.navigate(['../'], this.curSegment);
  }

  goBack() {
    this.gotoTaxonomies();
  }
}