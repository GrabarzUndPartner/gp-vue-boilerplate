
<template>
  <component :is="asyncComponent" />
</template>

<script>

const context = require.context('@/assets/svg/.?vue-template', true,
  /\.svg$/, 'lazy');

const svgs = context.keys().reduce((result, key) => {
  const name = key.replace(/^\.\//, '');
  result[String(name)] = () => context(key);
  return result;
}, {});

export default {
  props: {
    src: {
      type: String,
      default () {
        return '';
      }
    }
  },
  computed: {
    asyncComponent () {
      return svgs[String(this.src)];
    }
  }
};

</script>

<style lang="postcss">
svg {
  display: block;
}
</style>
