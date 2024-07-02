<template>
  <base-layout-lost-container
    class="page-header"
    :class="styleClasses"
    tag="header"
  >
    <template #container>
      <div class="logo">
        <nuxt-link to="/"> Logo </nuxt-link>
      </div>
    </template>
  </base-layout-lost-container>
</template>

<script setup>
const layoutStore = useLayoutStore();

const props = defineProps({
  sticky: {
    type: Boolean,
    required: false
  }
});

const scrollDirection = computed(() => {
  return layoutStore.scrollDirection;
});
const styleClasses = computed(() => {
  return { toggle: scrollDirection.value, sticky: props.sticky };
});
</script>

<style lang="postcss" scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  margin: 0;
  transition:
    transform 0.2s linear,
    opacity 0.2s linear;

  &.sticky {
    position: sticky;
  }

  &.toggle {
    opacity: 0;
    transform: translateY(-60%);
  }

  & .logo {
    padding: 10px 0;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background: rgb(255 255 255 / 50%);
    backdrop-filter: blur(4px);
    box-shadow: 0 0 10px rgb(0 0 0 / 30%);

    & a {
      color: var(--color-black);
      text-decoration: none;
    }
  }
}
</style>
