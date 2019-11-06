<template>
  <div class="content">
    <component
      :is="item.asyncComponent"
      v-for="(item, index) in components"
      :key="index"
      :class="item.class"
      v-bind="item.data"
    />
  </div>
</template>

<script>

import {
  hydrateWhenIdle,
  hydrateWhenVisible
} from 'vue-lazy-hydration';

export default {
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
          component: 'article/HeadlineText',
          data: {

          }
        },
        // {
        //   component: 'Stage',
        //   data: {

        //     picture: {
        //       sourceClientOnly: false,

        //       sources: [
        //         { 'media': 'default', 'srcset': 'img/2/576x324.jpg' },
        //         { 'media': 'xs', 'srcset': 'img/2/768x432.jpg' },
        //         { 'media': 'sm', 'srcset': 'img/2/992x558.jpg' },
        //         { 'media': 'md', 'srcset': 'img/2/1200x675.jpg' },
        //         { 'media': 'lg', 'srcset': 'img/2/1200x675.jpg' },
        //         { 'media': 'xl', 'srcset': 'img/2/1920x1080.jpg' }
        //       ]
        //     }
        //   }
        // },
        // {
        //   component: 'StageVideo',
        //   data: {
        //     video: {
        //       preload: 'none'
        //     }
        //   }
        // },

        // {
        //   component: 'StageVideo',
        //   data: {
        //     video: {
        //       preload: 'auto',
        //       controls: true,
        //       playsinline: false,
        //       muted: false,
        //       autoplay: false,
        //       loop: false,

        //       sources: [
        //         {
        //           type: 'video/mp4',
        //           src: 'video/9_16/BigBuckBunny_9_16.mp4',
        //           media: 'all and (max-width:575px)'
        //         },
        //         {
        //           type: 'video/mp4',
        //           src: 'video/16_9/BigBuckBunny_16_9.mp4',
        //           media: 'all and (min-width:576px)'
        //         }
        //       ]
        //     }
        //   }
        // },
        // {
        //   component: 'StageImage',
        //   data: {
        //     image: {
        //       sourceClientOnly: true,
        //       src: 'img/test-mobile.jpg'
        //     }
        //   }
        // },
        // {
        //   component: 'article/HeadlineTextA',
        //   data: {

        //   }
        // }
        // {
        //   component: 'Image',
        //   data: {
        //     image: {
        //       sourceClientOnly: false,
        //       src: 'img/test-mobile.jpg?bqoptimize=1;auto=webp;'
        //     }
        //   }
        // },
        // {
        //   component: 'article/HeadlineTextA',
        //   data: {

        //   }
        // },
        // {
        //   component: 'StageImage',
        //   data: {
        //     image: {
        //       sourceClientOnly: true,
        //       src: 'img/test-mobile.jpg'
        //     }
        //   }
        // },
        // {
        //   component: 'article/HeadlineTextA',
        //   data: {

        //   }
        // },
        // {
        //   component: 'article/HeadlineTextB',
        //   data: {

        //   }
        // },
        // {
        //   component: 'Stage',
        //   data: {
        //     picture: {
        //       placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCwwLCQ4MCwwQDw4RFSMXFRMTFSsfIRojMy02NTItMTA4P1FFODxNPTAxRmBHTVRWW1xbN0RjamNYalFZW1f/2wBDAQ8QEBUSFSkXFylXOjE6V1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1f/wgARCAAtAFADAREAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAwQFAgYBAP/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/9oADAMBAAIQAxAAAADsbgoXXprGTAMWixWn+PswFAj1wbs9RzvHtAX0t8YXn6U7GkvF7zRGpc11kW1WQpmT7VJLxbXPowTriR2g03RQzfNg8VsQa+b3ENTqxxna4ZMJOZUYHU/AspQ//8QALRAAAgEDAwIFAQkAAAAAAAAAAgMABAUSARMiBkIQFCMxMmIRFjNDUnFygqL/2gAIAQEAAT8AHWDrB8ShQ9cYTlkeOcOBdmd0TdCb8Qh1rC+mDVVCj3BPMYq5iYfVAqhKE8Ze70IHsr/tCuzGn6Z4kMpK3zFIBd0ttST82M/DGU90oi4rONdlPM7XfBuCy+UByxPLM55wizYw+IyueLavLtlLiJu/zLa8lOBP6ohyytxrHgMDFKdzuKUVaRJyI/jG1otPicpXLQn1obEmGSzlXXfljDeSj5d0F68OMtrx82rKNsbKcMEmeJSlsBbOTuZD8ZQWYhMxqO7tGN6WJRmaz4wKCoa00p9X+UR0tVZ57+Ix/R7jdmL5X9JVmAbJ5z7s3MJabXWW+u36jmM2xH2gjphB+wfYRmg6GnlFAAhxAR/bw1MoJakEMdC941Yz/8QAHREBAAMBAAMBAQAAAAAAAAAAAAECERIQEyAxA//aAAgBAgEBPwDWthseMZ4rd+va9jZbKLoum6f6PxW6KuXTp27QhZVFnTlNWMRCFlWMcuHDhw5+ta35/8QAHBEAAQUBAQEAAAAAAAAAAAAAAAECERIgExAh/9oACAEDAQE/ANT4rBPhzOZzOZQoIwRhA5uYI9QdhMoO9sWLlyxbca//2Q==',
        //       width: 80,
        //       sources: [
        //         { 'media': 'default', 'srcset': 'img/2/576x324.jpg' },
        //         { 'media': 'xs', 'srcset': 'img/2/768x432.jpg' },
        //         { 'media': 'sm', 'srcset': 'img/2/992x558.jpg' },
        //         { 'media': 'md', 'srcset': 'img/2/1200x675.jpg' },
        //         { 'media': 'lg', 'srcset': 'img/2/1600x900.jpg' },
        //         { 'media': 'xl', 'srcset': 'img/2/1920x1080.jpg' },
        //       ]
        //     }
        //   }
        // }, {
        //   component: 'article/HeadlineTextC',
        //   data: {

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
    this.components = this.components.map((item, index) => {
      let asyncLoad = () => import(`@/components/organisms/${item.component}`);
      if (index) {
        return {
          asyncComponent: hydrateWhenVisible(
            asyncLoad,
            { observerOptions: { rootMargin: '100px' } }
          ),
          data: item.data
        };
      }
      return {
        asyncComponent: hydrateWhenIdle(asyncLoad),
        class: 'visible',
        data: item.data
      };
    });

  }
};
</script>

<style lang="postcss" scoped>
</style>
