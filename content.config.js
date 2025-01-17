import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: 'pages/**/*.json'
    }),
    layout: defineCollection({
      type: 'page',
      source: 'layout/**.json'
    })
  }
});
