import { ChapterLocation } from './chapter-location';

export class Chapter {
  id: number = null;
  guildId: number = null;
  name: string = null;
  location: ChapterLocation = new ChapterLocation();
  headChapter: boolean = false;
  founded: Date = null;
  defenses: Number[] = [];

  constructor( chapterData?: any ) {
    if( chapterData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( chapterData[ props[p] ] ) {
          if( props[p] == 'location' ) {
            this.location = new ChapterLocation( chapterData.location )
          } else {
            this[ props[p] ] = chapterData[ props[p] ];
          }
        }
      }
    }
  }

}
