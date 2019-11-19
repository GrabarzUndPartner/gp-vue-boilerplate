<template>
  <transition name="modal-toggle">
    <gp-layout-default-container
      v-show="opened"
      class="gp-layout-modal"
      :class="styleClasses"
      v-bind="options"
    >
      <template v-slot:container>
        <div class="lost-flex-container">
          <button
            v-if="closeButton"
            class="close"
            @click="close"
          >
            <i>
              <gp-svg-inline src="icons/close.svg" />
            </i>
          </button>
          <div class="content">
            <slot />
          </div>
        </div>
      </template>
    </gp-layout-default-container>
  </transition>
</template>

<script>
import gpLayoutDefaultContainer from '@/components/layouts/DefaultContainer';
export default {
  components: { gpLayoutDefaultContainer },
  props: {
    options: {
      type: Object,
      default () {
        return {
          opened: false
        };
      }
    },

    name: {
      type: String,
      required: true
    },
    closeButton: {
      type: Boolean,
      default () {
        return false;
      }
    },

    onOpen: {
      type: Function,
      default () {
        return null;
      }
    },
    onClose: {
      type: Function,
      default () {
        return null;
      }
    }

  },
  computed: {
    styleClasses: function () {
      return {
        'js--opened': this.opened
      };
    },
    opened: function () {
      return this.$store.getters['modal/isModelOpened']('menu');
    }
  },

  watch: {
    opened (opened) {
      if (opened) {
        if (this.onOpen) {
          this.onOpen();
        }
      } else {
        if (this.onClose) {
          this.onClose();
        }
      }
    }
  },

  mounted () {
    this.$router.afterEach(this.onRouterAfterEach);
    this.$store.dispatch('modal/registerModal', { name: this.name, opened: this.options.opened });
  },
  destroyed () {
    this.$store.dispatch('modal/unregisterModal', this);
  },
  methods: {
    close () {
      this.$store.dispatch('modal/toggleModal', {
        name: this.name, flag: false
      });
    },

    // events

    onRouterAfterEach () {
      this.close();
    }

  }
};
</script>

<style lang="postcss">
.gp-layout-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: var(--color-white);

  & .lost-flex-container {
    position: relative;
    height: 100%;
  }

  & .content {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
  }

  & .close {
    position: absolute;
    top: calc(30 / 375 * 100vw);
    right: calc(15 / 375 * 100vw);
    display: block;
    float: left;
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: none;
    appearance: none;

    & i {
      display: block;
      width: calc(20 / 375 * 100vw);
    }

    @media (--xs) {
      top: 30px;
      right: 15px;

      & i {
        width: 20px;
      }
    }
  }
}

.modal-toggle-enter-active,
.modal-toggle-leave-active {
  transition: transform 0.15s ease-out, opacity 0.15s linear;
}

.modal-toggle-enter,
.modal-toggle-leave-to {
  opacity: 0;
  transition: transform 0.15s ease-in, opacity 0.15s linear;
  transform: scale(0.6);
}
</style>
