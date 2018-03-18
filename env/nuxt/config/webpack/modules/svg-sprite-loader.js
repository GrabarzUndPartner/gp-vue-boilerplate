module.exports = function (rules) {
  return {
    env: {
      development: true,
      production: true,
      build: true,
      static: true
    },
    module: {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            esModule: false
          }
        }, {
          loader: 'svgo-loader',
          options: {
            plugins: [{
              cleanupAttrs: true,
              removeDoctype: true,
              removeXMLProcInst: true,
              removeComments: true,
              removeMetadata: true,
              removeTitle: true,
              removeDesc: true,
              removeUselessDefs: true,
              removeXMLNS: true,
              removeEditorsNSData: true,
              removeEmptyAttrs: true,
              removeHiddenElems: false,
              removeEmptyText: true,
              removeEmptyContainers: true,
              removeViewBox: true,
              cleanupEnableBackground: true,
              minifyStyles: true,
              convertStyleToAttrs: true,
              convertColors: true,
              convertPathData: true,
              convertTransform: true,
              removeUnknownsAndDefaults: true,
              removeNonInheritableGroupAttrs: true,
              removeUselessStrokeAndFill: true,
              removeUnusedNS: true,
              cleanupIDs: true,
              cleanupNumericValues: true,
              cleanupListOfValues: true,
              moveElemsAttrsToGroup: true,
              moveGroupAttrsToElems: true,
              collapseGroups: true,
              mergePaths: true,
              convertShapeToPath: true,

              // WARNING!!!! Do not change!
              sortAttrs: false,
              removeDimensions: false,
              removeAttrs: false,
              removeElementsByAttr: false,
              addClassesToSVGElement: false,
              addAttributesToSVGElement: false,
              removeStyleElement: false,
              removeScriptElement: false
              // WARNING!!!!
            }]
          }
        }
      ]
    }
  };
};
