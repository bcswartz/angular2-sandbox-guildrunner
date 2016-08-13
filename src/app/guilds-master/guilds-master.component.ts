import { Component, OnInit } from '@angular/core';
import { GuildService } from '../guild.service';
import { Guild } from '../domain/guild';

@Component({
  moduleId: module.id,
  selector: 'app-guilds-master',
  templateUrl: 'guilds-master.component.html',
  styleUrls: ['guilds-master.component.css'],
  providers: [ GuildService ]
})
export class GuildsMasterComponent implements OnInit {

  guilds: Guild[];

  constructor( private guildService: GuildService ) { }

  ngOnInit() {
    this.guildService.getGuilds().then( guilds => this.guilds = guilds );
  }

}
