module.exports = (config) => {
  let urlLoader = config.module.rules.find(
    rule => {
      return (rule.loader && rule.loader.match(/file-loader/gi)) || (rule.use && rule.use.find(item => item.loader === 'file-loader'))
    }
  );
  urlLoader.test = /(gif|eot|otf|ttf|woff|woff2|cur|ani)$/;
}
