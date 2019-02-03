const fs = require('fs');
const path = require('path');
const VirtualModule = require('webpack-virtual-modules');
var chokidar = require('chokidar');
module.exports = class VirtualLang extends VirtualModule {
  constructor() {
    super();
  }

  apply (compiler) {
    super.apply(compiler);

    chokidar
      .watch(
        ['src/locales/**/*.json', '!src/locales/global', '!src/locales/*.json'],
        { persistent: false }
      )
      .on('all', (event, filePath) => mergeContent(compiler, this, filePath));
  }
};

function getFile (filePath) {
  return fs.readFileSync(path.resolve(filePath)).toString();
}

function readContent (compiler, filePath) {
  let target = getLangFilePath(filePath);
  if (
    compiler.inputFileSystem._virtualFiles &&
    compiler.inputFileSystem._virtualFiles[path.resolve(target)]
  ) {
    return JSON.parse(
      compiler.inputFileSystem._virtualFiles[path.resolve(target)].contents
    );
  }
  return {};
}

function writeContent (virtualContent, filePath, content) {
  virtualContent.writeModule(
    getLangFilePath(filePath),
    JSON.stringify(content)
  );
}

function mergeContent (compiler, virtualContent, filePath) {
  let lang = getLangByFilePath(filePath);
  let result = readContent(compiler, filePath);

  let file = getFile(path.resolve(filePath));
  let content = Object.assign(result, { [lang]: JSON.parse(file) });
  writeContent(virtualContent, filePath, content);
}

function getLangFilePath (filePath) {
  return filePath.replace(/(src\/locales\/)(\w+\/)+(\w+)(\.json)$/, function (
    match,
    p1,
    p2,
    p3
  ) {
    return `${p1}${p3}.lang`;
  });
}

function getLangByFilePath (filePath) {
  return /src\/locales\/(\w+)/.exec(filePath)[1];
}
