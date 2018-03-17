const page = require('./page');
const baseUrl = require('../wdio/wdio.conf').config.baseUrl;

const crawlerSet = new Set();
const setIter = crawlerSet.values();

module.exports = (url, beforeScreenshot) => {
  crawlerSet.add(url);
  crawlNextPage(setIter.next(), beforeScreenshot);
};

function crawlNextPage (next, beforeScreenshot = () => {}) {
  if (!next.done) {
    let url = next.value;
    describe('open page: ' + url, function () {
      prepareTest(url, beforeScreenshot);
      // TODO: decision for coding standard - version A or B
      // version A
      it('collect urls', () => collectLinks());
      // version B
      it(...screenshotPage(url, beforeScreenshot));
    });
  }
}

function prepareTest (url, beforeScreenshot) {
  page.open(url);
  beforeScreenshot(url);
}

function collectLinks () {
  page.getLinks().forEach(function (link) {
    crawlerSet.add(link.getAttribute('href').replace(baseUrl, ''));
  });
}

function screenshotPage (url, beforeScreenshot) {
  return [
    'screenshot',
    function () {
      page.saveDocumentScreenshot(url.replace(/\//g, '_'));
      crawlNextPage(setIter.next(), beforeScreenshot);
    }
  ];
}
