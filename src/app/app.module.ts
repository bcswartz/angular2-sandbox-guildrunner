//Modules and routing imports
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { SandboxModule } from './sandbox/sandbox.module';
import { routing }        from './app.routing';

//Declarations (components, directives, and pipes)
import { AppComponent }   from './app.component';
import { VersionComponent } from './version/version.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from "./home/home.component";
import { GuildsMasterComponent } from "./guilds-master/guilds-master.component";

//Providers (services)
import { VersionService } from './version/version.service';
import { GuildService } from './guild.service';
// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing,
    SandboxModule
  ],

  declarations: [
    AppComponent,
    VersionComponent,
    MainNavigationComponent,
    HomeComponent,
    GuildsMasterComponent
  ],

  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService },     // in-mem server data
    VersionService,
    GuildService
  ],

  bootstrap:    [
    AppComponent
  ],
})

export class AppModule {}

