<template>
  <div class="gp-atom-rich-text">
    <div
      v-if="!$slots.default"
      v-html="content"
    />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
      default: '<p>Example Text</p>'
    }
  }
};
</script>

<style lang="postcss" scoped>
.gp-atom-rich-text {
  & strong,
  & b,
  & i,
  & em {
    font-style: normal;
    font-weight: 400;
  }

  font-family: sans-serif;
  font-size: calc(16 / 375 * 100vw);
  font-weight: 400;

  @media (--xs) {
    font-size: 16px;
  }

  @nest .font_raleway .js--visible & {
    font-family: "Raleway", sans-serif;
  }
}
</style>
