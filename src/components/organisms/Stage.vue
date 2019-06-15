<template>
  <div class="organisms-stage">
    <lazy-hydrate ssr-only>
      <gp-picture
        class="background"
        :sources="content.sources"
      />
    </lazy-hydrate>
    <div class="headline-subline">
      <gp-headline class="headline">
        {{ content.headline }}
      </gp-headline>
      <gp-subline class="subline">
        {{ content.subline }}
      </gp-subline>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    gpHeadline: () => import(/* webpackMode: "eager" */'@/components/atoms/headline/Page'),
    gpSubline: () => import(/* webpackMode: "eager" */'@/components/atoms/subline/Page'),
    gpPicture: () => import(/* webpackMode: "lazy" */'@/components/atoms/Picture')
  },

  props: {
    content: {
      type: Object,
      default () {
        return {
          headline: 'STAGE HEADLINE',
          subline: 'STAGE SUBLINE',

        };
      }
    }
  }
};
</script>

<style lang="postcss">
.organisms-stage {
  position: relative;
  width: 100%;

  & .background {
    & img {
      object-fit: cover;
      height: 300px;
    }
  }

  & .headline-subline {
    position: absolute;
    right: 2em;
    bottom: 0;
    color: black;
  }
}
</style>
