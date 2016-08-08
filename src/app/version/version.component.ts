import { Component, OnInit } from '@angular/core';
import { VersionService } from './version.service';

@Component({
  moduleId: module.id,
  selector: 'app-version',
  templateUrl: 'version.component.html',
  providers: [
    VersionService
  ]
})
export class VersionComponent implements OnInit {

  versionNumber = '-.*.-';

  constructor( private versionService: VersionService ) { }

  ngOnInit() {
    this.versionService.getVersion().then( versions => this.versionNumber = versions[0].name );
  }

}
