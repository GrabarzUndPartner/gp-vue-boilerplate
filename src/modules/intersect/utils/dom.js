import { ipoint } from '@js-basics/vector';

export const getScrollPosition = () => ipoint(global.scrollX, global.scrollY);
export const getElBounds = (el) => {
  const { top, left, width, height } = el.getBoundingClientRect();
  return {
    position: ipoint(left, top),
    dimension: ipoint(width, height)
  };
};
