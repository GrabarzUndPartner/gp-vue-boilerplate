import { createTestInAllResolutions } from '../utils/viewport';

createTestInAllResolutions((res) => {
  describe(`homepage`, function () {

    it('menu button', function () {
      cy.visit('/');
      cy.get('.page-menu-button').first().click();
    });

    // it('language switch', function () {
    //   cy.visit('/');
    //   cy.get('.page-menu-button').first().click();
    //   cy.get('.layout-modal').should('have.class', 'js--opened').then(() => {
    //     cy.get('.language-switch').first().click();
    //   });
    // });

  });
});
