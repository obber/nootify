import { NootifyPage } from './app.po';

describe('nootify App', function() {
  let page: NootifyPage;

  beforeEach(() => {
    page = new NootifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
