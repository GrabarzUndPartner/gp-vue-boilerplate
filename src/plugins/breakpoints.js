import Vue from 'vue';
import config from '../globals/postcss/custom-media.json';

Vue.prototype.breakpoints = Object.keys(config).reduce(function(result, key) {
  result[key.replace('--', '')] = config[key];
  return result;
}, {});
