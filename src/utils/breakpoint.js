import config from '../globals/postcss/custom-media.json';

const configMap = new Map(Object.entries(config));

export default (() => {
  const result = new Map();
  configMap.forEach((value, key) => {
    result.set(key.replace('--', ''), value);
  });
  return result;
})();
