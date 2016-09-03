import { Routes, RouterModule } from '@angular/router';

import { GuildsMasterComponent } from "./guilds-master/guilds-master.component";
import { HomeComponent } from "./home/home.component";
import { GuildsDetailComponent } from "./guilds-detail/guilds-detail.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guilds', component: GuildsMasterComponent },
  { path: 'guilds/:id', component: GuildsDetailComponent}, //Edit route
  { path: 'guild', component: GuildsDetailComponent },  //Add route
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot( appRoutes );
