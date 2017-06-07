import { EviInterviewPage } from './app.po';

describe('evi-interview App', () => {
  let page: EviInterviewPage;

  beforeEach(() => {
    page = new EviInterviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
