import { Routes, RouterModule } from '@angular/router';

import { GuildListComponent} from "./sandbox/guild-list/guild-list.component";
import { GuildsMasterComponent } from "./guilds-master/guilds-master.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sandbox-guildlist', component: GuildListComponent },
  { path: 'guilds-master', component: GuildsMasterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot( appRoutes );
