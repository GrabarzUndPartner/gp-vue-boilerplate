
<template>
  <component :is="item.asyncComponent" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default () {
        return '';
      }
    }
  },

  data () {
    return {
      item: null
    };
  },

  created () {
    this.item = {
      asyncComponent: () => {
        return import(/* webpackMode: "lazy-once" */'@/assets/svg/' + this.src + '?include').then((result) => {
          return {
            render (create) {
              let node = getSVGNodeFromString(result.default);
              return create('svg', {
                attrs: Array.from(node.attributes).reduce((result, item) => {
                  result[item.name] = item.value;
                  return result;
                }, {}),
                domProps: {
                  innerHTML: node.innerHTML
                }
              });
            }
          };
        });
      }
    };
  }
};

function getSVGNodeFromString (html) {
  let DOMParser = global.DOMParser;
  if (process.server) {
    DOMParser = require('dom-parser');
  }
  let dom = new DOMParser().parseFromString(html, 'image/svg+xml');
  return dom.getElementsByTagName('svg')[0];
}
</script>

<style lang="postcss">
svg {
  display: block;
}
</style>
