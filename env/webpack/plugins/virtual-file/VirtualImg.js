const fs = require('fs');
const path = require('path');
const VirtualModule = require('webpack-virtual-modules');
var chokidar = require('chokidar');
var debug = require('debug')('webpack-virtual-modules');

module.exports = class VirtualImg extends VirtualModule {
  constructor() {
    super();
  }

  apply(compiler) {
    super.apply(compiler);

    chokidar
      .watch(['src/assets/**/*.jpg'], {})
      .on('all', (event, filePath) => convertFile(compiler, this, filePath));
  }
};

function convertFile(compiler, virtualContent, filePath) {
  let file = getFile(filePath);
  writeFile(virtualContent, filePath, file);
}

function getFile(filePath) {
  // debug('HELLO', filePath);
  // try {
  return fs.readFileSync(path.resolve(filePath));
  // } catch (e) {
  //   return JSON.stringify({});
  // }
}

function writeFile(virtualContent, filePath, content) {
  debug(filePath, content);
  virtualContent.writeModule(filePath + '.webp', content);
}
