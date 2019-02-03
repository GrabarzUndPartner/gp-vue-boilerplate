const resolutions = [
  'macbook-15',
  'macbook-13',
  'macbook-11',
  'ipad-2',
  'ipad-mini',
  'iphone-6+',
  'iphone-6',
  'iphone-5'
];

describe('My First Test', function () {
  resolutions.forEach((res) => {
    context(`${res} resolution`, function () {
      beforeEach(function () {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(res);
      });

      it('Visits the Kitchen Sink', function () {
        cy.visit('/');
        cy.get('.language-switch').click();
      });
    });
  });

});
