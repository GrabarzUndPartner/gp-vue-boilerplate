// var expect = require('chai').expect;

const describeCrawler = require('./tools/crawler');
const htmllint = require('./tools/lint');
const {expect} = require('chai');

describeCrawler('de/about', function (url) {
  it('html validation', async () => {
    expect(await htmllint()).to.be.true;
  });
});
