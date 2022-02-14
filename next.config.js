// @ts-check

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// module.exports = {
//   reactStrictMode: true,
// }

module.exports = withPWA({
  images: {
    domains: ["picsum.photos"],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    // maxInactiveAge: 60 * 60 * 1000,
    //
    // number of pages that should be kept simultaneously without being disposed
    // pagesBufferLength: Infinity,
  },
  poweredByHeader: false,
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
