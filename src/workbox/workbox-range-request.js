/* global workbox */
workbox.routing.registerRoute(
  /.*\.(mp4|webm)/,
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.rangeRequests.RangeRequestsPlugin()
    ]
  }),
  'GET'
);
