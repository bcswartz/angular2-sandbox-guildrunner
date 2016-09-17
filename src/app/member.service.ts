import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { HttpResponse } from './domain/http-response';
import { ChapterMember } from './domain/chapter-member';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MemberService {

  private memberUrl = 'app/chapterMembers';

  constructor( private http: Http ) { }

  getMembers() {
    return this.http.get( this.memberUrl )
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
