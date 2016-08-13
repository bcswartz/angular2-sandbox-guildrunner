import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SandboxService {

  private guildUrl = 'app/guilds';

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


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
