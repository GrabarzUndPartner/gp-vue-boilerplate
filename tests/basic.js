var expect = require('chai').expect;
var page = require('./page/default');

describe('Mocha Spec Sync example', function () {
  page.open('de/about');
  it('check Headline', function () {
    expect(page.getTextOfElement('h1')).to.equals('nachricht 12');
  });
});
