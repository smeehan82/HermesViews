import { Injectable } from '@angular/core';

import Taxonomy from './taxonomy';

@Injectable()
export class TaxonomyService {
  getTaxonomys() {
    return Promise.resolve(TAXONOMY);
  }
  
  // See the "Take it slow" appendix
  getTaxonomysSlowly() {
    return new Promise<Taxonomy[]>(resolve =>
      setTimeout(()=>resolve(TAXONOMY), 2000) // 2 seconds
    );
  }
  
  getTaxonomy(id: number) {
    return Promise.resolve(TAXONOMY).then(
      taxonomys => taxonomys.filter(taxonomy => taxonomy.id === id)[0]
    );
  }
}

export var TAXONOMY: Taxonomy[] = [
	{"id": 11, "name": "Tags"},
	{"id": 12, "name": "Categories"},
];