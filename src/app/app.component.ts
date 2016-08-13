import { Component, OnInit } from '@angular/core';

import { VersionComponent } from './version/version.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    VersionComponent,
    MainNavigationComponent
  ]

})
export class AppComponent implements OnInit {
  title = 'GuildRunner';

  ngOnInit() {}

}
