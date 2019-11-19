<template>
  <transition name="button-toggle">
    <button
      v-if="!toggleDirection"
      class="gp-page-menu-button"
      :class="{'js--selected': isMenuOpened}"
      :aria-label="label"
      @click="onClickMenu"
    >
      <i>
        <gp-atom-svg-inline src="icons/menu-close.svg" />
      </i>
    </button>
  </transition>
</template>

<script>
import gpAtomSvgInline from '@/components/atoms/SvgInline';
export default {
  components: { gpAtomSvgInline },
  props: {
    label: {
      type: String,
      default () { return 'Menu Open/Close'; }
    }
  },
  computed: {
    isMenuOpened () {
      return this.$store.getters['modal/isModelOpened']('menu');
    },
    toggleDirection: function () {
      return this.$store.getters['layout/toggleDirection'] || false;
    }
  },
  methods: {
    onClickMenu () {
      this.$store.dispatch('modal/toggleModal', {
        name: 'menu'
      });
    }
  }
};
</script>

<style lang="postcss">
.gp-page-menu-button {
  position: fixed;
  bottom: 10vh;
  left: calc(50% - (48px / 2));
  z-index: 1001;
  box-sizing: border-box;
  display: block;
  width: calc(48 / 375 * 100vw);
  padding: 12px;
  cursor: pointer;
  user-select: none;
  background: rgba(255, 255, 255, 0.6);
  border: none;
  appearance: none;
  border-radius: 50%;
  outline: none;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-tap-highlight-color: transparent;

  @media (--xs) {
    width: 48px;
  }

  @media (--md) {
    bottom: 80px;
  }

  & svg {
    display: block;
    width: 100%;
  }

  & i {
    position: relative;
    display: block;

    &::before {
      display: block;
      padding-top: 100%;
      content: "";
    }

    & > * {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  & svg g {
    transition: transform 0.3s linear, opacity 0.3s linear;
    transform-origin: center center;

    &:last-child {
      opacity: 0;
      transition: transform 0.15s linear, opacity 0.15s linear;
      transform: scale(0.4);
    }
  }

  &.js--selected {
    background: rgba(0, 0, 0, 0.5);

    & svg {
      fill: white;

      & g {
        &:first-child {
          opacity: 0;
          transition: transform 0.15s linear, opacity 0.15s linear;
          transform: scale(0.4);
        }

        &:last-child {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
}

.button-toggle-enter-active,
.button-toggle-leave-active {
  transition: transform 0.3s linear, opacity 0.3s linear;
}

.button-toggle-enter,
.button-toggle-leave-to {
  opacity: 0;
  transition: transform 0.15s linear, opacity 0.15s linear;
  transform: scale(0.4);
}
</style>
