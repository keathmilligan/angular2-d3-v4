import { Angular2D3V4Page } from './app.po';

describe('angular2-d3-v4 App', function() {
  let page: Angular2D3V4Page;

  beforeEach(() => {
    page = new Angular2D3V4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
