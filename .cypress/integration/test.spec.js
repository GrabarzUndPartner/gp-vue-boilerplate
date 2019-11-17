import { createTestInAllResolutions } from '../utils/viewport';

createTestInAllResolutions((res) => {
  describe(`homepage`, function () {



    it('test the menu button and language switch', function () {
      cy.visit('/');
      cy.get('.gp-page-menu-button').first().click();
      cy.get('.language-switch').first().click({ timeout: 1000 });

    });


  });
});
