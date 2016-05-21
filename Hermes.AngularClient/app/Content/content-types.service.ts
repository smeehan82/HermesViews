import { Injectable } from '@angular/core';

import ContentTypes from './content-types';
import Content from './content';

@Injectable()
export default class ContentTypesService {
  getContentTypes() {
    return Promise.resolve(CONTENTTYPES);
  }
  
  // See the "Take it slow" appendix
  getContentTypesSlowly() {
    return new Promise<ContentTypes[]>(resolve =>
      setTimeout(()=>resolve(CONTENTTYPES), 2000) // 2 seconds
    );
  }
  
  getContentType(id: number) {
    return Promise.resolve(CONTENTTYPES).then(
      contentTypes => contentTypes.filter(contentType => contentType.id === id)[0]
    );
  }
}

export var CONTENTTYPES: ContentTypes[] = [
	{"id": 11, "name": "Blogs"},
	{"id": 12, "name": "Quotes"},
	{"id": 13, "name": "Musical Instruments"},
	{"id": 14, "name": "Books"}
];