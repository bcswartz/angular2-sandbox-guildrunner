import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { routing }        from './app.routing';

import { AppComponent }   from './app.component';
import { VersionComponent } from './version/version.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from "./home/home.component";
import { GuildListComponent } from "./sandbox/guild-list/guild-list.component";
import { GuildsMasterComponent } from "./guilds-master/guilds-master.component";

import { VersionService } from './version/version.service';
import { SandboxService } from './sandbox/sandbox.service';
import { GuildService } from './guild.service';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing,
  ],

  declarations: [
    AppComponent,
    VersionComponent,
    MainNavigationComponent,
    HomeComponent,
    GuildListComponent,
    GuildsMasterComponent
  ],

  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService },     // in-mem server data
    VersionService,
    SandboxService,
    GuildService
  ],

  bootstrap:    [
    AppComponent

  ],
})
export class AppModule {}

