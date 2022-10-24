import Vue from 'vue';
import directiveVelocity from ':intersect-module/velocity';
import directiveIntersect from ':intersect-module/intersect';

const Intersect = {
  install (Vue, options) {
    directiveIntersect(Vue);
    directiveVelocity(Vue);
  }
};

Vue.use(Intersect);

