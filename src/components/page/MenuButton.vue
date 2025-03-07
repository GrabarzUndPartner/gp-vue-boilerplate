<template>
  <transition name="button-toggle">
    <button
      v-if="!toggleDirection"
      class="page-menu-button"
      :class="{ selected: isMenuOpened }"
      :aria-label="label"
      @click="onClickMenu"
    >
      <i>
        <svg-icon-menu-close />
      </i>
    </button>
  </transition>
</template>

<script setup>
import { useLayoutStore, useModalStore } from '@/stores/layout';
import svgIconMenuClose from '@/assets/svg/icons/menu-close.svg';
import { computed } from 'vue';

const layoutStore = useLayoutStore();
const modalStore = useModalStore();

const isMenuOpened = computed(() => modalStore.isModalOpened('menu'));
const toggleDirection = computed(() => layoutStore.toggleDirection);

defineProps({
  label: {
    type: String,
    default() {
      return 'Menu Open/Close';
    }
  }
});

function onClickMenu() {
  modalStore.toggleModal({
    name: 'menu'
  });
}
</script>

<style lang="postcss">
.page-menu-button {
  position: fixed;
  bottom: 10vh;
  left: calc(50% - (48px / 2));
  z-index: 1001;
  box-sizing: border-box;
  display: block;
  width: calc(48 / 375 * 100vw);
  padding: 12px;
  appearance: none;
  cursor: pointer;
  user-select: none;
  outline: none;
  background: rgb(255 255 255 / 60%);
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  backdrop-filter: blur(2px);
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
      content: '';
    }

    & > * {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  & svg g {
    transform-origin: center center;
    transition:
      transform 0.3s linear,
      opacity 0.3s linear;

    &:last-child {
      opacity: 0;
      transform: scale(0.4);
      transition:
        transform 0.15s linear,
        opacity 0.15s linear;
    }
  }

  &.selected {
    background: rgb(0 0 0 / 50%);

    & svg {
      fill: white;

      & g {
        &:first-child {
          opacity: 0;
          transform: scale(0.4);
          transition:
            transform 0.15s linear,
            opacity 0.15s linear;
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
  transition:
    transform 0.3s linear,
    opacity 0.3s linear;
}

.button-toggle-enter,
.button-toggle-leave-to {
  opacity: 0;
  transform: scale(0.4);
  transition:
    transform 0.15s linear,
    opacity 0.15s linear;
}
</style>
