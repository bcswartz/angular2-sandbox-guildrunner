import { Component, OnInit } from '@angular/core';
import { SandboxService } from '../sandbox.service';

@Component({
  moduleId: module.id,
  selector: 'app-chapter-list',
  templateUrl: 'chapter-list.component.html',
  styleUrls: ['chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  chapterList;

  constructor( private sandboxService: SandboxService ) { }

  ngOnInit() {
    this.sandboxService.getChapters().then( chapters => this.chapterList = JSON.stringify( chapters, null, 2 ) );
  }

}
