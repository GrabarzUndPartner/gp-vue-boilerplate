import jsfeat from 'jsfeat';

import { subMatchCorners, find_transform, tCorners } from '@/utils/jsfeat/feature';

export default class Pattern {
  constructor() {
    this.matrix = null;

    this.splitRules = [
      { x: 0.0, y: 0.0, w: 0.5, h: 0.5 },
      { x: 0.5, y: 0.0, w: 0.5, h: 0.5 },
      { x: 0.0, y: 0.5, w: 0.5, h: 0.5 },
      { x: 0.5, y: 0.5, w: 0.5, h: 0.5 }
    ];

    // this.splitRules = [
    //   { x: 0.0, y: 0, w: 0.5, h: 1 },
    //   { x: 0.5, y: 0, w: 0.5, h: 1 }
    // ];
    // this.splitRules = [
    //   { x: 0, y: 0, w: 1, h: 1 }
    // ];
  }

  setup (dimension) {
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
  }

  detect (options, pattern) {
    if (this.detectPromise) {
      return this.detectPromise;
    }

    this.detectPromise = this.matchCorners(options, pattern.descriptors)
      .then(({ matches, corners }) => {

        const numGoodMatches = find_transform(matches, corners, pattern.corners);
        let shape = [];
        // console.log('numGoodMatches', numGoodMatches, matches, corners);
        if (numGoodMatches > 8) {
          // what is the right dimension?
          // https://github.com/inspirit/jsfeat/blob/gh-pages/sample_orb.html#L507
          shape = tCorners(pattern.matrix.rows, pattern.matrix.cols);
          // console.log('found', matches);
        }

        return {
          matrix: this.matrix,
          corners: {
            list: corners,
            count: corners.length
          },
          shape: shape
        };
      })
      .finally(() => {
        this.detectPromise = undefined;
      });

    return this.detectPromise;
  }

  matchCorners (options, pattern) {
    const { context, width, height } = options;

    const matches = this.splitRules.map(async ({ x, y, w, h }) => {
      const imageData = context.getImageData(Math.floor(width * x), Math.floor(height * y), Math.floor(width * w), Math.floor(height * h));
      const matchGroup = await subMatchCorners(imageData, pattern);
      matchGroup.corners.forEach(corner => {
        corner.x = corner.x + Math.floor(width * x);
        corner.y = corner.y + Math.floor(height * y);
      });
      return matchGroup;
    });

    return Promise.all(matches)
      .then(allMatches => {
        let offset = 0;
        const resCorners = [];
        const resMatches = [];

        allMatches.forEach(({ matches, corners }) => {
          matches.forEach(match => {
            match.screen_idx += offset;
          });
          offset += corners.length;
          resMatches.push(...matches);
          resCorners.push(...corners);
        });
        return { corners: resCorners, matches: resMatches };
      });

  }
}
