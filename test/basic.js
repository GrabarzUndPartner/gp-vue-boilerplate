// var expect = require('chai').expect;
var describeCrawler = require('./tools/crawler');

describeCrawler('de/about', function () {
  it('test 123', function (url) {
    console.log('HELLO', url);
  });
});
