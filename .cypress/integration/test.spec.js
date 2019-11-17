import { createTestInAllResolutions } from '../utils/viewport';

createTestInAllResolutions((res) => {
  describe(`homepage`, function () {

    it('menu button', function () {
      cy.visit('/');
      cy.get('.gp-page-menu-button').first().click();
    });

    it('language switch', function () {
      cy.get('.gp-layout-modal.js--opened').then(() => {
        cy.get('.language-switch').first().click();
      })
    });

  });
});
