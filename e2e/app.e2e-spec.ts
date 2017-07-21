import { DonDAngularPage } from './app.po';

describe('don-d-angular App', () => {
  let page: DonDAngularPage;

  beforeEach(() => {
    page = new DonDAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
