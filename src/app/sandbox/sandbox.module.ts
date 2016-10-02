//Modules and routing imports
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { sandboxRouting } from './sandbox.routing'
import { ReactiveFormsModule }    from '@angular/forms';

//Declarations (components, directives, and pipes)
import { GuildListComponent } from "./guild-list/guild-list.component";
import { ChapterMemberListComponent } from "./chapter-member-list/chapter-member-list.component";
import { ChapterListComponent } from "./chapter-list/chapter-list.component";
import { ChapterReactiveFormComponent } from "./chapter-reactive-form/chapter-reactive-form.component";

//Providers (services
import { SandboxService } from './sandbox.service';


@NgModule({
  imports: [
    sandboxRouting,
    BrowserModule,
    ReactiveFormsModule
  ],

  declarations: [
    GuildListComponent,
    ChapterListComponent,
    ChapterMemberListComponent,
    ChapterReactiveFormComponent
  ],

  providers: [
    SandboxService
  ]
})

export class SandboxModule {}


