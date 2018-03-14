class Page {
  open (path) {
    global.browser.url('/' + path);
  }

  getTextOfElement (el) {
    return global.browser.element(el).getText();
  }
}

module.exports = new Page();
