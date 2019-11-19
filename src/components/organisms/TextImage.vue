<template>
  <gp-layout-two-column-container
    class="gp-organism-text-image"
    :options="options"
  >
    <template v-slot:left>
      <gp-atom-picture v-bind="picture" />
    </template>
    <template v-slot:right>
      <gp-molecule-article v-bind="article" />
    </template>
  </gp-layout-two-column-container>
</template>

<script>

import gpLayoutTwoColumnContainer from '@/components/layouts/TwoColumnContainer';
import gpMoleculeArticle from '@/components/molecules/Article';
import gpAtomPicture from '@/components/atoms/PictureStatic';

export default {
  components: {
    gpLayoutTwoColumnContainer, gpMoleculeArticle, gpAtomPicture
  },

  props: {

    options: {
      type: Object,
      default () {
        return null;
      }
    },

    article: {
      type: Object,
      default () {
        return {
          headline: {
            overline: 'Text Image Overline',
            headline: 'Text Image Headline',
            subline: 'Text Image Subline',
          },
          content: '<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>'
        };
      }
    },

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { 'media': 'default', 'srcset': 'img/sample-b-16-9/412x232.jpg 1x, img/sample-b-16-9/retina/824x464.jpg 2x' },
            { 'media': 'xs', 'srcset': 'img/sample-b-16-9/768x432.jpg 1x, img/sample-b-16-9/retina/1536x864.jpg 2x' },
            { 'media': 'sm', 'srcset': 'img/sample-b-16-9/992x558.jpg 1x, img/sample-b-16-9/retina/1984x1116.jpg 2x' },
            { 'media': 'md', 'srcset': 'img/sample-b-16-9/1200x675.jpg 1x, img/sample-b-16-9/retina/2400x1350.jpg 2x' },
            { 'media': 'lg', 'srcset': 'img/sample-b-16-9/1600x900.jpg 1x, img/sample-b-16-9/retina/3200x1800.jpg 2x' },
            { 'media': 'xl', 'srcset': 'img/sample-b-16-9/1920x1080.jpg 1x, img/sample-b-16-9/retina/3840x2160.jpg 2x' }
          ]
        };
      }
    }

  }
};
</script>

<style lang="postcss">
.gp-organism-text-image {
  & picture {
    position: relative;
    display: block;

    &::before {
      display: block;
      width: 100%;
      padding-top: calc(9 / 16 * 100%);
      content: "";
    }

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>
