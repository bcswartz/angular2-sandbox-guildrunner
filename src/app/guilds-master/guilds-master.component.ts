import { Component, OnInit } from '@angular/core';
import { GuildService } from '../guild.service';
import { Guild } from '../domain/guild';
import { HttpResponse } from "../domain/http-response";

@Component({
  moduleId: module.id,
  selector: 'app-guilds-master',
  templateUrl: 'guilds-master.component.html',
  styleUrls: ['guilds-master.component.css']
})
export class GuildsMasterComponent implements OnInit {

  guilds: Guild[] = [];

  constructor( private guildService: GuildService ) { }

  ngOnInit() {
    this.guildService.getGuilds().then( (httpResponse:HttpResponse)  => {
      httpResponse.data.forEach( guild => {
        this.guilds.push( new Guild( guild ) )
      })
    } );
  }

}
