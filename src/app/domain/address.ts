export class Address {
  street: string;
  city: string;

  constructor( addressData: any ) {
    this.street = addressData.street;
    this.city = addressData.city;
  }
}
