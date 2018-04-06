import { OCAHPPage } from './app.po';

describe('oca-hp App', () => {
  let page: OCAHPPage;

  beforeEach(() => {
    page = new OCAHPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
