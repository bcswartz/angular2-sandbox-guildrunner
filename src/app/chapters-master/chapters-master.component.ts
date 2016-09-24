import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { GuildService } from '../guild.service';
import { Chapter } from '../domain/chapter';
import { HttpResponse } from '../domain/http-response';

@Component({
  moduleId: module.id,
  selector: 'app-chapters-master',
  templateUrl: 'chapters-master.component.html',
  styleUrls: ['chapters-master.component.css']
})
export class ChaptersMasterComponent implements OnInit {

  chapters: Chapter[] = [];
  guilds: any = {};

  constructor(
    private chapterService: ChapterService,
    private guildService: GuildService
  ) { }

  ngOnInit() {

    Promise.all( [
        this.chapterService.getChapters(),
        this.guildService.getGuilds()
      ]
    ).then( (results:Promise<HttpResponse>[]) => {
      results[0]['data'].forEach(chapterData => {
        this.chapters.push(new Chapter(chapterData))
      });
      results[1]['data'].forEach(guildData => {
        this.guilds[guildData.id] = guildData;
      });
    });

  }


}
