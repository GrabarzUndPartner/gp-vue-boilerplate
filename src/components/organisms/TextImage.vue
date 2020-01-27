<template>
  <layout-two-column-container
    class="organism-text-image"
    :options="options"
  >
    <template v-slot:left>
      <atom-responsive-image v-bind="picture" />
    </template>
    <template v-slot:right>
      <molecule-content-article v-bind="article" />
    </template>
  </layout-two-column-container>
</template>

<story
  name="TextImage"
  group="Organisms"
  knobs="{
    mirror: {
      default: boolean('Mirror', false)
    },
    overline: {
      default: text('Overline', 'Lorem Overline')
    },
    headline: {
      default: text('Headline', 'Lorem Headline')
    },
    subline: {
      default: text('Subline', 'Lorem Subline')
    },
    content: {
      default: text('Content', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.')
    },
    picture: {
      default: select('Image', {
        'Set A': {
          sources: [
            { 'media': 'xl', 'srcset': 'https://picsum.photos/id/237/1920/800' },
            { 'media': 'l', 'srcset': 'https://picsum.photos/id/237/1599/800' },
            { 'media': 'md', 'srcset': 'https://picsum.photos/id/237/1199/800' },
            { 'media': 'sm', 'srcset': 'https://picsum.photos/id/237/991/1600' },
            { 'media': 'xs', 'srcset': 'https://picsum.photos/id/237/767/800' },
            { 'media': 'default', 'srcset': 'https://picsum.photos/id/237/575/800' }
          ]
        },
        'Set B': {
          sources: [
            { 'media': 'xl', 'srcset': 'https://picsum.photos/id/238/1920/800' },
            { 'media': 'l', 'srcset': 'https://picsum.photos/id/238/1599/800' },
            { 'media': 'md', 'srcset': 'https://picsum.photos/id/238/1199/800' },
            { 'media': 'sm', 'srcset': 'https://picsum.photos/id/238/991/1600' },
            { 'media': 'xs', 'srcset': 'https://picsum.photos/id/238/767/800' },
            { 'media': 'default', 'srcset': 'https://picsum.photos/id/238/575/800' }
          ]
        }
      }, {
          sources: [
            { 'media': 'xl', 'srcset': 'https://picsum.photos/id/237/1920/800' },
            { 'media': 'l', 'srcset': 'https://picsum.photos/id/237/1599/800' },
            { 'media': 'md', 'srcset': 'https://picsum.photos/id/237/1199/800' },
            { 'media': 'sm', 'srcset': 'https://picsum.photos/id/237/991/1600' },
            { 'media': 'xs', 'srcset': 'https://picsum.photos/id/237/767/800' },
            { 'media': 'default', 'srcset': 'https://picsum.photos/id/237/575/800' }
          ]
        })
    }
  }">
  <text-image :picture="picture" :article="{headline: {overline, headline, subline}, content}" :options="{mirror}"/>
</story>

<script>

import LayoutTwoColumnContainer from '@/components/layouts/TwoColumnContainer';
import MoleculeContentArticle from '@/components/molecules/ContentArticle';
import AtomResponsiveImage from '@/components/atoms/ResponsiveImageStatic';

export default {
  components: {
    LayoutTwoColumnContainer, MoleculeContentArticle, AtomResponsiveImage
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
            subline: 'Text Image Subline'
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
