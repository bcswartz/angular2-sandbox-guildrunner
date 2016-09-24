import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { ChapterService } from '../chapter.service';
import { GuildService } from '../guild.service';
import { ChapterMember } from '../domain/chapter-member';
import { HttpResponse } from '../domain/http-response';

@Component({
  moduleId: module.id,
  selector: 'app-members-master',
  templateUrl: 'members-master.component.html',
  styleUrls: ['members-master.component.css']
})
export class MembersMasterComponent implements OnInit {

  members: ChapterMember[] = [];
  chapters: any = {};
  guilds: any = {};

  constructor(
    private memberService: MemberService,
    private chapterService: ChapterService,
    private guildService: GuildService
  ) { }

  ngOnInit() {

    Promise.all( [
      this.memberService.getMembers(),
      this.chapterService.getChapters(),
      this.guildService.getGuilds()
    ]).then( (results:Promise<HttpResponse>[]) => {
      results[0]['data'].forEach( memberData => {
        this.members.push( new ChapterMember( memberData ) )
      });
      results[1]['data'].forEach( chapterData => {
        this.chapters[ chapterData.id ] = chapterData
      });
      results[2]['data'].forEach( guildData => {
        this.guilds[ guildData.id ] = guildData
      });
    });

  }

}
