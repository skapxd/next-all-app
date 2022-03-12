// @ts-check
import { userBloc } from "Bloc/UserBloc";
import { BottomNavigationBarButton } from "components/global/lv0/BottomNavigationBarButton/BottomNavigationBarButton";
import { observer } from "mobx-react-lite";
import { CurrentPageRoot } from "pages";
import Style from "./BottomNavigationBar.module.scss";

export const BottomNavigationBar = observer(_BottomNavigationBar);

function _BottomNavigationBar() {
  return (
    <div className={Style.Box}>
      <BottomNavigationBarButton type={CurrentPageRoot.store} />
      <BottomNavigationBarButton type={CurrentPageRoot.location} />

      {userBloc.token && (
        <BottomNavigationBarButton type={CurrentPageRoot.settings} />
      )}
    </div>
  );
}
