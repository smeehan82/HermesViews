declare var require:(m:string) => any; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taxonomy',
  template: require('raw!./taxonomy.component.html'),
})

export default class TaxonomyComponent {}