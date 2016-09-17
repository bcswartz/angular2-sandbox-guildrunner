import { version } from './db/version';
import { guilds } from './db/guilds';
import { defenseMeasures } from './db/defense-measures';
import { chapters } from './db/chapters';
import { chapterMembers } from './db/chapter-members';

export class InMemoryDataService {
  createDb() {

    return {
      version,
      guilds,
      defenseMeasures,
      chapters,
      chapterMembers
    };
  }
}
