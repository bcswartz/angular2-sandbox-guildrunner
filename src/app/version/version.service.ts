import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VersionService {

  private versionUrl = 'app/version'

  constructor( private http: Http ) { }

  getVersion() {
    return this.http.get(this.versionUrl)
      .toPromise()
      .then(response => response.json().data )
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
