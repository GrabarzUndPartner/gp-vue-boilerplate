import config from '../globals/postcss/custom-media.json';

export default Object.keys(config).reduce(function(result, key) {
  result[key.replace('--', '')] = config[key];
  return result;
}, {});
