import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SandboxService {

  private guildUrl = 'app/guilds';
  private chapterUrl = 'app/chapters';
  private memberUrl = 'app/chapterMembers';

  constructor( private http: Http) {}

  /*
  So this gets the raw data (useful for diagnostic display), but if we type it to the object, then what?
  */
  getGuilds() {
    return this.http.get( this.guildUrl )
      .toPromise()
      .then(response => response.json().data )
      .catch(this.handleError);
  }

  getChapters() {
    return this.http.get( this.chapterUrl )
      .toPromise()
      .then(response => response.json().data )
      .catch(this.handleError);
  }

  getChapterMembers() {
    return this.http.get( this.memberUrl )
      .toPromise()
      .then(response => response.json().data )
      .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
