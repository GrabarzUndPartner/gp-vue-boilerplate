const path = require('path')

module.exports = (config, rootDir, srcDir, dirname) => {
  Object.assign(config.resolve.alias, {
    '~~': path.resolve(dirname, rootDir),
    '~': path.resolve(dirname, srcDir),
    '@@': path.resolve(dirname, rootDir),
    '@': path.resolve(dirname, srcDir)
  });
}
