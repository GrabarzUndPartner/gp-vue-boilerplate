class Page {
  open (path) {
    global.browser.url('/' + path);
  }

  getElement (el) {
    return global.browser.element(el);
  }

  getTextOfElement (el) {
    return global.browser.element(el).getText();
  }

  getLinks () {
    return global.browser.elements('a').value;
  }

  saveDocumentScreenshot (filename) {
    global.browser.saveDocumentScreenshot('./output/' + filename + '.png');
  }
}

module.exports = new Page();
