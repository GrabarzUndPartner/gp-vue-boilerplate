<template>
  <div class="element-responsive-video" :class="styleClasses">
    <client-only>
      <video ref="videoRef" v-bind="videoAttributes" @play="onPlay" @pause="onPause">
        <!--  eslint-disable-next-line prettier/prettier eslint-disable-next-line vue/no-parsing-error -->
        <source v-for="(source, index) in filteredSources" :key="index" v-bind="source"></source>
      </video>
    </client-only>
    <booster-picture v-bind="poster" class="poster" />
    <span v-if="!autoplay" class="play-button" @click="onClickPlayButton"><svg-icon-play /></span>
  </div>
</template>

<script setup>
import { joinURL } from 'ufo';
import BoosterPicture from '#booster/components/BoosterPicture';
import SvgIconPlay from '@/assets/svg/icons/play.svg';

const props = defineProps({
  poster: {
    type: Object,
    required: false,
    default() {
      return {
        title: 'Text Image',
        alt: 'Text Image',
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
  },

  sources: {
    type: Array,
    required: false,
    default() {
      return [
        {
          type: 'video/mp4',
          src: '/video/9_16/BigBuckBunny_9_16.mp4',
          media: 'all and (max-width:575px)'
        },
        {
          type: 'video/mp4',
          src: '/video/16_9/BigBuckBunny_16_9.mp4',
          media: 'all and (min-width:576px)'
        }
      ];
    }
  },

  autoplay: {
    type: Boolean,
    required: false,
    default() {
      return false;
    }
  },

  muted: {
    type: Boolean,
    required: false,
    default() {
      return false;
    }
  },

  loop: {
    type: Boolean,
    required: false,
    default() {
      return false;
    }
  },

  controls: {
    type: Boolean,
    required: false,
    default() {
      return true;
    }
  },

  playsinline: {
    type: Boolean,
    required: false,
    default() {
      return false;
    }
  },

  preload: {
    type: String,
    required: false,
    default() {
      return 'none'; // auto, meta, none
    }
  }
});

const isServer = ref(false);
const videoPlaying = ref(false);
const videoStarted = ref(false);

const videoAttributes = computed(() => {
  return {
    playsinline: props.playsinline,
    preload: props.preload,
    loop: props.loop,
    controls: props.controls,
    muted: props.muted
  };
});

const styleClasses = computed(() => {
  return {
    started: videoStarted.value,
    playing: videoPlaying.value
  };
});

const preparedSources = computed(() => {
  return props.sources.map(source => {
    let src = source.src;

    if (/^\/[^/]+/.test(src)) {
      src = joinURL(useRuntimeConfig().app.baseURL, src);
    }

    return { ...source, src };
  });
});

const filteredSources = computed(() => {
  if (isServer.value) {
    return [];
  }
  return preparedSources.value.filter(source => isMedia(source.media));
});

const videoRef = ref(null);

onMounted(() => {
  isServer.value = false;
  nextTick(() => {
    // Muss in den nextTick, da Video wegen "client-only" zum Mounted warum auch immer nocht nicht verfügbar ist.
    if (props.autoplay) {
      videoRef.value.play();
    }
  });
});

function isMedia(media) {
  if (!isServer.value) {
    return media && window.matchMedia(media).matches;
  } else {
    return true;
  }
}
function onClickPlayButton() {
  videoRef.value.play();
}

function onPlay() {
  videoStarted.value = videoPlaying.value = true;
}
function onPause() {
  videoPlaying.value = false;
}
</script>

<style lang="postcss" scoped>
.element-responsive-video {
  position: relative;
  background: var(--color-black);

  &::before {
    display: block;
    padding-top: calc(16 / 9 * 100%);
    content: '';

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
      content: '';

      @media (--xs) {
        padding-top: calc(9 / 16 * 100%);
      }
    }

    & :deep(picture) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & :deep(img) {
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

    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 64px;
      height: 64px;
      color: var(--color-white);
      filter: drop-shadow(0 0 6px black);
      transform: translate(-50%, -50%);
    }
  }

  &.started {
    & .poster,
    & .play-button {
      pointer-events: none;
      opacity: 0;
    }
  }
}
</style>
