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
    <stage />
    <div
      v-for="(item, index) in components"
      :key="index"
    >
      <lazy-hydrate when-visible>
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
  </div>
</template>

<script>
import SvgInline from '@/components/atoms/SvgInline';

export default {
  components: {
    SvgInline,
    Stage: () => import('@/components/organisms/Stage')
  },

  head () {
    return {
      title: 'title of page'
    };
  },

  data () {
    return {
      
    };
  },

  asyncData () {
    return new Promise((resolve) => {
      resolve([
        {
          c: 'article/HeadlineText',
          load: 'ssr-only',
          data: {

          }
        }, {
          c: 'article/HeadlineText',
          load: 'visible',
          data: {

          }
        }
        // , {
        //   c: 'Stage',
        //   onlySSR: true,
        //   data: {
        //     content: {
        //       'sources': [
        //         { 'media': 'default', 'src': 'retina/sample-b/1152x600.jpg' },
        //         { 'media': 'xs', 'src': 'retina/sample-b/1536x600.jpg' },
        //         { 'media': 'sm', 'src': 'retina/sample-b/1984x600.jpg' },
        //         { 'media': 'md', 'src': 'retina/sample-b/2400x600.jpg' },
        //         { 'media': 'lg', 'src': 'retina/sample-b/3200x600.jpg' },
        //         { 'media': 'xl', 'src': 'retina/sample-b/3840x600.jpg' }
        //       ]
        //     }

        //   }
        // }
      ]);
    }).then((components) => {
      return {
        components: components
      };
    });
  },

  created () {
    this.components = this.components.map((item) => {
      return {
        asyncComponent: () => import(`@/components/organisms/${item.c}`),
        load: item.load,
        data: item.data
      };
    });

  }
};
</script>
