import { Component, OnInit } from '@angular/core';

import { SandboxVersionService } from './sandbox-version-service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
    SandboxVersionService,
  ]

})
export class AppComponent implements OnInit {
  title = 'GuildRunner2';
  versionNumber = 0;

  constructor( private versionService: SandboxVersionService ) {}

  ngOnInit() {
    this.versionService.getVersion().then( versions => this.versionNumber = versions[0].name );
  }

}
