import { CoisWebPage } from './app.po';

describe('cois-web App', function() {
  let page: CoisWebPage;

  beforeEach(() => {
    page = new CoisWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
