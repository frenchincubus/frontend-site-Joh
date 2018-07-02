import { SiteJohPage } from './app.po';

describe('site-joh App', () => {
  let page: SiteJohPage;

  beforeEach(() => {
    page = new SiteJohPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
