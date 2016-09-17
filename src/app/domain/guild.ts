export class Guild {
  id: number = null;
  name: string = null;
  email: string = null;
  incorporationYear: number = null;

  expenses: number = 0;
  revenue: number = 0;
  profit: number = 0;

  constructor( guildData?: any  ) {
    if( guildData ) {
      let props = Object.keys( this );
      for( let p in props ) {
        if( guildData[ props[p] ] ) {
          this[ props[p] ] = guildData[ props[p] ];
        }
      }
      this.profit = this.calculateProfit();
    }
  }

  calculateProfit() {
    return this.revenue - this.expenses;
  }

}
