import { Routes, RouterModule } from '@angular/router';

import { GuildListComponent} from "./guild-list/guild-list.component";

const sandboxRoutes: Routes = [
  { path: 'sandbox-guildlist', component: GuildListComponent }
];

export const sandboxRouting = RouterModule.forChild( sandboxRoutes );
