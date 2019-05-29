
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
    let r = require.context('@/assets/svg/?include', true, /\.svg$/, 'lazy-once');

    this.item = {
      asyncComponent: () => {
        return r('./' + this.src).then((result) => {
          return {
            render (create) {
              return create('span', {
                domProps: {
                  innerHTML: result.default
                }
              });
            }
          };
        });
      }
    };
  }
};
</script>

<style lang="postcss">
svg {
  display: block;
}
</style>
