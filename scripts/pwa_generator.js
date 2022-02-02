// @ts-check
const fs = require("fs");
const PWAAssetsGenerator = require("pwa-asset-generator");
const { AppTemplate } = require("./_app_template");
// const { ManifestTemplate } = require("./manifest_template");

(async () => {
  const { savedImages, htmlMeta, manifestJsonContent } =
    await PWAAssetsGenerator.generateImages(
      "public/assets/All_App.png",
      "./public/assets",
      {
        xhtml: true,
        background: "#1A1A18",
        log: false,
        // index: "",
        // manifest:"./public",
        // favicon: true,
        // scrape: false,
        // background: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
        // splashOnly: true,
        // portraitOnly: true,
        // landscapeOnly: true,
        // iconOnly: true,
      }
    );

  const createAppJS = () => {
    const appTemplate = AppTemplate({
      appleMobileWebAppCapable: htmlMeta.appleMobileWebAppCapable,
      appleTouchIcon: htmlMeta.appleTouchIcon,
      appleLaunchImage: htmlMeta.appleLaunchImage,
    });

    fs.writeFileSync("./pages/_app.js", appTemplate, { encoding: "utf-8" });
  };

  // const createManifestJSON = () => {
  //   const manifestTemplate = ManifestTemplate(manifestJsonContent);

  //   // fs.writeFileSync("./public/manifest.json", manifestTemplate, {
  //   //   encoding: "utf-8",
  //   // });
  // };

  createAppJS()
  // createManifestJSON()
})();
