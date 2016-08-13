import { version } from './db/version';
import { guilds } from './db/guilds';

export class InMemoryDataService {
  createDb() {

    return { version, guilds };
  }
}
