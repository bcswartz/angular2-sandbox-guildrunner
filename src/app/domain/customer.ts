import { Person } from './person';

export class Customer extends Person {
  id: number = null;
  rating: number = null;
  isBanned: boolean = false;

  constructor( customerData?: any ) {
    super( customerData );
    if( customerData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( customerData[ props[p] ] ) {
          this[ props[p] ] = customerData[ props[p] ];
        }
      }
    }
  }
}
