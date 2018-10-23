const fs = require('fs');
const path = require('path');
const VirtualModule = require('webpack-virtual-modules');
var chokidar = require('chokidar');

module.exports = class VirtualLang extends VirtualModule {
  constructor(/*regex, locales*/) {
    super();
    // super(regex, resource => {
    //   const filePath = getFilePath(resource.request);
    //   let langFilePaths = getLanguageFilePaths(filePath, locales);

    //   return {
    //     path: filePath,
    //     file: generateContent(langFilePaths)
    //   };
    // });
  }

  apply(compiler) {
    super.apply(compiler);

    chokidar
      .watch(
        ['src/locales/**/*.json', '!src/locales/global', '!src/locales/*.json'],
        {}
      )
      .on('all', (event, filePath) => mergeContent(compiler, this, filePath));
  }
};

// function generateContent(filePaths) {
//   return JSON.stringify(
//     Object.assign(
//       ...filePaths.map(file => {
//         return { [file.lang]: JSON.parse(getFile(file.path)) };
//       })
//     )
//   );
// }

function getFile(filePath) {
  // try {
  return fs.readFileSync(path.resolve(filePath)).toString();
  // } catch (e) {
  //   return JSON.stringify({});
  // }
}

function readContent(compiler, filePath) {
  let target = getLangFilePath(filePath);
  if (compiler.inputFileSystem._virtualFiles) {
    return JSON.parse(
      compiler.inputFileSystem._virtualFiles[path.resolve(target)].contents
    );
  }
  return {};
}

function writeContent(virtualContent, filePath, content) {
  // debug('HUCH', getLangFilePath(filePath), content);
  virtualContent.writeModule(
    getLangFilePath(filePath),
    JSON.stringify(content)
  );
}

function mergeContent(compiler, virtualContent, filePath) {
  let lang = getLangByFilePath(filePath);
  let result = readContent(compiler, filePath);

  let file = getFile(path.resolve(filePath));
  let content = Object.assign(result, { [lang]: JSON.parse(file) });
  writeContent(virtualContent, filePath, content);
}

// function getFilePath(request) {
//   return request.replace(/(@|~)(.+)\?.+/, (match, p1, p2) => {
//     return 'src' + p2;
//   });
// }

function getLangFilePath(filePath) {
  return filePath.replace(/(src\/locales\/)(\w+\/)+(\w+)(\.json)$/, function(
    match,
    p1,
    p2,
    p3
  ) {
    return `${p1}${p3}.lang`;
  });
}

function getLangByFilePath(filePath) {
  return /src\/locales\/(\w+)/.exec(filePath)[1];
}

// function getLanguageFilePaths(filePath, locales) {
//   return locales.map(local => {
//     return {
//       lang: local.code,
//       path: filePath.replace(/(.+locales\/)(.+\.)(lang)/, (match, p1, p2) => {
//         return path.resolve(`${p1}${local.code}/${p2}json`);
//       })
//     };
//   });
// }
