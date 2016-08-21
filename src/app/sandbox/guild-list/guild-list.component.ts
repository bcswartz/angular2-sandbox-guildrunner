import { Component, OnInit } from '@angular/core';
import { SandboxService } from '../sandbox.service';

@Component({
  moduleId: module.id,
  selector: 'app-guild-list',
  templateUrl: 'guild-list.component.html',
  styleUrls: ['guild-list.component.css']
})
export class GuildListComponent implements OnInit {

  guildList;

  constructor( private sandboxService: SandboxService ) { }

  ngOnInit() {
    this.sandboxService.getGuilds().then( guilds => this.guildList = JSON.stringify( guilds, null, 2 ) );
  }

}
