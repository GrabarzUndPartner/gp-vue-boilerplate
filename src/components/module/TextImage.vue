<template>
  <base-content-container>
    <base-layout-two-column-container
      class="organism-text-image"
      :mirror="mirror"
    >
      <template #left>
        <booster-picture v-bind="picture" />
      </template>
      <template #right>
        <fragment-content
          v-bind="{ headline: { overline, headline, subline }, content }"
        />
        <site-link v-if="link" v-bind="{ ...link, to: localePath(link.to) }">{{
          link.title
        }}</site-link>
      </template>
    </base-layout-two-column-container>
  </base-content-container>
</template>

<script setup>
import BoosterPicture from '#booster/components/BoosterPicture';
import { useLocalePath } from '#imports';

const localePath = useLocalePath();

defineProps({
  mirror: {
    type: Boolean,
    default: false
  },

  link: {
    type: Object,
    default: undefined
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
    default:
      '<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>'
  },

  picture: {
    type: Object,
    required: false,
    default() {
      return {
        sources: [
          {
            src: '/img/sample-a-16-9.jpg',
            sizes: {
              default: '100vw',
              xxs: '100vw',
              xs: '100vw',
              sm: '100vw',
              md: '100vw',
              lg: '100vw',
              xl: '100vw',
              xxl: '100vw'
            }
          }
        ]
      };
    }
  }
});
</script>
