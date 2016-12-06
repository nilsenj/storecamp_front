import { StorecampFrontPage } from './app.po';

describe('storecamp-front App', function() {
  let page: StorecampFrontPage;

  beforeEach(() => {
    page = new StorecampFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
