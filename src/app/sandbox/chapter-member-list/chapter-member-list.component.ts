import { Component, OnInit } from '@angular/core';
import { SandboxService } from '../sandbox.service';

@Component({
  moduleId: module.id,
  selector: 'app-chapter-member-list',
  templateUrl: 'chapter-member-list.component.html',
  styleUrls: ['chapter-member-list.component.css']
})
export class ChapterMemberListComponent implements OnInit {

  memberList;

  constructor( private sandboxService: SandboxService ) { }

  ngOnInit() {
    this.sandboxService.getChapterMembers().then( members => this.memberList = JSON.stringify( members, null, 2 ) );
  }

}
