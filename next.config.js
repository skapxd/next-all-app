// @ts-check

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const isProduction = process.env.NODE_ENV === "production";

// module.exports = {
//   reactStrictMode: true,
// }

module.exports = withPWA({
  images: {
    domains: ["picsum.photos"],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: isProduction ? 60 * 60 * 1000 : 0,
    //
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: isProduction ? Infinity : 0,
  },
  poweredByHeader: false,
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: isProduction ? false : true,
  },
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "es-ES"],
    defaultLocale: "es-ES",
    localeDetection: true,
  },
});
