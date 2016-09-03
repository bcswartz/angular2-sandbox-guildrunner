import { Address } from './address';
import { Member } from './member';

export class Guild {
  id: number;
  name: string;
  email: string;
  incorporationYear: number;

  expenses: number;
  revenue: number;
  profit: number;

  address: Address;
  members: Member[] = [];

  constructor( guildData?: any  ) {
    if( guildData ) {
      this.id = guildData.id ? guildData.id : null ;
      this.name = guildData.name ? guildData.name : null ;
      this.email = guildData.email ? guildData.email : null;
      this.incorporationYear = guildData.incorporationYear ? guildData.incorporationYear : null;

      this.expenses = guildData.expenses ? guildData.expenses : 0 ;
      this.revenue = guildData.revenue ? guildData.revenue : 0 ;

      this.profit = this.calculateProfit();

      this.address = guildData.address ? new Address( guildData.address ) : null;

      if( guildData.members ) {
        guildData.members.forEach( member => {
          this.members.push( new Member( member ) );
        }, this );
      }
    }

  }

  calculateProfit() {
    return this.revenue - this.expenses;
  }

}
