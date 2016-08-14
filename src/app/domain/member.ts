export class Member {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;

  constructor( memberData: any ) {
    this.id = memberData.id;
    this.firstName = memberData.firstName;
    this.lastName = memberData.lastName;
    this.birthdate = memberData.birthdate;
  }
}
