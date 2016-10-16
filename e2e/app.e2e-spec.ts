import { Angular2D3js4Page } from './app.po';

describe('angular2-d3js4 App', function() {
  let page: Angular2D3js4Page;

  beforeEach(() => {
    page = new Angular2D3js4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
