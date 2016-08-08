/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { VersionComponent } from './version.component';
import { VersionService } from './version.service';
import { Http } from '@angular/http';

let http = {} as Http;
let versionService = new VersionService( http );

describe('Component: Version', () => {
  it('should create an instance', () => {
    let component = new VersionComponent( versionService );
    expect(component).toBeTruthy();
  });
});
