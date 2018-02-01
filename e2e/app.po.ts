import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getStartMessage() {
    return element(by.css('h1')).getText();
  }

  fillInput(id: string, value: string) {
    element(by.id(id)).sendKeys(value);
  }

  getWelcomeMessage() {
    return element(by.id('welcome-msg')).getText();
  }

  waitForAngular() {
    browser.waitForAngular();
  }

  clickButton(text: string) {
    return element(by.partialButtonText(text)).click();
  }
}
