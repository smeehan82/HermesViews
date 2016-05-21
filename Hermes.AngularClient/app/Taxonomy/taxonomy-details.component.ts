import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import Taxonomy from './taxonomy';
import TaxonomyService from './taxonomy.service';

@Component({
  selector: 'taxonomy-details',
  template:`
  <div *ngIf="taxonomy">
    <h2>{{taxonomy.name}} details!</h2>
    <button (click)="goBack()">Back</button>
    <div>
      <label>id: </label>{{taxonomy.id}}
    </div>
    <div>
      <label>name: </label>{{taxonomy.name}}
    </div>
  </div>
`,
  providers: [TaxonomyService]
})

export default class PageDetailsComponent implements OnInit {
  taxonomy: Taxonomy;

  constructor(
    private taxonomyService: TaxonomyService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id =+ this.routeParams.get('id');
    this.taxonomyService.getTaxonomy(id)
      .then(taxonomy => this.taxonomy = taxonomy);
  }

  goBack() {
    window.history.back();
  }
}