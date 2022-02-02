// @ts-check

exports.AppTemplate = function templateApp({
  appleMobileWebAppCapable = "",
  appleTouchIcon = "",
  appleLaunchImage = "",
}) {
  console.log({
    appleMobileWebAppCapable,
    appleTouchIcon,
    appleLaunchImage,
  });

  appleLaunchImage = appleLaunchImage.replaceAll('public/', '')
  
  return `
import Head from "next/head";

import "styles/normalize.css";
import "styles/globals.css";
import Style from "./_app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>All App</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta name="theme-color" content="#252833" />

        ${appleMobileWebAppCapable}
        ${appleTouchIcon}
        ${appleLaunchImage}
      </Head>
      <div className={Style.app_Scaffold}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
`;
};
