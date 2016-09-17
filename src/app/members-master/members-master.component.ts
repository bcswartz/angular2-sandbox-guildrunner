import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
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
  constructor( private memberService: MemberService ) { }

  ngOnInit() {
    this.memberService.getMembers().then( (httpResponse: HttpResponse) => {
      httpResponse.data.forEach( memberData => {
        this.members.push( new ChapterMember( memberData ) )
      })
    });
  }

}
