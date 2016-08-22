//Modules and routing imports
import { NgModule }       from '@angular/core';
import { sandboxRouting } from './sandbox.routing'

//Declarations (components, directives, and pipes)
import { GuildListComponent } from "./guild-list/guild-list.component";

//Providers (services
import { SandboxService } from './sandbox.service';

@NgModule({
  imports: [
    sandboxRouting
  ],

  declarations: [
    GuildListComponent
  ],

  providers: [
    SandboxService
  ]
})

export class SandboxModule {}


