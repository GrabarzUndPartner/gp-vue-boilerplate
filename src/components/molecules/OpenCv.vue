<template>
  <div>
    <!-- opencv js downloaded at https://strmwr-cb94e.firebaseapp.com/work.js -->
    <script
      async
      src="/opencv.js"
      type="text/javascript"
      @load="ready"
    />
    <atom-canvas-image
      url="/original.jpg"
      @imagedata="onImageA"
    />
    <atom-canvas-image
      url="/original_cropped.jpg"
      @imagedata="onImageB"
    />
  </div>
</template>

<script>
import AtomCanvasImage from '@/components/atoms/canvas/Image';

export default {
  components: {
    AtomCanvasImage
  },

  mounted () {
    let worker = this.$worker.createWorker();
    worker.postMessage({ action: 'expensive', time: '22982198491' });
    setTimeout(() => {
        this.prepare();
      }, 1000);
  },

  methods: {
    ready () {
      console.log('TOLL');
      
      global.cv.onRuntimeInitialized = this.prepare;

    },

    prepare () {
      console.log('HURRA', this);
      const srcA = global.cv.matFromImageData(this.imageDataA);
      const srcB = global.cv.matFromImageData(this.imageDataB);
      // let src = global.cv.imread(this.imageData);
      console.log(srcA);
      const orb = new global.cv.ORB();
      const kpA = new global.cv.KeyPointVector();
      const descriptorsA = new global.cv.Mat();
      const kpB = new global.cv.KeyPointVector();
      const descriptorsB = new global.cv.Mat();
      const mask = new global.cv.Mat();
      orb.detectAndCompute(srcA, mask, kpA, descriptorsA, false);
      orb.detectAndCompute(srcB, mask, kpB, descriptorsB, false);

      // let dm = new global.cv.DMatchVector();
      // console.log(global.cv.NORM_HAMMING);
      // let matcher = new global.cv.BFMatcher(global.cv.NORM_HAMMING, true);
      // matcher.match(descriptorsA, descriptorsB, dm);
      // console.log(matcher);

      const matches = new global.cv.DMatchVectorVector();
      const bf = new global.cv.BFMatcher(2, false);
      bf.knnMatch(descriptorsA, descriptorsB, matches, 2, mask, false);

      const ratio = .5, good = new global.cv.DMatchVectorVector();
      for (let i = 0; i < matches.size(); i++) {
        const m = matches.get(i).get(0), n = matches.get(i).get(1);
        if (m.distance < ratio * n.distance) {
          const t = new global.cv.DMatchVector();
          t.push_back(m);
          good.push_back(t);  
        }
      } 
      console.log('AJA');
      var obj = new global.cv.Point2fVector();
      var scene = new global.cv.Point2fVector();
      for (let i = 0; i < matches.size(); i++) {
        if (matches.get(i).size() < 2) {
            continue;
        } // SKIP IF NOT TWO PTS
        const m = matches.get(i).get(0),
            n = matches.get(i).get(1);  
        const passedRatioTest = m.distance < ratio * n.distance;
        if (passedRatioTest && m.distance < 100) {          
            obj.push_back(kpA.get(m.queryIdx).pt);
            scene.push_back(kpB.get(m.trainIdx).pt);
        }
      }
      console.log(obj, scene);
      
    //   if (good.length>1) { 
        console.log(global.cv.findHomographyEasyMask(obj, scene, global.cv.FM_RANSAC, 3.0, mask)); 
    // }

      // const bestMatches = dm.sort(
      //   (match1, match2) => match1.distance - match2.distance
      // );
      // console.log(dm.size());

      // let matchingImage = new global.cv.Mat();
      // global.cv.drawMatchesKnn(srcA, descriptorsA, srcB, descriptorsB, dm, global.cv.KeyPointVector);

      // let dm = new global.cv.DMatchVector();
      // let matcher = new global.cv.BFMatcher();
      // matcher.match(descriptors, descriptors, dm);
      // const matchingImage = new global.cv.Mat();
      // global.cv.drawMatchesKnn(src, descriptors, src, descriptors, dm, matchingImage);
      // console.log(src, descriptors);
    },

    onImageA (e) {
      console.log(e);
      this.imageDataA = e;
    },

    onImageB (e) {
      console.log(e);
      this.imageDataB = e;
    },
  }
};
</script>

<style lang="postcss" scoped>
</style>
