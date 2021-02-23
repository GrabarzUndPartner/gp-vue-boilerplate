<template>
  <div
    v-font="[
      $getFont('Raleway'),
      $getFont('Raleway', 700, 'normal', {selector:'strong'}),
      $getFont('Raleway', 400, 'italic', {selector:'em'})
    ]"
    class="atom-rich-text"
  >
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
      default: 'Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href=\'https://grabarzundpartner.de\'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-rich-text {
  font-size: calc(16 / 375 * 100vw);
  line-height: 1.3;
  letter-spacing: calc(0.9 / 16 * 1em);

  @media (--xs) {
    font-size: 16px;
  }
}
</style>
