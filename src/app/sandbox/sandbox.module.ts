//Modules and routing imports
import { NgModule }       from '@angular/core';
import { sandboxRouting } from './sandbox.routing'

//Declarations (components, directives, and pipes)
import { GuildListComponent } from "./guild-list/guild-list.component";
import { ChapterMemberListComponent } from "./chapter-member-list/chapter-member-list.component";
import { ChapterListComponent } from "./chapter-list/chapter-list.component";

//Providers (services
import { SandboxService } from './sandbox.service';

@NgModule({
  imports: [
    sandboxRouting
  ],

  declarations: [
    GuildListComponent,
    ChapterListComponent,
    ChapterMemberListComponent
  ],

  providers: [
    SandboxService
  ]
})

export class SandboxModule {}


