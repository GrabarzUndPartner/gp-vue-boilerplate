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

export function createTestInAllResolutions (fn) {
  resolutions.forEach((res) => {
    context(`${res} resolution`, function () {
      beforeEach(function () {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(res);
      });
      fn(res);
    });
  });
}
