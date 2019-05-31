<i18n>
{
  "de": {
    "text": "Ich bin die Startseite12"
  },
  "en": {
    "text": "I'm the homepage"
  }
}
</i18n>

<template>
  <div class="content">
    <div
      v-for="(item, index) in components"
      :key="index"
    >
      <lazy-hydrate
        v-if="item.onlySSR"
        ssr-only
      >
        <component
          :is="item.asyncComponent"
          :content="item.data.content"
        />
      </lazy-hydrate>
      <lazy-hydrate
        v-else
        when-visible
      >
        <component
          :is="item.asyncComponent"
          :content="item.data.content"
        />
      </lazy-hydrate>
    </div>

    <h1>Headline</h1>
    <p>{{ $t('text') }}</p>
    <lazy-hydrate ssr-only>
      <svg-inline src="image3.svg" />
    </lazy-hydrate>
    <lazy-hydrate ssr-only>
      <svg-inline src="image2.svg" />
    </lazy-hydrate>
    <!-- <img src="@/assets/svg/image2.svg"> -->
  </div>
</template>

<script>
import SvgInline from '@/components/atoms/SvgInline';

export default {
  components: {
    SvgInline
  },

  head () {
    return {
      title: 'title of page'
    };
  },

  data () {
    return {
      img: 'image0.png',
      test: 'image2.svg'
    };
  },

  asyncData () {
    return new Promise((resolve) => {
      resolve([
        {
          c: 'Stage',
          onlySSR: true,
          data: {

          }
        }, {
          c: 'article/HeadlineText',
          onlySSR: true,
          data: {

          }
        }, {
          c: 'article/HeadlineText',
          onlySSR: false,
          data: {

          }
        }, {
          c: 'article/HeadlineText',
          onlySSR: false,
          data: {

          }
        }, {
          c: 'Stage',
          onlySSR: true,
          data: {
            content: {
              'sources': [
                { 'media': 'default', 'src': 'retina/sample-b/1152x600.jpg' },
                { 'media': 'xs', 'src': 'retina/sample-b/1536x600.jpg' },
                { 'media': 'sm', 'src': 'retina/sample-b/1984x600.jpg' },
                { 'media': 'md', 'src': 'retina/sample-b/2400x600.jpg' },
                { 'media': 'lg', 'src': 'retina/sample-b/3200x600.jpg' },
                { 'media': 'xl', 'src': 'retina/sample-b/3840x600.jpg' }
              ]
            }

          }
        }
      ]);
    }).then((components) => {
      return {
        components: components
      };
    });
  },

  created () {
    let r = require.context('@/components/organisms/', true, /\.(vue)$/);

    this.components = this.components.map((item) => {
      return {
        asyncComponent: () => {
          return new Promise((resolve) => {
            resolve(r(`./${item.c}.vue`));
          });
        },
        onlySSR: item.onlySSR,
        data: item.data
      };
    });

  }
};
</script>
