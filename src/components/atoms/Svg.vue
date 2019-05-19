
<script>
export default {
  functional: true,
  props: {
    src: {
      type: String,
      default () {
        return '';
      }
    },
    inline: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },

  render (createElement, context) {
    if (context.props.inline) {
      return createElement('span', {
        domProps: {
          innerHTML: require('@/assets/svg/' + context.props.src + '?inline')
        }
      });
    } else {
      const symbol = require('@/assets/svg/' + context.props.src).default;
      return createElement('span', [createElement('svg', {
        attrs: {
          version: '1.0',
          viewBox: symbol.viewBox
        }
      }, [createElement('use', {
        attrs: {
          href: `#${symbol.id}`
        }
      })])]);
    }

  }
};
</script>

<style lang="postcss">
svg {
  display: block;
}
</style>
