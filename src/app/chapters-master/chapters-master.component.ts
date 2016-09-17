import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
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
  constructor( private chapterService: ChapterService ) { }

  ngOnInit() {
    this.chapterService.getChapters().then( (httpResponse: HttpResponse) => {
      httpResponse.data.forEach( chapterData => {
        this.chapters.push( new Chapter( chapterData ) )
      })
    });
  }

}
