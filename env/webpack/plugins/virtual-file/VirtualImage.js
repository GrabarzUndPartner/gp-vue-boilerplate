const fs = require('fs');
const path = require('path');
const VirtualModule = require('webpack-virtual-modules');
// var debug = require('debug')('webpack-virtual-modules');

module.exports = class VirtualLang extends VirtualModule {
  constructor(regex, options = {}) {
    super();
    this.regex = regex;
    this.options = options;
  }

  apply(compiler) {
    super.apply(compiler);

    let self = this;
    var beforeResolversHook = function(resource) {
      if (self.regex && self.regex.test(resource.request)) {
        // debug(self.regex, resource.request);
        const { path, file } = getContent(
          resource,
          self.regex,
          self.options.redirectTo
        );
        self.writeModule(path, file);
      }
    };

    compiler.hooks.normalModuleFactory.tap('VirtualModulesPlugin', nmf => {
      nmf.hooks.beforeResolve.tap('VirtualModulesPlugin', beforeResolversHook);
    });
  }
};

function getContent(resource, regex, redirectTo = redirectDefault) {
  let url = resource.request.replace(/^@/, '.');

  return {
    path: 'src/' + url,
    file: getFile('src/' + redirectTo(url, regex))
  };
}

function getFile(filePath) {
  try {
    // debug(path.resolve(filePath));
    return fs.readFileSync(path.resolve(filePath));
  } catch (e) {
    return fs.readFileSync(path.resolve('src/assets/error.jpg'));
  }
}

function redirectDefault(url) {
  return url;
}
