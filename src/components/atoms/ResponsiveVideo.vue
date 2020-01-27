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
    <atom-responsive-image
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
import AtomResponsiveImage from '@/components/atoms/ResponsiveImageStatic';
export default {
  components: { AtomResponsiveImage },
  props: {

    poster: {
      type: Object,
      required: false,
      default () {
        return {
          sources: [
            { media: 'default', srcset: 'video/9_16/poster/576.jpg' },
            { media: 'xs', srcset: 'video/16_9/poster/576.jpg' },
            { media: 'sm', srcset: 'video/16_9/poster/768.jpg' },
            { media: 'md', srcset: 'video/16_9/poster/992.jpg' },
            { media: 'lg', srcset: 'video/16_9/poster/1200.jpg' },
            { media: 'xl', srcset: 'video/16_9/poster/1600.jpg' }
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
