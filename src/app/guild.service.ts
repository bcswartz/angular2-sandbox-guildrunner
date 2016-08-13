import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GuildService {

  private guildUrl = 'app/guilds';

  constructor( private http: Http ) { }

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
