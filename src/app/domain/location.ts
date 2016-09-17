export class Location {
  address: string = null;
  address2: string = null;
  city: string = null;
  stateProvince: string = null;
  postalCode: string = null;

  constructor( locationData?: any ) {
    if( locationData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( locationData[ props[p] ] ) {
          this[ props[p] ] = locationData[ props[p] ];
        }
      }
    }
  }
}
