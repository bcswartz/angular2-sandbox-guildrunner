import { GuildrunnerPage } from './app.po';

describe('guildrunner App', function() {
  let page: GuildrunnerPage;

  beforeEach(() => {
    page = new GuildrunnerPage();
  });

  it('should display main header text', () => {
    page.navigateTo();
    expect(page.getMainHeaderText()).toEqual('GuildRunner');
  });

  it('should display the version number preceded by a label', () => {
    page.navigateTo();
    expect(page.getVersionText()).toEqual('Version: 0.0.1');
  });
});
