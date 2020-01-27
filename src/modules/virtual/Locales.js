
const fs = require('fs');
const VirtualModule = require('webpack-virtual-modules');
const glob = require('glob');
const nodeify = require('nodeify');
const chokidar = require('chokidar');
const path = require('upath');

const LOCALES_PATH = 'src/locales';

module.exports = class VirtualPageContent extends VirtualModule {
  apply (compiler) {
    super.apply(compiler);

    if (process.env.NODE_ENV !== 'production') {
      const onChange = (filePath) => {
        getPageContent(filePath.replace(LOCALES_PATH, ''))
          .then(page => writePageModule(this, page))
          .catch((e) => { throw e; });
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
        .on('unlink', (filePath) => {
          const page = getPageMeta(filePath.replace(LOCALES_PATH, ''));
          page.content = null;
          writePageModule(this, page);
        });
    }

    compiler.hooks.beforeCompile.tapAsync('PageContentPlugin', onBeforeCompile);
    compiler.hooks.compilation.tap('PageContentPlugin', onCompilation.bind(this));
  }
};

function onBeforeCompile (params, callback) {
  if (!(FIELD_PAGES in params)) {
    nodeify(getPages().then(pages => setPagesFromParams(params, pages)).catch((e) => { throw e; }), callback);
  }
}

function onCompilation (compilation, params) {
  const pages = getPagesFromParams(params);
  pages.forEach((page) => {
    writePageModule(this, page);
  });
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

const MODULE_PATH = 'src/virtual-locales';

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
  return new Promise((resolve) => {
    glob(path.resolve(LOCALES_PATH + '/**/*.json'), (e, files) => {
      const rootPath = path.resolve(process.cwd(), LOCALES_PATH, '');
      files = files.map(file => getPageContent(path.normalize(file).replace(rootPath, '')));
      return resolve(Promise.all(files));
    });
  });
}

function getPageMeta (filePath) {
  const matches = filePath.match(/^\/(\w{2})\/(.*)/);
  const locale = matches[1]; const path = matches[2];
  return { locale, path };
}

function getPageContent (filePath) {
  const page = getPageMeta(filePath);
  return getFileContent(page.locale, page.path).then((content) => {
    page.content = content;
    return page;
  });
}

function getFileContent (locale, filePath) {
  return new Promise((resolve) => {
    fs.readFile(path.resolve(LOCALES_PATH, locale, filePath), 'utf8', function (err, content) {
      if (err) {
        throw err;
      }
      resolve(content);
    });
  });
}

