
import './style.css';

function initFonts (layoutName) {
  // FONTS
  const fonts = import('@/layouts/' + layoutName + '.vue?vue&type=script')
    .then(module => module.default)
    .then(layoutScript => {
      const fonts = layoutScript.data().fonts.preload;
      // set all font classes
      const classes = (Array.from(new Set([].concat(...fonts.map(font => getRegisteredFontClasses(font))))));
      document.documentElement.classList.add(...classes);

    })

  function getRegisteredFontClasses (options) {
    return [
      `font_${options['data-set']}`,
      `font_${options['data-set']}_${options['data-weight']}`
    ];
  }
}

initFonts('default');

// OTHERS

// set nuxt process.client
process.client = true;

// add js--visible class for molecules and atoms
const STYLE_CLASSES_JS_VISIBLE = 'js--visible';
document.body.classList.add(STYLE_CLASSES_JS_VISIBLE);
