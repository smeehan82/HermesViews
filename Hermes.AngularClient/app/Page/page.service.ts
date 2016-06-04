import { Injectable } from '@angular/core';

import Page from './page';

@Injectable()
export class PageService {
  getPages() {
    return Promise.resolve(PAGES);
  }
  
  // See the "Take it slow" appendix
  getPagesSlowly() {
    return new Promise<Page[]>(resolve =>
      setTimeout(()=>resolve(PAGES), 2000) // 2 seconds
    );
  }
  
  getPage(id: number) {
    return Promise.resolve(PAGES).then(
      pages => pages.filter(page => page.id === id)[0]
    );
  }
}

export var PAGES: Page[] = [
	{"id": 11, "name": "Home"},
	{"id": 12, "name": "About Us"},
	{"id": 13, "name": "My Blog"},
	{"id": 14, "name": "My Books"}
];