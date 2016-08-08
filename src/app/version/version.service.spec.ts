/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { VersionService } from './version.service';
import { HTTP_PROVIDERS } from '@angular/http';

describe('Service: Version', () => {
  beforeEach(() => {
    addProviders([VersionService, HTTP_PROVIDERS ]);
  });

  it('should instantiate the service',
    inject([VersionService],
      (service: VersionService) => {
        expect(service).toBeTruthy();
      }));
});
