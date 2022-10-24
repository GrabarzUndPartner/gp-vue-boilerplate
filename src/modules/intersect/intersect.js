/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
import { ipoint, calc } from '@js-basics/vector';
import { map } from 'rxjs/operators';
import { resizeObserver } from './services/window';
import { viewportObserver } from './services/viewport';

export const registerIntersect = (vnode, el, options) => {
  const context = vnode.componentInstance || vnode.context;
  const intersect = new Intersect(options);
  const onResize = () => {
    const { top, left, width, height } = el.getBoundingClientRect();
    el.setAttribute('data-intersect', true);
    el._intersectOptions = {
      dimension: ipoint(width, height),
      position: ipoint(left, top + global.scrollY)
    };
  };
  context.$nextTick(() => {
    onResize();
    el._intersectSubscriptions = [
      resizeObserver.subscribe(onResize),
      viewportObserver.pipe(calcIntersection(el, options))
        .subscribe(intersections => onIntersect({ intersections, vnode, el, intersect }))
    ];
  });
  return {
    intersect,
    destroy: () => el._intersectSubscriptions?.forEach(subscription => subscription.unsubscribe())
  };
};

const calcIntersection = (el, options) => source => source.pipe(map(([screen, { position }]) => {
  const { dimension, position: elPosition } = el._intersectOptions;

  let self = calc(() => ((elPosition - position) + (dimension - screen) / 2) / dimension * -1);
  // exclude dimension
  // let viewport = calc(() => self.y / ((screen - dimension) / (dimension) / 2));
  // with dimension
  let viewport = calc(() => self.y / ((screen + dimension) / (dimension) / 2));

  if (options.clamp) {
    self = calc(() => Math.min(Math.max(self, -1), 1));
    viewport = calc(() => Math.min(Math.max(viewport, -1), 1));
  }
  if (options.absolute) {
    self = calc(() => Math.abs(self));
    viewport = calc(() => Math.abs(viewport));
  }

  return {
    self, viewport
  };
}));

export default (Vue) => {
  Vue.directive('intersect', {
    bind: (el, binding, vnode) => {
      if (!!binding.value && typeof binding.value === 'function') {
        vnode._intersect = registerIntersect(vnode, el, binding.value ? binding.value(el) : {});
      } else {
        throw new Error('Intersect options must be a function!');
      }
    },
    unbind (el, binding, vnode) {
      vnode._intersect?.destroy();
    }

  });
};

const onIntersect = async ({ intersections, vnode, el, intersect, elementObserver }) => {
  // timeline
  if (!el._intersectTriggered && intersections[intersect.type].y >= intersect.triggerOffset.y) {
    el._intersectTriggered = true;

    await intersect.timelineReady();

    if (intersect.timeline) {
      intersect.triggerDeferred && await intersect.triggerDeferred.promise;
      vnode.context.$nextTick(() => {
        intersect.timeline.direction = 'normal';
        intersect.timeline.play();
      });
    } else if (intersect.styleClasses.length) {
      el.classList.add(...intersect.styleClasses);
    }
  } else if (el._intersectTriggered && intersect.toggle && intersections[intersect.type].y < intersect.triggerOffset.y) {
    if (intersect.timeline && intersect.timeline.completed) {
      vnode.context.$nextTick(async () => {
        intersect.timeline.reverse();
        intersect.timeline.play();
        await intersect.timeline.finished;
        el._intersectTriggered = false;
      });
    } else if (intersect.styleClasses.length) {
      el.classList.remove(...intersect.styleClasses);
      el._intersectTriggered = false;
    }
  }

  // vars

  if (intersect.debug) {
    el.setAttribute('data-intersect', intersections.viewport.y);
    el.setAttribute('data-intersect-self', intersections.self.y);
  }
  if (intersect.css) {
    el.style.setProperty('--intersect', intersections.viewport.y);
    el.style.setProperty('--intersect-self', intersections.self.y);
  }

  if (intersect.callback) {
    intersect.callback(intersections);
  }

  if (vnode.componentInstance) {
    // trigger event on defined componente
    vnode.componentInstance.$emit('intersect', intersections);
  } else if (vnode.data.on && vnode.data.on.intersect) {
    // trigger event on vnode (e.g. span)
    vnode.data.on.intersect(intersections);
  }
};

class Intersect {
  #debug = false;
  #css = false;
  #toggle = false;
  #styleClasses = [];
  #callback;
  #breakpoints = {};
  #triggerDeferred;
  #triggerOffset = ipoint(0, 0);
  #type;
  #timeline;
  #timelineInstance;

  toJSON () {
    return {
      debug: this.#debug,
      css: this.#css,
      toggle: this.#toggle,
      styleClasses: this.#styleClasses,
      breakpoints: this.#breakpoints,
      triggerOffset: this.#triggerOffset,
      type: this.#type,
      timeline: this.#timeline
    };
  }

  constructor (options) {
    const {
      debug,
      callback,
      css,
      toggle,
      styleClasses,
      breakpoints,
      triggerDeferred,
      triggerOffset,
      type = 'viewport',
      timeline
    } = options || {};
    this.#debug = debug || this.#debug;
    this.#callback = callback || this.#callback;
    this.#breakpoints = breakpoints || this.#breakpoints;
    this.#css = css || this.#css;
    this.#toggle = toggle || this.#toggle;
    this.#styleClasses = styleClasses || this.#styleClasses;
    this.#triggerDeferred = triggerDeferred || this.#triggerDeferred;
    this.#triggerOffset = triggerOffset || this.#triggerOffset;
    this.#type = type || this.#type;
    this.#timeline = timeline;
  }

  async timelineReady () {
    if (!this.#timeline) {
      return;
    }
    this.#timelineInstance = await createTimeline(this.#timeline);
    return this.#timelineInstance;
  }

  get callback () {
    return this.#callback;
  }

  get triggerDeferred () {
    return this.#triggerDeferred;
  }

  get debug () {
    return this.#debug;
  }

  get timeline () {
    return this.#timelineInstance;
  }

  get triggerOffset () {
    return this.getBreakpointOptions()?.triggerOffset || this.#triggerOffset;
  }

  get type () {
    return this.getBreakpointOptions()?.type || this.#type;
  }

  get toggle () {
    return this.getBreakpointOptions()?.toggle || this.#toggle;
  }

  get styleClasses () {
    return this.getBreakpointOptions()?.styleClasses || this.#styleClasses;
  }

  get css () {
    return this.getBreakpointOptions()?.css || this.#css;
  }

  getBreakpointOptions () {
    const width = Object.keys(this.#breakpoints).map(v => parseInt(v)).sort().find(width => width >= global.innerWidth);
    return this.#breakpoints[Number(width)];
  }
}

export const createTimeline = async ({ steps, options }) => {
  const anime = await import('animejs').then(module => module.default);
  const tl = anime.timeline({ autoplay: false, ...options || {} });
  steps.filter(Boolean).forEach((step) => {
    tl.add(...step);
  });
  return tl;
};
