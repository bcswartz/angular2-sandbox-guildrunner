import { ChapterLocation } from './chapter-location';
import { Validatable, PropertyValidations } from '../vadacl/interfaces';

export class Chapter implements Validatable{
  id: number = null;
  guildId: number = null;
  name: string = null;
  location: ChapterLocation = new ChapterLocation();
  headChapter: boolean = false;
  founded: Date = null;
  defenses: Number[] = [];

  validations: { [ index: string ] : PropertyValidations } = {
    name: {
      required: { message: 'The name is required.'},
      pattern: { pattern: '[a-zA-Z]+', message: 'The chapter name cannot contain numbers or spaces.' },
    },
    guild: { required: { } },
    headChapter: { required: { message: 'Must denote if this chapter is the head chapter.' } },
  };

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
