import { Injectable } from '@angular/core';

import ContentType from './content-type';

@Injectable()
export default class ContentTypesService {
  getContentTypes() {
    return Promise.resolve(CONTENTTYPES);
  }
  
  // See the "Take it slow" appendix
  getContentTypesSlowly() {
    return new Promise<ContentType[]>(resolve =>
      setTimeout(()=>resolve(CONTENTTYPES), 2000) // 2 seconds
    );
  }
  
  getContentType(id: number) {
    return Promise.resolve(CONTENTTYPES).then(
      contentTypes => contentTypes.filter(contentType => contentType.id === id)[0]
    );
  }
}

export var CONTENTTYPES: ContentType[] = [
	{"id": 11, "name": "Blogs"},
	{"id": 12, "name": "Quotes"},
	{"id": 13, "name": "Musical Instruments"},
	{"id": 14, "name": "Books"}
];