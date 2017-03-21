import { TeslaBatteryPage } from './app.po';

describe('tesla-battery App', () => {
  let page: TeslaBatteryPage;

  beforeEach(() => {
    page = new TeslaBatteryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
