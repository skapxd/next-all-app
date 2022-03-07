// @ts-check
import { userBloc } from "Bloc/UserBloc";
import { CategoryPage } from "components/lv1/CategoryPage/CategoryPage";
import { GoogleMapPage } from "components/lv1/MapaPage/MapaPage";
import { Scaffold } from "components/lv2/Scaffold/Scaffold";
import { SettingsPage } from "components/lv2/SettingsPage/SettingsPage";
import { useChangeUrl } from "hooks/useChangeUrl";
import { useSetHeight } from "hooks/useSetHeight";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Style from "./index.module.scss";

export class CurrentPageRoot {
  static store = "";
  static location = "location";
  static settings = "settings";
}

// export async function getStaticProps(){

//   const listOfStore = await getListOfStore('Todo')

//   const _ = listOfStore.map(e => {
//     if (e.status === "rejected") return ;
//     return e.value
//   })

//   console.log({_});
//   return {
//     props: {
//       listOfStore: _,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   }
// }

/** @param {CurrentPageRoot} page */
export const rootPathName = (page) => `/?page=${page}`;

export default function Root(props) {
  useSetHeight();

  useEffect(() => {
    userBloc.setToken();
  }, []);

  return (
    <div className={Style.Box}>
      <Scaffold>
        <CurrentPage listOfStore={props.listOfStore} />
      </Scaffold>
    </div>
  );
}

const CurrentPage = observer(_CurrentPage);

function _CurrentPage(props) {
  const { currentPage } = useChangeUrl({
    queryParam: "page",
  });

  return (
    <>
      {currentPage === CurrentPageRoot.store && (
        <CategoryPage listOfStore={props.listOfStore} />
      )}

      {currentPage === CurrentPageRoot.location && (
        <GoogleMapPage />
      )}

      {currentPage === CurrentPageRoot.settings && (
        <SettingsPage />
      )}
    </>
  );
}
