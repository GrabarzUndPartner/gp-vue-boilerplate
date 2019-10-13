import ExampleWorker from '@/worker/opencv.worker.js'; // worker files has to end in ".worker.js" - see nuxt.config.js

export default (context, inject) => {
  inject('worker', {
    createWorker () {
        console.log(ExampleWorker);
      return new ExampleWorker();
    }
  });
};