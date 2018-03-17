var page = require('./page');
var baseUrl = require('../wdio/wdio.conf').config.baseUrl;
var mapToCrawl = new Map();
// var setToCrawl = new Set();

module.exports = function crawlPage (url, beforeScreenshot = () => {}) {
  describe('open page: ' + url, function () {
    page.open(url);
    beforeScreenshot(url);
    it('do screenshot', function () {
      page.saveDocumentScreenshot(url.replace(/\//g, '_'));
      mapToCrawl.set(url, true);
      collectLinks();
      let result = getNextUrlToCrawl();
      if (result) {
        crawlPage(result, beforeScreenshot);
      }
    });
  });
};

function collectLinks () {
  page.getLinks().forEach(function (link) {
    let url = link.getAttribute('href').replace(baseUrl, '');
    if (!mapToCrawl.has(url)) {
      mapToCrawl.set(url, false);
    }
  });
}

function getNextUrlToCrawl () {
  return (Array.from(mapToCrawl).find((item) => {
    return item[1] === false;
  }) || [])[0];
}
