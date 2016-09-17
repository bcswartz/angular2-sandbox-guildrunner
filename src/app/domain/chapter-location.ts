import { Location } from './location';

export class ChapterLocation extends Location {
  entryPoints: number = null;
  floors: number = null;
  hasBasement: boolean = false;
  rooftopAccess: boolean = false;

  constructor( chapterLocationData?: any ) {
    super( chapterLocationData );
    if( chapterLocationData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( chapterLocationData[ props[p] ] ) {
          this[ props[p] ] = chapterLocationData[ props[p] ];
        }
      }
    }
  }
}
