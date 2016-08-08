import { version } from './db/version';

export class InMemoryDataService {
  createDb() {
    return { version };
  }
}
