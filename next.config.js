// @ts-check

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const isProduction = process.env.NODE_ENV === "production";

const cors = {
  // matching all API routes
  source: "/api/:path*",
  headers: [
    { key: "Access-Control-Allow-Credentials", value: "true" },
    { key: "Access-Control-Allow-Origin", value: "*" },
    {
      key: "Access-Control-Allow-Methods",
      value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
    {
      key: "Access-Control-Allow-Headers",
      value:
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    },
  ],
};

const feat = {
  source: "/",
  headers: [
    {
      key: "Permissions-Policy",
      value: "web-share *",
    },
  ],
};

const feat2 = {
  source: "/",
  headers: [
    {
      key: "Feature-Policy",
      value: "web-share *",
    },
  ],
};

module.exports = withPWA({
  headers: async () => [cors, feat, feat2],
  images: {
    domains: ["picsum.photos"],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: isProduction ? 60 * 60 * 1000 : 0,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: isProduction ? 100 : 0,
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
