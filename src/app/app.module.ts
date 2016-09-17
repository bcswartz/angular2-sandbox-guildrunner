//Modules and routing imports
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { SandboxModule } from './sandbox/sandbox.module';
import { routing }        from './app.routing';

//Declarations (components, directives, and pipes)
import { AppComponent }   from './app.component';
import { VersionComponent } from './version/version.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from "./home/home.component";
import { GuildsMasterComponent } from "./guilds-master/guilds-master.component";
import { GuildsDetailComponent } from "./guilds-detail/guilds-detail.component";
import { ChaptersMasterComponent } from "./chapters-master/chapters-master.component";
import { MembersMasterComponent } from "./members-master/members-master.component";

//Providers (services)
import { VersionService } from './version/version.service';
import { GuildService } from './guild.service';
import { ChapterService } from "./chapter.service";
import { MemberService } from "./member.service";

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    SandboxModule
  ],

  declarations: [
    AppComponent,
    VersionComponent,
    MainNavigationComponent,
    HomeComponent,
    GuildsMasterComponent,
    GuildsDetailComponent,
    ChaptersMasterComponent,
    MembersMasterComponent
  ],

  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService },     // in-mem server data
    VersionService,
    GuildService,
    ChapterService,
    MemberService
  ],

  bootstrap:    [
    AppComponent
  ],
})

export class AppModule {}

