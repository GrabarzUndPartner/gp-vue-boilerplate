<template>
  <div class="organisms-stage">
    <gp-picture class="background" />
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
import gpHeadline from '@/components/atoms/headline/Page';
import gpSubline from '@/components/atoms/subline/Page';
import gpPicture from '@/components/atoms/Picture';

export default {
  components: {
    gpHeadline,
    gpSubline,
    gpPicture
  },

  props: {
    content: {
      type: Object,
      default () {
        return {
          headline: 'STAGE HEADLINE',
          subline: 'STAGE SUBLINE'
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
