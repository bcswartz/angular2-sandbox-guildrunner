import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { HttpResponse } from './domain/http-response';
import { Chapter } from './domain/chapter';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChapterService {

  private chapterUrl = 'app/chapters';

  constructor( private http: Http ) { }

  getChapters() {
    return this.http.get( this.chapterUrl )
      .toPromise()
      .then( response => {
        let serviceResponse = new HttpResponse( response );
        serviceResponse.data = response.json().data;
        return serviceResponse;
      })
      .catch( error => {
        let serviceResponse = new HttpResponse( error );
        return serviceResponse;
      });
  }

}
