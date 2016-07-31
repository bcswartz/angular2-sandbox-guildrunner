import { GuildrunnerPage } from './app.po';

describe('guildrunner App', function() {
  let page: GuildrunnerPage;

  beforeEach(() => {
    page = new GuildrunnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('GuildRunner');
  });
});
