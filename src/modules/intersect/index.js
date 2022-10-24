
import { resolve } from 'path';

export default function () {
  this.nuxt.options.alias[':intersect-module'] = __dirname;

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'intersect.client.js'
  });

  this.nuxt.options.build.bundleRenderer = this.nuxt.options.build.bundleRenderer || { directives: {} };
  this.nuxt.options.build.bundleRenderer.directives.intersect = (vnode) => {
    vnode.data.attrs = vnode.data.attrs || {};
    vnode.data.attrs['data-intersect'] = true;
  };
};
