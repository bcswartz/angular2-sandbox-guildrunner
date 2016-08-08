export class GuildrunnerPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  getVersionText() {
    return element(by.css('app-root app-version p')).getText();
  }
}
