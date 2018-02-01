import { AppPage } from './app.po';

describe('Websocket App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display the welcome screen', () => {
    page.navigateTo('/');
    expect(page.getStartMessage()).toEqual('WebSocket');
  });

  it('Should display the chat', () => {
    page.navigateTo('/');
    page.fillInput('author', 'Juan');
    page.clickButton('Start');
    page.waitForAngular();
    expect(page.getWelcomeMessage()).toEqual('Welcome Juan!');
  });
});
