const fs = require('fs');
const path = require('path');
const VirtualModule = require('webpack-virtual-modules');
const chokidar = require('chokidar');
module.exports = class VirtualLang extends VirtualModule {
  apply (compiler) {
    super.apply(compiler);

    chokidar
      .watch(
        [
          'src/locales/**/*.json', '!src/locales/global', '!src/locales/*.json'
        ],
        { persistent: false }
      )
      .on('all', (event, filePath) => mergeContent(compiler, this, filePath));
  }
};

function getFile (filePath) {
  return fs.readFileSync(path.resolve(filePath)).toString();
}

function readContent (compiler, filePath) {
  const target = getLangFilePath(filePath);
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
  const lang = getLangByFilePath(filePath);
  const result = readContent(compiler, filePath);

  const file = getFile(path.resolve(filePath));
  const content = Object.assign(result, { [lang]: JSON.parse(file) });
  writeContent(virtualContent, filePath, content);
}

function getLangFilePath (filePath) {
  filePath = filePath.replace(/\\/g, '/');
  return filePath.replace(/(src\/locales\/\w+\/)([\w/?]+)(\.json)$/, function (
    match,
    p1,
    p2
  ) {
    return `src/locales/${p2}.lang`;
  });
}

function getLangByFilePath (filePath) {
  filePath = filePath.replace(/\\/g, '/');
  return /src\/locales\/(\w+)/.exec(filePath)[1];
}
