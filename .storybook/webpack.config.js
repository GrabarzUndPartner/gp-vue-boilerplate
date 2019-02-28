
const nuxtConf = require('../env/nuxt.config')

module.exports = (sBaseConfig, configType, defaultConfig) => {
  const srcDir = `../${nuxtConf.srcDir || ''}`
  const rootDir = `../${nuxtConf.rootDir || ''}`

  require('./webpack/fix/alias')(defaultConfig, rootDir, srcDir, __dirname);
  require('./webpack/fix/postcss')(defaultConfig);
  require('./webpack/fix/image')(defaultConfig);
  require('./webpack/image')(defaultConfig, nuxtConf.dev);
  require('./webpack/webp')(defaultConfig, nuxtConf.dev);
  require('./webpack/svg')(defaultConfig);


  return defaultConfig
}
