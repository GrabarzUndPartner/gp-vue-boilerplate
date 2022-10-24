// import { getElementObserver } from 'nuxt-speedkit/classes/intersection';

export default (Vue) => {
  // const subscriptions = new Map();
  Vue.directive('velocity', {
    // bind: function (el, binding, vnode) {
    //   // const context = vnode.context;

    //   // const elementObserver = getElementObserver(el);
    //   // elementObserver.enterView(() => {
    //   // let test;
    //   // let lastVelocity;
    //   // const { abs } = binding.value || {};
    //   // subscriptions.set(el, vnode.context.$getTimer().getVelocity().subscribe((velocity) => {
    //   //   global.cancelAnimationFrame(test);
    //   //   test = global.requestAnimationFrame(() => {
    //   //     if (velocity !== lastVelocity) {
    //   //       // el.style.setProperty('--velocity', abs ? Math.abs(velocity) : velocity);
    //   //     }
    //   //   });
    //   // }));
    //   // });
    //   // elementObserver.leaveView(() => {
    //   //   subscriptions.get(el)?.unsubscribe();
    //   // });
    //   // context._velocityElementObserver = elementObserver;
    // },
    // unbind (el, binding, vnode) {
    //   subscriptions.get(el)?.unsubscribe();
    //   vnode.context._velocityElementObserver.destroy();
    // }
  });
};
