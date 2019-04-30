import Vue from 'vue';
import svg4everybody from 'svg4everybody';

Vue.component('svg-symbol', {
  props: {
    src: {
      type: Object,
      required: false,
      default: null
    },
    polyfill: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    url () {
      return this.src.url.replace(/-usage$/, '');
    }
  },

  mounted () {
    svg4everybody({ polyfill: this.isIE11() || this.polyfill });
  },

  methods: {
    isIE11 () {
      if (!this.$isServer) {
        return !!window.MSInputMethodContext && !!document.documentMode;
      }
      return false;
    }
  },

  render (createElement) {
    const use = createElement('use', {
      attrs: {
        'xlink:href': this.url
      }
    });

    const svg = createElement(
      'svg',
      {
        attrs: {
          viewBox: this.src.viewBox,
          width: '100%',
          height: '100%'
        }
      },
      [use]
    );
    return svg;
  }
});
