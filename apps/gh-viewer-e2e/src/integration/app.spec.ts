import { getGreeting } from '../support/app.po';

describe('gh-viewer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to gh-viewer!');
  });
});
