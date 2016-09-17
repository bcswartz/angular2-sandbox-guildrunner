import { Location } from './location';

export class Person {
  firstName: string = null;
  middleName: string = null;
  lastName: string = null;
  phone: string = null;
  altPhone: string = null;
  email: string = null;
  isUndead: boolean = false;
  residence: Location = new Location();

  constructor( personData?: any ) {
    if( personData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( personData[ props[p] ] ) {
          this[ props[p] ] = personData[ props[p] ];
        }
      }
      if( personData.location ) {
        this.residence = new Location( personData.location )
      }
    }
  }
}
