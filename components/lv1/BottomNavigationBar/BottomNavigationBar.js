import { userBloc } from "Bloc/UserBloc";
import { BottomNavigationBarButton } from "components/lv0/BottomNavigationBarButton/BottomNavigationBarButton";
import { TypeBottomNavigationBarButton } from "components/lv0/BottomNavigationBarButton/StateBottomNavigationBarButton";
import { observer } from "mobx-react-lite";
import Style from "./BottomNavigationBar.module.scss";

function _BottomNavigationBar() {
  return (
    <div className={Style.Box}>
      <BottomNavigationBarButton type={TypeBottomNavigationBarButton.store} />
      <BottomNavigationBarButton
        type={TypeBottomNavigationBarButton.location}
      />

      {userBloc.token && (
        <BottomNavigationBarButton
          type={TypeBottomNavigationBarButton.settings}
        />
      )}
    </div>
  );
}

export const BottomNavigationBar = observer(_BottomNavigationBar);
