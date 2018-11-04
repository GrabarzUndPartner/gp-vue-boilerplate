import Vue from 'vue';
import { subscribeToScroll } from '../service/scroll';

const observedIntersections = new Map();
const viewport = { x: 0, y: 0 };
const offset = { x: 0, y: 0 };

Vue.component('intersect', {
  abstract: true,

  props: {
    threshold: {
      type: Array,
      required: false,
      default() {
        return [0];
      }
    },
    root: {
      type: getHTMLElement(),
      required: false,
      default() {
        return null;
      }
    },
    rootMargin: {
      type: String,
      required: false,
      default() {
        return '0px 0px 0px 0px';
      }
    }
  },

  mounted() {
    this.scrollObserver = subscribeToScroll(e => onScroll.bind(this)(e));
    this.intersectionObserver = new IntersectionObserver(
      onIntersect.bind(this),
      {
        threshold: buildThresholdList(),
        root: this.root,
        rootMargin: this.rootMargin
      }
    );
    this.intersectionObserver.observe(this.$slots.default[0].elm);
  },

  destroyed: function destroyed() {
    this.intersectionObserver.disconnect();
  },

  render: function render() {
    return this.$slots.default ? this.$slots.default[0] : null;
  }
});

function getHTMLElement() {
  if (typeof window === 'undefined') {
    return Object;
  }
  return window.HTMLElement;
}

function onScroll() {
  let bounds = this.$el.getBoundingClientRect();
  observedIntersections.forEach(item => {
    viewport.y = item.rootBounds.height;
    viewport.x = item.rootBounds.width;
    offset.x = (viewport.x - bounds.width) / 2;
    offset.y = (viewport.y - bounds.height) / 2;
    item.intersection.x = (bounds.left - offset.x) / (viewport.x - offset.x);
    item.intersection.y = (bounds.top - offset.y) / (viewport.y - offset.y);
    this.$emit('passing', item);
  });
}

function onIntersect([entry]) {
  if (!entry.isIntersecting) {
    observedIntersections.delete(entry.target);
    this.$emit('leave', entry);
  } else {
    entry.intersection = { x: 0, y: 0 };
    observedIntersections.set(entry.target, entry);
    this.$emit('enter', entry);
  }
}

function buildThresholdList() {
  var thresholds = [];
  var numSteps = 100;

  for (var i = 0; i <= numSteps; i++) {
    var ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
