import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-main-navigation',
  templateUrl: 'main-navigation.component.html',
  styleUrls: ['main-navigation.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class MainNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
