//TODO: make a db folder and import data collections from there
export class InMemoryDataService {
  createDb() {
    let version = [
      {id: 1, name: '0.0.1'}
    ];

    return { version };
  }


}
