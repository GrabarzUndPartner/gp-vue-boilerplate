<template>
  <scroll-container v-bind="$attrs" :rows="3" v-on="$listeners" @progress="onProgress">
    <template #default="{progress}">
      <div class="test test-1">
        <h3>Headline 1</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="test test-2">
        <h3>Headline 2</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="test test-3">
        <h3>Headline 3</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1026.3 72.1"
        xml:space="preserve"
      >
        <path
          d="M0.6,48l13.5-1.3c0.8,4.5,2.5,7.9,4.9,10s5.8,3.2,10.1,3.2
 c4.5,0,7.8-0.9,10.1-2.8c2.3-1.9,3.4-4.1,3.4-6.6c0-1.6-0.5-3-1.4-4.1c-1-1.1-2.6-2.1-5-3c-1.6-0.6-5.3-1.6-11.1-3
 c-7.4-1.8-12.7-4.1-15.7-6.8C5.2,29.7,3,25.1,3,19.7c0-3.5,1-6.8,3-9.8c2-3,4.8-5.4,8.6-7c3.7-1.6,8.2-2.4,13.5-2.4
 c8.6,0,15.1,1.9,19.5,5.7s6.6,8.8,6.9,15.1l-13.9,0.6c-0.6-3.5-1.9-6.1-3.8-7.6c-2-1.5-4.9-2.3-8.8-2.3c-4,0-7.2,0.8-9.5,2.5
 c-1.5,1.1-2.2,2.5-2.2,4.3c0,1.6,0.7,3,2.1,4.2c1.8,1.5,6,3,12.8,4.6s11.7,3.2,15,4.9s5.8,4,7.6,7s2.7,6.6,2.7,10.9
 c0,3.9-1.1,7.6-3.3,11.1c-2.2,3.4-5.3,6-9.3,7.7c-4,1.7-9,2.5-15,2.5c-8.7,0-15.4-2-20-6C4.2,61.6,1.5,55.7,0.6,48z"
        />
        <path
          d="M85.6,70.4L61.1,1.7h15l17.4,50.9l16.8-50.9h14.7l-24.6,68.7H85.6z"
        />
        <path
          d="M164.1,45.1V33.5H194v27.4c-2.9,2.8-7.1,5.3-12.6,7.4
 c-5.5,2.1-11.1,3.2-16.8,3.2c-7.2,0-13.5-1.5-18.8-4.5s-9.4-7.3-12-12.9c-2.7-5.6-4-11.7-4-18.3c0-7.2,1.5-13.5,4.5-19.1
 s7.4-9.8,13.2-12.8c4.4-2.3,9.9-3.4,16.5-3.4c8.5,0,15.2,1.8,20,5.4c4.8,3.6,7.9,8.5,9.3,14.8l-13.8,2.6c-1-3.4-2.8-6-5.5-8
 s-6-2.9-10-2.9c-6.1,0-10.9,1.9-14.5,5.8c-3.6,3.8-5.4,9.5-5.4,17.1c0,8.2,1.8,14.3,5.4,18.4c3.6,4.1,8.4,6.1,14.2,6.1
 c2.9,0,5.8-0.6,8.7-1.7c2.9-1.1,5.4-2.5,7.5-4.1v-8.7H164.1z"
        />
        <path
          d="M233.5,70.4V1.7h22.3c8.4,0,13.9,0.3,16.5,1c3.9,1,7.2,3.3,9.9,6.7
 s4,7.9,4,13.4c0,4.2-0.8,7.8-2.3,10.6s-3.5,5.1-5.8,6.8s-4.8,2.7-7.2,3.3c-3.3,0.7-8.1,1-14.4,1h-9v25.9H233.5z M247.4,13.3v19.5
 h7.6c5.5,0,9.1-0.4,11-1.1s3.3-1.8,4.3-3.4s1.6-3.3,1.6-5.3c0-2.5-0.7-4.6-2.2-6.2s-3.3-2.6-5.6-3c-1.7-0.3-5-0.5-10-0.5H247.4z"
        />
        <path
          d="M352.4,70.4h-15.1l-6-15.6h-27.5l-5.7,15.6h-14.7l26.8-68.7h14.7
 L352.4,70.4z M326.8,43.2l-9.5-25.5l-9.3,25.5H326.8z"
        />
        <path d="M368.1,70.4V13.3h-20.4V1.7h54.6v11.6h-20.3v57.1H368.1z" />
        <path
          d="M411.3,70.4V1.7h13.9v27h27.2v-27h13.9v68.7h-13.9v-30h-27.2v30
 H411.3z"
        />
        <path
          d="M565.6,70.4h-15.1l-6-15.6h-27.5l-5.7,15.6h-14.7l26.8-68.7h14.7
 L565.6,70.4z M540.1,43.2l-9.5-25.5l-9.3,25.5H540.1z"
        />
        <path
          d="M573.1,70.4V1.7h13.5l28.1,45.9V1.7h12.9v68.7h-13.9L586,25.6v44.8
 H573.1z"
        />
        <path d="M641.9,70.4V1.7h13.9v68.7H641.9z" />
        <path
          d="M668.8,70.4V1.7h20.8L702,48.5l12.3-46.9h20.8v68.7h-12.9V16.3
 l-13.6,54.1h-13.4l-13.6-54.1v54.1H668.8z"
        />
        <path
          d="M810.9,70.4h-15.1l-6-15.6h-27.5l-5.7,15.6H742l26.8-68.7h14.7
 L810.9,70.4z M785.4,43.2l-9.5-25.5l-9.3,25.5H785.4z"
        />
        <path d="M826.6,70.4V13.3h-20.4V1.7h54.6v11.6h-20.3v57.1H826.6z" />
        <path d="M869.4,70.4V1.7h13.9v68.7H869.4z" />
        <path
          d="M893.7,36.5c0-7,1-12.9,3.1-17.6c1.6-3.5,3.7-6.6,6.4-9.4
 s5.7-4.8,8.9-6.2c4.3-1.8,9.2-2.7,14.8-2.7c10.1,0,18.2,3.1,24.3,9.4s9.1,15,9.1,26.2c0,11.1-3,19.8-9,26s-14.1,9.4-24.2,9.4
 c-10.2,0-18.3-3.1-24.4-9.4S893.7,47.4,893.7,36.5z M908,36c0,7.8,1.8,13.7,5.4,17.7s8.2,6,13.7,6s10.1-2,13.6-6s5.3-10,5.3-17.9
 c0-7.9-1.7-13.8-5.2-17.6s-8-5.8-13.8-5.8s-10.3,2-13.8,5.9S908,28.1,908,36z"
        />
        <path
          d="M971.3,70.4V1.7h13.5l28.1,45.9V1.7h12.9v68.7h-13.9l-27.7-44.8
 v44.8H971.3z"
        />
      </svg>
      <div :style="{'--progress-y': progress.y}" class="progress" />
    </template>
  </scroll-container>
</template>

<script>
import anime from 'animejs';
import ScrollContainer from '@/components/layouts/ScrollContainer';

export default {

  components: { ScrollContainer },

  data () {
    return {
      timeline: null,
      paths: []
    };
  },

  destroyed () {
    typeof this.timeline?.destroy === 'function' && this.timeline?.destroy();
  },

  mounted () {
    this.paths = Array.from(this.$el.querySelectorAll('path'));

    // const path = this.$refs.svg.querySelector('path');
    //

    const timeline = this.timeline = anime.timeline({
      autoplay: false,
      easing: 'linear'
    });

    timeline.add({
      targets: this.$el.querySelectorAll('.test-2'),
      duration: 600,
      opacity: [0, 1]
    });

    timeline.add({
      targets: this.$el.querySelectorAll('.test-3'),
      duration: 600,
      opacity: [0, 1]
    });
  },

  methods: {
    onProgress (value) {
      this.animateSvgPath(value.y, 0.9);
      const duration = Math.round(this.timeline.duration * value.y);
      this.timeline.seek(duration);
    },

    animateSvgPath (progress, offset = 1) {
      this.paths.forEach((path) => {
        const totalLength = path.getTotalLength();
        path.style.strokeDasharray = totalLength;
        path.style.strokeDashoffset = totalLength - totalLength * (Math.min(progress / offset, 1));
      });
    }
  }

};

</script>

<style lang="postcss" scoped>
.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(var(--progress-y) * 100%);
  height: 1em;
  background: black;

}

.test {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #333;

  &.test-1 {
    background: #ffffba;
  }

  &.test-2 {
    background: #bae1ff;
  }

  &.test-3 {
    background: #ffb3ba;
  }

  &:not(:first-child) {
    opacity: 0;
  }

  & h3 {
    font-size: em(48);
  }

  & p {
    font-size: em(32);
    text-align: center;
  }

  & .progress {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1em;

    &::before {
      display: block;
      width: calc(var(--progress-y) * 100%);
      height: 100%;
      content: "";
      background: black;
    }
  }
}

svg {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);

  & path {
    fill: none;
    stroke: black;
    stroke-dashoffset: var(--progress-y);
  }
}

</style>
