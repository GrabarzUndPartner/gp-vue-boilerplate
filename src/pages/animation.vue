<template>
  <div>
    <div class="spacer" />
    <h2>Scroll-Container</h2>

    <test-scroll-container-a />
    <!-- <scroll-container /> -->

    <div class="spacer" />
    <div class="spacer" />
    <h2>Intersection</h2>
    <p>
      <strong>Left:</strong> Full Component,<br>
      <strong>Right:</strong> Partial Component
    </p>
    <div v-intersect="() => ({css: true, debug: true, absolute: true, clamp: true})" class="test-cols-a">
      <div>
        <div><div /></div>
      </div>
      <div>
        <div v-intersect="() => ({css: true, debug: true, absolute: true, clamp: true})">
          <div />
        </div>
      </div>
    </div>
    <div class="test-cols-b">
      <div v-for="(value, index) in Array(10).fill(0)" :key="index" v-intersect="() => ({css: true, debug: true, absolute: true, clamp: true})" :style="{height: `${100 /10 * (index+1)}%`}" class="test">
        <div />
      </div>
    </div>
    <div class="test-cols-c">
      <div v-for="(value, index) in Array(10).fill(0)" :key="index" v-intersect="() => ({css: true, debug: true, absolute: true, clamp: true})" :style="{height: `${100 /10 * (index+1)}%`}" class="test">
        <div />
      </div>
    </div>
    <div class="spacer" />

    <h2>Intersection (Prallax)</h2>
    <div v-intersect="() => ({css: true, debug: true, clamp: true})" class="parallax">
      <div><span>TranslateY (50%)</span></div>
      <div><span /></div>
      <div><span>TranslateY (50%) (Invert)</span></div>
    </div>
    <div class="spacer" />
    <h2>Fade In (Global) (Timeline)</h2>
    <div class="test-fade-in">
      <div v-for="(v, index) in Array(11).fill({})" :key="index" v-intersect="getFadeInIntersectionOptions(index / -11)">
        {{ Math.round((index / 10) * 100) }}%
      </div>
    </div>
    <h2>Fade In (Self) (Timeline)</h2>
    <div class="test-fade-in">
      <div v-for="(v, index) in Array(11).fill({})" :key="index" v-intersect="getFadeInIntersectionOptions(index / -11, false)">
        {{ Math.round((index / 10) * 100) }}%
      </div>
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
import TestScrollContainerA from '@/components/organisms/TestScrollContainerA.vue';
import ScrollContainer from '@/components/layouts/ScrollContainer.vue';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { ScrollContainer, TestScrollContainerA },
  layout: 'blank',
  data () {
    return {
      subscriptions: []
    };
  },
  destroyed () {
    this.subscriptions.forEach(v => v.unsubscribe());
  },
  methods: {
    getFadeInIntersectionOptions (offset, viewport = true) {
      return (el) => {
        return {
          toggle: true,
          type: viewport ? 'viewport' : 'self',
          triggerOffset: { x: 0, y: offset },
          css: true,
          clamp: true,
          timeline: {
            steps: [
              [{
                targets: el,
                opacity: [0, 1],
                duration: 350,
                easing: 'easeOutQuad'
              }, 0]
            ]
          }
        };
      };
    }
  }
};

</script>

<style lang="postcss" scoped>
.scroll-container {
  position: relative;
  height: calc(var(--rows) * 100vh);

  & > div {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% / var(--rows));

    & > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;

      &:first-child {
        opacity: 1;
      }
    }
  }
}

.test-cols-a {
  display: flex;
  height: 80vh;

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    & > div {
      position: relative;
      width: 50%;
      height: 50%;
      background: red;

      & div {
        position: absolute;
        top: 50%;
        display: flex;
        width: 100%;
        height: calc(100% * min(1 - var(--intersect), 1));
        background: green;
        transform: translateY(-50%);

      }
    }
  }
}

.test-cols-b {
  display: flex;
  align-items: center;
  height: 100vh;

  & > div {
    flex: 1;
  }

  & .test {
    position: relative;
    height: 15vh;
    background: red;

    & div {
      position: absolute;
      top: 50%;
      display: flex;
      width: 100%;
      height: calc(100% * min(1 - var(--intersect), 1));
      background: green;
      transform: translateY(-50%);

    }

  }
}

.test-cols-c {
  display: flex;
  align-items: center;
  height: 100vh;

  & > div {
    flex: 1;
  }

  & .test {
    position: relative;
    height: 15vh;
    background: blue;
    opacity: calc(min(1 - var(--intersect), 1));

  }
}

.test-fade-in {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 300px;
    font-size: 30px;
    color: white;
    text-align: center;
    background: red;
    opacity: 0;
  }

}

.parallax {
  display: flex;
  height: 50vh;
  border: dashed red 1px;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    & span {
      display: block;
      width: 50%;
      height: 50%;
      background: red;
    }

    &:first-child {
      & span {
        transform: translateY(calc(50% * var(--intersect)));
      }
    }

    &:last-child {
      & span {
        transform: translateY(calc(50% * -1 * var(--intersect)));
      }
    }
  }
}

.spacer {
  height: 100vh;
  background: #eee;
}

[data-intersect] {
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    content: "";
    border: dotted magenta 2px;
  }
}

</style>
