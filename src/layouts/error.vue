
<template>
  <div class="content">
    <component
      :is="item.component"
      v-for="(item, index) in components"
      :key="index"
      v-bind="item.data"
    />
  </div>
</template>

<script>
import ComponentsExtend from '@/extends/Components';
export default {

  extends: ComponentsExtend,

  props: {
    error: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  head () {
    return {
      title: this.error.statusCode
    };
  },

  computed: {
    components () {
      return [
        {
          component: 'StagePicture',
          data: {
            picture: {
              placeholders: [
                {
                  format: 'jpg',
                  // eslint-disable-next-line no-secrets/no-secrets
                  url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCNEVGN0EyNkU5RTExRUJCMDkwQ0MwRUY0MUI3MjY2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCNEVGN0ExNkU5RTExRUJCMDkwQ0MwRUY0MUI3MjY2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM2QjRDNzlGRkRBMTFFOUJFRjk4MkQ3MEUxODg0RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM2QjRDN0FGRkRBMTFFOUJFRjk4MkQ3MEUxODg0RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAARAB4DAREAAhEBAxEB/8QAWwABAQEBAAAAAAAAAAAAAAAAAAUCCAEBAAAAAAAAAAAAAAAAAAAAABAAAgICAgICAwAAAAAAAAAAAgMBBAAFEgYRITETcSIUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDlTAqaTr9vcEYVWoFoMQoEtaINadlwpCErmeTPBF5Lj8R7wN9u1uv1faNrrNcxjaVC02qlzZiTOEnK5OeMRH7SPmIwJGAwK/Xd5X09j+uaIWbyXVrFGyTGDKDruFszADPE/sgeE8onx8x7wNdztay523cXdW2W663cdYqmQyBfW45YIkJe/I8uM/jAjYDAYDAYH//Z'
                }
              ],
              sources: [
                {
                  format: 'jpg',
                  sizes: [
                    { width: 414, media: 'all', url: require('@/static/img/error/414.jpg') },
                    { width: 576, media: '(min-width: 576px)', url: require('@/static/img/error/576.jpg') },
                    { width: 768, media: '(min-width: 768px)', url: require('@/static/img/error/768.jpg') },
                    { width: 992, media: '(min-width: 992px)', url: require('@/static/img/error/992.jpg') },
                    { width: 1200, media: '(min-width: 1200px)', url: require('@/static/img/error/1200.jpg') },
                    { width: 1600, media: '(min-width: 1600px)', url: require('@/static/img/error/1600.jpg') },
                    { width: 1600, media: '(min-width: 1900)', url: require('@/static/img/error/1920.jpg') }
                  ]
                }
              ]
            }
          }
        },
        {
          component: 'ArticleText',
          data: {
            article: {
              headline: {
                overline: null,
                headline: String(this.error.statusCode),
                subline: null
              },
              content: `<p>${this.error.message}</p>`
            }
          }
        }
      ];
    }
  }

};
</script>
