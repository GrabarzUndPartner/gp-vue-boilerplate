
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
