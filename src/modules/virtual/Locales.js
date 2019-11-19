
const VirtualModule = require('webpack-virtual-modules');
const glob = require('glob');
const nodeify = require('nodeify');
var chokidar = require('chokidar');
var path = require('path');

const fs = require('fs');

const LOCALES_PATH = 'src/locales';

module.exports = class VirtualPageContent extends VirtualModule {
  constructor() {
    super();
  }

  apply (compiler) {
    super.apply(compiler);

    if (process.env.NODE_ENV !== 'production') {
      const onChange = filePath => {
        getPageContent(filePath.replace(LOCALES_PATH, ''))
          .then(page => writePageModule(page))
          .catch(e => { throw e; });
      };
      chokidar
        .watch(
          [
            LOCALES_PATH + '/**/*.json'
          ],
          {
            ignoreInitial: true
          }
        )
        .on('change', onChange)
        .on('add', onChange)
        .on('unlink', filePath => {
          const page = getPageMeta(filePath.replace(LOCALES_PATH, ''));
          page.content = null;
          writePageModule(page);
        });
    }

    compiler.hooks.beforeCompile.tapAsync('PageContentPlugin', onBeforeCompile);
    compiler.hooks.compilation.tap('PageContentPlugin', onCompilation.bind(this));
  }
};

function onBeforeCompile (params, callback) {
  if (!(FIELD_PAGES in params)) {
    nodeify(getPages().then(pages => setPagesFromParams(params, pages)).catch(e => { throw e; }), callback);
  }
}

let isCompiled = false;
function onCompilation (compilation, params) {
  if (!isCompiled) {
    isCompiled = true;
    const pages = getPagesFromParams(params);
    pages.forEach(page => {
      writePageModule(this, page);
    });
  }
}

function writePageModule (virtualContent, page) {
  virtualContent.writeModule(
    getVirtualFilePath(page),
    page.content
  );
}

const FIELD_PAGES = 'PageContentPlugin_pages';

function getPagesFromParams (params) {
  return params[String(FIELD_PAGES)];
}
function setPagesFromParams (params, pages) {
  params[String(FIELD_PAGES)] = pages;
  return pages;
}

const MODULE_PATH = 'src/locales';

function getVirtualFilePath (page) {
  return path.join(MODULE_PATH, page.locale, page.path);
}

// ###################################
/**
 * Create pages list
 * […, {lokale: 'en', path: 'en/index', content: 'Page content…'} ,…]
 * @override
 */
function getPages () {
  return new Promise(resolve => {
    glob(path.resolve(LOCALES_PATH + '/**/*.json'), (e, files) => {
      const rootPath = path.resolve(process.cwd(), LOCALES_PATH, '');
      files = files.map(file => getPageContent(file.replace(rootPath, '')));
      return resolve(Promise.all(files));
    });
  });
}

function getPageMeta (filePath) {
  var matches = filePath.match(/^[\\/\\](\w{2})[\\/\\](.*)/);
  const locale = matches[1], path = matches[2];
  return { locale, path };
}

function getPageContent (filePath) {
  const page = getPageMeta(filePath);
  return getFileContent(page.locale, page.path).then(content => {
    page.content = content;
    return page;
  });
}

function getFileContent (locale, filePath) {
  return new Promise(resolve => {
    fs.readFile(path.resolve(LOCALES_PATH, locale, filePath), 'utf8', function (err, content) {
      resolve(content);
    });
  });
}

