<template>
  <layout-two-column-container
    class="organism-text-image"
    :mirror="mirror"
  >
    <template #left>
      <atom-responsive-image v-bind="picture" />
    </template>
    <template #right>
      <molecule-content-article v-bind="{headline: {overline, headline, subline}, content}" />
    </template>
  </layout-two-column-container>
</template>

<script>

import LayoutTwoColumnContainer from '@/components/layouts/TwoColumnContainer';
import MoleculeContentArticle from '@/components/molecules/ContentArticle';
import AtomResponsiveImage from '@/components/atoms/ResponsiveImage';

export default {
  components: {
    LayoutTwoColumnContainer, MoleculeContentArticle, AtomResponsiveImage
  },

  props: {
    mirror: {
      type: Boolean,
      default: false
    },

    overline: {
      type: String,
      default: 'Text Image Overline'
    },

    headline: {
      type: String,
      default: 'Text Image Headline'
    },

    subline: {
      type: String,
      default: 'Text Image Subline'
    },

    content: {
      type: String,
      default: '<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>'
    },

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { media: 'default', srcset: 'img/sample-b-16-9/412x232.jpg 1x, img/sample-b-16-9/retina/824x464.jpg 2x' },
            { media: 'xs', srcset: 'img/sample-b-16-9/768x432.jpg 1x, img/sample-b-16-9/retina/1536x864.jpg 2x' },
            { media: 'sm', srcset: 'img/sample-b-16-9/992x558.jpg 1x, img/sample-b-16-9/retina/1984x1116.jpg 2x' },
            { media: 'md', srcset: 'img/sample-b-16-9/1200x675.jpg 1x, img/sample-b-16-9/retina/2400x1350.jpg 2x' },
            { media: 'lg', srcset: 'img/sample-b-16-9/1600x900.jpg 1x, img/sample-b-16-9/retina/3200x1800.jpg 2x' },
            { media: 'xl', srcset: 'img/sample-b-16-9/1920x1080.jpg 1x, img/sample-b-16-9/retina/3840x2160.jpg 2x' }
          ]
        };
      }
    }

  }
};
</script>
