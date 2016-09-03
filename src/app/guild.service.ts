import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { HttpResponse } from './domain/http-response';
import { Guild } from './domain/guild';

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

  getGuild( id: number ) {
    let selectedGuildUrl = this.guildUrl + `/${id}`;
    return this.http.get( selectedGuildUrl )
      .toPromise()
      .then( response => {
        let serviceResponse = new HttpResponse( response );
        serviceResponse.data.guild = new Guild( response.json().data );
        return serviceResponse;
      })
      .catch( error => {
        let serviceResponse = new HttpResponse( error );
        //In case the user has a URL bookmarked that points to a deleted guild
        if( error.status == 404 ) {
          serviceResponse.errors.push( `Selected guild (${id}) does not exist.` );
        } else {
          serviceResponse.errors.push( 'An error occurred. Please try again.' );
        }
        return serviceResponse;
      });
  }

  saveGuild( guild: Guild ) {
    if( guild.id ) {
      return this.updateGuild( guild );
    } else {
      return this.createGuild( guild );
    }
  }

  private createGuild( guild: Guild ) {
    return this.http
      .post( this.guildUrl, JSON.stringify( guild ), { headers: this.getHeaders() })
      .toPromise()
      .then( response => {
        let serviceResponse = new HttpResponse( response );
        serviceResponse.data.guild = new Guild( response.json().data );
        return serviceResponse;
      })
      .catch( error => {
        let serviceResponse = new HttpResponse( error );
        if( !serviceResponse.ok ) {
          serviceResponse.errors.push( 'An error occurred. Please try again.' );
        }
        return serviceResponse;
      });
  }


  private updateGuild( guild: Guild ) {
    let url = `${this.guildUrl}/${guild.id}`;

    return this.http
      .put( url, JSON.stringify( guild ), { headers: this.getHeaders() } )
      .toPromise()
      .then( response  => {
        let serviceResponse = new HttpResponse( response );
        serviceResponse.data.guild = guild;
        return serviceResponse;
      })
      .catch( error => {
        let serviceResponse = new HttpResponse( error );
        if( !serviceResponse.ok ) {
          serviceResponse.errors.push( 'An error occurred. Please try again.' );
        }
        return serviceResponse;
      });
  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append( 'Content-Type', 'application/json' );
    return headers;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
