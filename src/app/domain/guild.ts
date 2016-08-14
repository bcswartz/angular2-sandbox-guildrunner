import { Address } from './address';
import { Member } from './member';

export class Guild {
  id: number;
  name: string;
  expenses: number;
  revenue: number;
  profit: number;

  address: Address;
  members: Member[] = [];

  constructor( guildData:any ) {
    this.id = guildData.id;
    this.name = guildData.name;
    this.expenses = guildData.expenses;
    this.revenue = guildData.revenue;

    this.profit = this.calculateProfit();

    this.address = new Address( guildData.address );

    guildData.members.forEach( member => {
      this.members.push( new Member( member ) );
    }, this );

  }

  calculateProfit() {
    return this.revenue - this.expenses;
  }

}
