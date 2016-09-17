import { Person } from './person';


export class ChapterMember extends Person {
  id: number = null;
  chapterId: number = null;
  startDate: Date = null;
  endDate: Date = null;
  isActive: boolean = false;

  constructor( memberData?: any ) {
    super( memberData );
    if( memberData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( memberData[ props[p] ] ) {
          this[ props[p] ] = memberData[ props[p] ];
        }
      }
    }
  }
}
