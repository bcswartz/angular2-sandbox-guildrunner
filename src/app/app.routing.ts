import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import {GuildListComponent} from "./sandbox/guild-list/guild-list.component";
import { GuildsMasterComponent } from "./guilds-master/guilds-master.component";
import {HomeComponent} from "./home/home.component";

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'sandbox-guildlist', component: GuildListComponent },
  { path: 'guilds-master', component: GuildsMasterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
