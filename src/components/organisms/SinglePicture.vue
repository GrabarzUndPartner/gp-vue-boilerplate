<template>
  <layout-default-container
    class="organism-picture"
  >
    <template #container>
      <speedkit-picture v-bind="picture" />
    </template>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

export default {
  components: {
    LayoutDefaultContainer,
    SpeedkitPicture
  },

  props: {

    picture: {
      type: Object,
      required: false,
      default () {
        return {
          placeholders: [
            {
              format: 'jpg',
              // eslint-disable-next-line no-secrets/no-secrets
              url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjA2MTQ3MDIzMTU5MTFBRkYxQzFFNUExMTk5Q0FEMUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZBNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREY5NkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFiN2YyNTUtZjAzZC00MDA1LWIzN2ItZDUzZDk0ZDBhNzQxIiBzdFJlZjpkb2N1bWVudElEPSIwNjE0NzAyMzE1OTExQUZGMUMxRTVBMTE5OUNBRDFBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xACCAAEAAwEAAAAAAAAAAAAAAAAGAgUHBAEAAwEBAAAAAAAAAAAAAAAAAgQFAwYQAAIBAwICBQoHAAAAAAAAAAECAxEEBQASIQYxkTITB1FxgcHRIkJysnMzsxQ0dDU2EQABAwMEAQUBAAAAAAAAAAACAAEDESExYYESMhNRwUJSBBT/2gAMAwEAAhEDEQA/AEmE8f45ZVimsLN5iGOyOPazMBwVArNUnq1zrtOOBEtleKGH7k26lkPGjmCbJ/oMbyvbyXZFVt5J2WUMBuO+MEBAB5dORQzegs+iXLwt8idtkT5n568QeYLOZchdSYbG2oEd1HjnSWNTIvauCrq7buim4+bW5QSk13QxfogB7NfX2QJ+X7M3ccozMBtVU1j7mQELtIrtrQ9esPA9KUTf9rZqiuNEpQOhSMn3Y1Ttn0e3TbkpzRukOAyr4u7e9ZzdXUNGtUmeRIAwFS0oU7pQvwpWleJ4aMJGG9KugOJytWyvbTm+fLYd4csZbjIWrPO0gRYu9haqEQJEgSscbHgy0I41ppoJeQ3ylDicSthCTcxI6r3UgsJB3ggPbMQPbDbukAV6dY8hrotuJLnxf7+H5R9GlSVAVY2v9UPuevQj2RF1WiZr/PL/ABI/yzquXRSR7rNJ/wAe1+y/06jDh1TfLL//2Q=='
            }
          ],
          sources: [
            {
              format: 'jpg',
              sizes: [
                { width: 414, media: 'all', url: 'img/sample-a-16-9/412x232.jpg' },
                { width: 576, media: '(min-width: 576px)', url: 'img/sample-a-16-9/768x432.jpg' },
                { width: 768, media: '(min-width: 768px)', url: 'img/sample-a-16-9/992x558.jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: 'img/sample-a-16-9/1200x675.jpg' },
                { width: 1200, media: '(min-width: 1200px)', url: 'img/sample-a-16-9/1600x900.jpg' },
                { width: 1600, media: '(min-width: 1600px)', url: 'img/sample-a-16-9/1920x1080.jpg' }
              ]
            }
          ]
        };
      }
    }

  }

};
</script>

<style lang="postcss">
.organism-picture {
  position: relative;
  width: 100%;

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
</style>
