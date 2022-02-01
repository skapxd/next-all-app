import 'styles/normalize.css'
import 'styles/globals.css'
import Style from "./_app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={Style.app_Scaffold} >
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
