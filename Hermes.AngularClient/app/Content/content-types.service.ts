import { Injectable } from '@angular/core';

import ContentType from './content-type';
import Content from './content'

@Injectable()
export class ContentTypesService {
  getContentTypes() {
    return Promise.resolve(CONTENTTYPES);
  }
  
  // See the "Take it slow" appendix
  getContentTypesSlowly() {
    return new Promise<ContentType[]>(resolve =>
      setTimeout(()=>resolve(CONTENTTYPES), 500) // half a second
    );
  }
  
  getContentType(id: number) {
    return Promise.resolve(CONTENTTYPES).then(
      contentTypes => contentTypes.filter(contentType => contentType.id === id)[0]
    );
  }
  
  getContentTypeByUrlName(urlName: string) {
    return Promise.resolve(CONTENTTYPES).then(
      contentTypes => contentTypes.filter(contentType => contentType.urlName === urlName)[0]
    );
  }
  
  getContent(contentType: string){
    return Promise.resolve(CONTENT[contentType]);
  }
}

export var CONTENTTYPES: ContentType[] = [
	{"id": 11, "name": "Blogs", "urlName": "blogs"},
	{"id": 12, "name": "Quotes", "urlName": "quotes"},
	{"id": 13, "name": "Musical Instruments", "urlName": "musical-instruments"},
	{"id": 14, "name": "Books", "urlName": "books"}
];

export var CONTENT: {[key:string]:Content[]} = {
	Books: [
	  {"id": "10", "title": "Dead Man's Hand", "slug": "dead-mans-hand", "dateCreated": "Today", "dateModified": "Today", "datePublished": "Today"},
    {"id": "11", "title": "Mistborn", "slug": "mistborn", "dateCreated": "Today", "dateModified": "Today", "datePublished": "Today"},
	  {"id": "12", "title": "Well of Ascension", "slug": "well-of-ascension", "dateCreated": "Today", "dateModified": "Today", "datePublished": "Today"},
  	{"id": "13", "title": "The Hero of Ages", "slug": "hero-of-ages", "dateCreated": "Today", "dateModified": "Today", "datePublished": "Today"}
  ],
};