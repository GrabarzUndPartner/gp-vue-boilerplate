import { createTestInAllResolutions } from '../utils/viewport';

createTestInAllResolutions((res) => {
  describe(`homepage`, function () {

    it('test the language switch', function () {
      cy.visit('/');
      cy.get('.language-switch').click();
    });
  });
});
