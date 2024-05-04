<template>
  <transition name="modal-toggle">
    <base-layout-lost-container
      v-show="opened"
      class="layout-modal"
      :class="styleClasses"
    >
      <template #container>
        <div class="lost-flex-container">
          <button v-if="closeButton" class="close" @click="close">
            <i>
              <svg-icon-close />
            </i>
          </button>
          <div class="content">
            <slot />
          </div>
        </div>
      </template>
    </base-layout-lost-container>
  </transition>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed, watch, onMounted, onUnmounted } from 'vue';
import BaseLayoutLostContainer from './LostContainer';

import svgIconClose from '@/assets/svg/icons/menu-close.svg?vue-template';
import { useLayoutStore, useModalStore } from '@/stores/layout';

const props = defineProps({
  options: {
    type: Object,
    default() {
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
    default() {
      return false;
    }
  },

  onOpen: {
    type: Function,
    default() {
      return null;
    }
  },
  onClose: {
    type: Function,
    default() {
      return null;
    }
  }
});

const router = useRouter();
const layoutStore = useLayoutStore();
const modalStore = useModalStore();

const opened = computed(() => modalStore.isModalOpened('menu'));
const styleClasses = computed(() => ({
  opened: opened.value
}));

watch(opened, opened => {
  if (opened) {
    if (props.onOpen) {
      props.onOpen();
    }
  } else if (props.onClose) {
    props.onClose();
  }
});

onMounted(() => {
  router.afterEach(onRouterAfterEach);

  modalStore.registerModal({
    name: props.name,
    opened: props.options.opened
  });

  if (opened.value) {
    layoutStore.toggleScrollDirection(true);
  }
});

onUnmounted(() => {
  modalStore.unregisterModal(props.name);
});

function close() {
  this.$store.dispatch('modal/toggleModal', {
    name: this.name,
    flag: false
  });
}

function onRouterAfterEach() {
  this.close();
}
</script>

<style lang="postcss">
.layout-modal {
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
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: none;

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
  transition:
    transform 0.15s ease-out,
    opacity 0.15s linear;
}

.modal-toggle-enter,
.modal-toggle-leave-to {
  opacity: 0;
  transition:
    transform 0.15s ease-in,
    opacity 0.15s linear;
  transform: scale(0.6);
}
</style>
