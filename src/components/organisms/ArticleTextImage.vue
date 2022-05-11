<template>
  <layout-two-column-container
    class="organism-text-image"
    :mirror="mirror"
  >
    <template #left>
      <speedkit-picture v-bind="picture" />
    </template>
    <template #right>
      <molecule-content-article v-bind="{headline: {overline, headline, subline}, content}" />
    </template>
  </layout-two-column-container>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import LayoutTwoColumnContainer from '@/components/layouts/TwoColumnContainer';
import MoleculeContentArticle from '@/components/molecules/ContentArticle';

export default {
  components: {
    LayoutTwoColumnContainer,
    MoleculeContentArticle,
    SpeedkitPicture
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
            { src: '/img/sample-a-16-9.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
          ]
        };
      }
    }

  }
};
</script>
