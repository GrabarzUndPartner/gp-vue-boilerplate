const mochaHtmllint = require('mocha-htmllint');

mochaHtmllint([
  './dist/**/*.html',
  '!./dist/200.html'
], {
  'indent-width': 2,
  'attr-name-style': 'dash',
  'class-style': false,
  'id-class-style': false,
  'tag-bans': ['b', 'i'],
  'attr-bans': ['align', 'background', 'bgcolor', 'border', 'frameborder', 'longdesc', 'marginwidth', 'marginheight', 'scrolling', 'width'],
  'attr-req-value': false
});
