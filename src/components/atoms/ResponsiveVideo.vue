<template>
  <div
    class="atom-responsive-video"
    :class="styleClasses"
  >
    <client-only>
      <video
        ref="video"
        v-bind="videoAttributes"
        @play="onPlay"
        @pause="onPause"
      >
        <source
          v-for="(source, index) in filteredSources"
          :key="index"
          v-bind="source"
        >
      </video>
    </client-only>
    <speedkit-picture
      v-bind="poster"
      class="poster"
    />
    <span
      v-if="!autoplay"
      class="play-button"
      @click="onClickPlayButton"
    ><i /></span>
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  props: {

    poster: {
      type: Object,
      required: false,
      default () {
        return {
          placeholders: [
            {
              media: '(min-width: 576px)',
              format: 'jpg',
              url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9Ijc1QjU0MkYxRkVFMzdENzk5MDFDRDgwRDAwOURFRUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZFNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREZENkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2M0ZDFhODAtZGNhYy00ODc2LTkwYjAtOTMwNTIwZDg1MTg0IiBzdFJlZjpkb2N1bWVudElEPSI3NUI1NDJGMUZFRTM3RDc5OTAxQ0Q4MEQwMDlERUVCNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xAB/AAADAQEAAAAAAAAAAAAAAAAEBQYHCAEAAwEBAAAAAAAAAAAAAAAAAQIDBAAQAAEDAQUFBgcBAAAAAAAAAAECAwQRABIFBgchMUETNFGBsSIyFHGRcsIzQyQVEQACAQMBCAMAAAAAAAAAAAAAAQIRMQQhQVGRoVIDExThMmL/2gAMAwEAAhEDEQA/ANTwbPjUuMZDMBz2yR1BdQWid1EqHqpxtl999PMt6f65DCHn2OsO+5j0QgFSXGV1AA9QcSrzA8dlQbNHOp9lwOeJ0viBZn1Jy/hWCP4k2pUpxCUcqOkEFSnTdRerS6LM86Fo6sEcSddbEDF1nMjBJuKuww3MhltyOwP2sOLDaqpJ9aSTx7DZY5bo1XXf8FZYiTV6PYRTGVtR2pLc6LCci/57UaK4029fZW2mocSygG6Qb1VrI+ZNsyi6NPUZzVxhJwDUiJjH9WFmauSVjD2WHFLaU0mh5jl26Wtmyqtx4G0JYsmXj34oGzTp7rFiEK8xgvLjtp56YiZLDqy8DTlq8wv3RuNq9rFcbiyyIuxNR8palCPJivZXkIdUzdjMEpIU5zWyUJorZ5UqXU7Nnbavh1rUXznTED8a/rFtisYhxC6JXd4mwCAu9Wn4fbYB2Ai+vb7/AANmAf/Z'
            },
            {
              format: 'jpg',
              url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjU0MTg5QUQyMjVGQjFBQzRENjU0NjQxN0UyQjU0M0QxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2NTdDRjMzNkUwRTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2NTdDRjMyNkUwRTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZlNGM5Y2ItZmE5OC00NWNkLWFkMmQtMzA2MzU1ZDllNTFmIiBzdFJlZjpkb2N1bWVudElEPSI1NDE4OUFEMjI1RkIxQUM0RDY1NDY0MTdFMkI1NDNEMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIADUAHgMBEQACEQEDEQH/xACDAAEAAgMBAAAAAAAAAAAAAAAABAcBBQYIAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQEQAAIBAgQGAQMFAAAAAAAAAAEDAgAEERIFBiExUSITB2FBMghxgcEUJBEAAgEDAgQDCQAAAAAAAAAAAAECESEDQRIxYZEF4SIEUYGx0TJSExQV/9oADAMBAAIRAxEAPwDypQCgFAKAUAoBQCgL5l609czsmZLRqXwJJm1zQMvQ8cv71hlkyVsyMpeY0zfXO1R5lqtmOctYmQts5iPHuMsDy+gPKpxyTdK2JKLk6I1btj7fhHHwkEjHL5Jkg9Dx+KuTkVbnUhx2jpBE/wDJLNEA4eSf1+catPXK5c2m7NurmyjLVHi0s4SMnxLIza4DiFrjicBLkZS5Vxsvd4btsI+Z6v6Y83T4I9x4JVrJ0RndqrJGmNstraNbycxS2MtlOlJ7hEYzWxpIiCs/Zl5n5rL6bPknLfnyO1lai5UXPWpq3wgqR1OdZtG4FjbXdx42NuVhsbNDpZ1CXd424jhPjlrpYO5wcnGadrbuFTHmwyi/K1f3kdO1L0272yRKDYyjkQZ4sZEkdgwOAy8cZGtH7+GvF0K9k6cUV7D3HuqEDAKtDE8hJczh+nfUH6HG/aXKCJaPem60nhY6dIdJJn/DKql2zG9ZdfAmrElX5BbuWDhp+mEmRkZSSwnu4kY+Xl06VXLs+J6y6+BJS5Esfkju0QMBouiiJ+4/1m5ieeObzc6q/h4/vydV8if5eSKlrtFQoBQCgFAKAUAoD//Z'
            }

          ],
          sources: [
            {
              format: 'webp',
              sizes: [
                {
                  width: 576,
                  media: '(min-width: 576px)',
                  url: 'img/sample-a-16-9/576.webp'
                },
                {
                  width: 768,
                  media: '(min-width: 768px)',
                  url: 'video/16_9/poster/768.webp'
                },
                {
                  width: 1024,
                  media: '(min-width: 1024px)',
                  url: 'video/16_9/poster/992.webp'
                },
                {
                  width: 1200,
                  media: '(min-width: 1200px)',
                  url: 'video/16_9/poster/1200.webp'
                },
                {
                  width: 1600,
                  media: '(min-width: 1600px)',
                  url: 'video/16_9/poster/1600.webp'
                }
              ]
            },
            {
              format: 'jpg',
              sizes: [
                {
                  width: 576,
                  media: '(min-width: 576px)',
                  url: 'img/sample-a-16-9/576.jpg'
                },
                {
                  width: 768,
                  media: '(min-width: 768px)',
                  url: 'video/16_9/poster/768.jpg'
                },
                {
                  width: 1024,
                  media: '(min-width: 1024px)',
                  url: 'video/16_9/poster/992.jpg'
                },
                {
                  width: 1200,
                  media: '(min-width: 1200px)',
                  url: 'video/16_9/poster/1200.jpg'
                },
                {
                  width: 1600,
                  media: '(min-width: 1600px)',
                  url: 'video/16_9/poster/1600.jpg'
                }
              ]
            },
            {
              format: 'webp',
              sizes: [
                {
                  width: 414,
                  media: 'all',
                  url: 'video/9_16/poster/412.jpg'
                }
              ]
            },
            {
              format: 'jpg',
              sizes: [
                {
                  width: 414,
                  media: 'all',
                  url: 'video/9_16/poster/412.jpg'
                }
              ]
            }
          ]
        };
      }
    },

    sources: {
      type: Array,
      required: false,
      default () {
        return [
          {
            type: 'video/mp4',
            src: 'video/9_16/BigBuckBunny_9_16.mp4',
            media: 'all and (max-width:575px)'
          },
          {
            type: 'video/mp4',
            src: 'video/16_9/BigBuckBunny_16_9.mp4',
            media: 'all and (min-width:576px)'
          }
        ];
      }
    },

    autoplay: {
      type: Boolean,
      required: false,
      default () {
        return false;
      }
    },

    muted: {
      type: Boolean,
      required: false,
      default () {
        return false;
      }
    },

    loop: {
      type: Boolean,
      required: false,
      default () {
        return false;
      }
    },

    controls: {
      type: Boolean,
      required: false,
      default () {
        return true;
      }
    },

    playsinline: {
      type: Boolean,
      required: false,
      default () {
        return false;
      }
    },

    preload: {
      type: String,
      required: false,
      default () {
        return 'none'; // auto, meta, none
      }
    }

  },

  data () {
    return {
      videoPlaying: false,
      videoStarted: false
    };
  },

  computed: {

    videoAttributes () {
      return {
        playsinline: this.playsinline,
        preload: this.preload,
        loop: this.loop,
        controls: this.controls,
        muted: this.muted
      };
    },

    styleClasses () {
      return {
        'js--started': this.videoStarted,
        'js--playing': this.videoPlaying
      };
    },
    filteredSources () {
      if (this.$isServer) {
        return [];
      }
      return this.sources.filter(source => this.isMedia(source.media));
    }
  },
  mounted () {
    this.$nextTick(() => {
      // Muss in den nextTick, da Video wegen "client-only" zum Mounted warum auch immer nocht nicht verfügbar ist.
      if (this.autoplay) {
        this.$refs.video.play();
      }
    });
  },
  methods: {
    isMedia (media) {
      if (!this.$isServer) {
        return media && window.matchMedia(media).matches;
      } else {
        return true;
      }
    },
    onClickPlayButton () {
      this.$refs.video.play();
    },

    onPlay () {
      this.videoStarted = this.videoPlaying = true;
    },
    onPause () {
      this.videoPlaying = false;
    }

  }
};
</script>

<style lang="postcss" scoped>
.atom-responsive-video {
  position: relative;
  background: var(--color-black);

  &::before {
    display: block;
    padding-top: calc(16 / 9 * 100%);
    content: "";

    @media (--xs) {
      padding-top: calc(9 / 16 * 100%);
    }
  }

  & video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
  }

  & .poster {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;

    &::before {
      display: block;
      padding-top: calc(16 / 9 * 100%);
      content: "";

      @media (--xs) {
        padding-top: calc(9 / 16 * 100%);
      }
    }

    & >>> picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & >>> img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  & .play-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    cursor: pointer;

    & i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &::before {
        display: block;
        width: 48px;
        height: 48px;
        content: "";
        background: red;
        border-radius: 50%;
      }
    }
  }

  &.js--started {
    & .poster,
    & .play-button {
      pointer-events: none;
      opacity: 0;
    }
  }
}
</style>
