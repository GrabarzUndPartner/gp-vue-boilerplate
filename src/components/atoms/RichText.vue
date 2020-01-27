<template>
  <div class="atom-rich-text">
    <div
      v-if="!$slots.default"
      v-html="content"
    />
    <slot />
  </div>
</template>

<story
  name="RichText"
  group="Atoms"
  knobs="{
    content: {
      default: text('Text', 'Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href=\'https://grabarzundpartner.de\'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.')
    }
  }">
  <rich-text :content="content"/>
</story>

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
.atom-rich-text {
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
