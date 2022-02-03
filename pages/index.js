import {
  stateBottomNavigationBarButton,
  TypeBottomNavigationBarButton,
} from "components/lv0/BottomNavigationBarButton/StateBottomNavigationBarButton";
import { CategoryPage } from "components/lv1/CategoryPage/CategoryPage";
import { GoogleMapPage } from "components/lv1/MapaPage/MapaPage";
import { Scaffold } from "components/lv2/Scaffold/Scaffold";
import { observer } from "mobx-react-lite";
import Style from "./index.module.scss";

export default function Home() {
  return (
    <div className={Style.Box}>
      <Scaffold>
      <CurrentPage/>
      </Scaffold>
    </div>
  );
}

function _CurrentPage() {
  console.log();
  if (stateBottomNavigationBarButton.getCurrentButton === TypeBottomNavigationBarButton.store) {
    return <CategoryPage />;
  } else if (
    stateBottomNavigationBarButton.getCurrentButton === TypeBottomNavigationBarButton.location
  ) {
    return <GoogleMapPage />;
  }

  return <CategoryPage />;
}

const CurrentPage = observer(_CurrentPage);

// export default observer(Home);
