<template>
  <gp-layout-default-container
    class="gp-page-header"
    :class="styleClasses"
    tag="header"
  >
    <template slot="container">
      <div class="logo">
        Logo
      </div>
    </template>
  </gp-layout-default-container>
</template>

<script>
import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
export default {
  components: { gpLayoutDefaultContainer },
  props: {
    sticky: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    styleClasses () {
      return { 'js--toggle': this.toggleDirection, 'sticky': this.sticky };
    },
    isMenuOpened () {
      return this.$store.getters['layout/isModelOpened']('menu');
    },
    toggleDirection: function () {
      return this.$store.getters['layout/toggleDirection'];
    }
  }
};
</script>

<style lang="postcss" scoped>
.gp-page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  transition: transform 0.2s linear, opacity 0.2s linear;

  &.sticky {
    position: sticky;
  }

  &.js--toggle {
    opacity: 0;
    transform: translateY(-60%);
  }

  & .logo {
    padding: 10px 0;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
