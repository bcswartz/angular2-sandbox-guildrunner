import { Routes, RouterModule } from '@angular/router';

import { GuildListComponent} from "./guild-list/guild-list.component";
import { ChapterListComponent } from "./chapter-list/chapter-list.component";
import { ChapterMemberListComponent } from "./chapter-member-list/chapter-member-list.component";
import { ChapterReactiveFormComponent } from "./chapter-reactive-form/chapter-reactive-form.component";


const sandboxRoutes: Routes = [
  { path: 'sandbox-guildlist', component: GuildListComponent },
  { path: 'sandbox-chapterlist', component: ChapterListComponent },
  { path: 'sandbox-memberlist', component: ChapterMemberListComponent},
  { path: 'sandbox-reactivechapter', component: ChapterReactiveFormComponent }
];

export const sandboxRouting = RouterModule.forChild( sandboxRoutes );
