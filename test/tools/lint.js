const htmllint = require('htmllint');
const htmllintMessages = require('htmllint/lib/messages');
const page = require('./page');
const chalk = require('chalk');
const stripAnsi = require('strip-ansi');
const textTable = require('text-table');

module.exports = function () {
  return new Promise(function (resolve, reject) {
    htmllint(page.getSource(), options, function (err, issues) {
      if (err) {
        reject(err);
      }

      if (issues && issues.length > 0) {
        let message = chalk.white.underline(`\ndid not pass htmllint rules\n`);
        message += issuesTable(issues);
        message += chalk.red.bold(`\n\n✖ ${issues.length} ${issues.length === 1 ? 'issue' : 'issues'}\n`);

        let error = new Error(message);
        delete error.stack; // Yeah, I know, but we don't care about the stack here.
        reject(error);
      }

      resolve(true);
    });
  });
};

function issuesTable (issues) {
  return textTable(
    issues.map(function (issue) {
      return [
        chalk.white(''),
        `line ${issue.line || 0}`,
        `column ${issue.column || 0}`,
        issue.code,
        chalk.cyan(htmllintMessages.renderIssue(issue) || JSON.stringify(issue.data)),
        chalk.white.bold(issue.rule)
      ];
    }),
    {
      align: ['', 'r', 'l'],
      stringLength: function (str) {
        return stripAnsi(str).length;
      }
    }
  );
}

var options = {
  'attr-bans': [
    'align',
    'background',
    'bgcolor',
    'border',
    'dynsrc',
    'frameborder',
    'longdesc',
    'lowsrc',
    'onclick',
    'ondblclick',
    'onload',
    'marginwidth',
    'marginheight',
    'scrolling',
    'width',
    'height'
  ],
  'attr-name-ignore-regex': false,
  'attr-name-style': 'dash',
  'attr-new-line': false,
  'attr-no-dup': true,
  'attr-no-unsafe-char': true,
  'attr-order': false,
  'attr-quote-style': 'double',
  'attr-req-value': false,
  'attr-validate': false,
  'class-no-dup': true,
  'class-style': false,
  'doctype-first': false,
  'doctype-html5': false,
  'fig-req-figcaption': true,
  'focusable-tabindex-style': false,
  'head-req-title': true,
  'head-valid-content-model': true,
  'href-style': false,
  'html-req-lang': true,
  'html-valid-content-model': false,
  'id-class-ignore-regex': false,
  'id-class-no-ad': true,
  'id-class-style': false,
  'id-no-dup': true,
  'img-req-alt': 'allownull',
  'img-req-src': false,
  'indent-style': 'spaces',
  'indent-width': 2,
  'indent-width-cont': true,
  'input-radio-req-name': true,
  'input-req-label': false,
  'label-req-for': false,
  'lang-style': 'case',
  'line-end-style': false,
  'line-max-len': false,
  'line-max-len-ignore-regex': '/href/g',
  'maxerr': false,
  'raw-ignore-regex': false,
  'spec-char-escape': false,
  'table-req-caption': false,
  'table-req-header': false,
  'tag-bans': [
    'b',
    'keygen'
  ],
  'tag-close': true,
  'tag-name-lowercase': true,
  'tag-name-match': true,
  'tag-self-close': 'always',
  'text-ignore-regex': false,
  'title-max-len': 80,
  'title-no-dup': true
};
