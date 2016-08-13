import { Address } from './address';
import { Member } from './member';

export class Guild {
  id: number;
  name: string;
  expenses: number;
  revenue: number;

  address: Address;
  members: Member[];

}
