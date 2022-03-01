// @ts-check
import Style from "./BottomNavigationBarButton.module.scss";
import { StoreIcon } from "components/lv0/Icon/StoreIcon";
import { observer } from "mobx-react-lite";
import {
  stateBottomNavigationBarButton,
  TypeBottomNavigationBarButton,
} from "./StateBottomNavigationBarButton";
import { LocationIcon } from "../Icon/LocationIcon";
import { SettingsIcon } from "../Icon/SettingsIcon";

export const BottomNavigationBarButton = observer(_BottomNavigationBarButton);

/**
 * @param {Object} props
 * @param {TypeBottomNavigationBarButton} props.type
 */
function _BottomNavigationBarButton(props) {
  const { type = TypeBottomNavigationBarButton.store } = props;

  const getStyle = () => {
    if (type === stateBottomNavigationBarButton.getCurrentButton) {
      return {
        icon: Style.Box_IconActive,
        text: Style.Box_TextActive,
      };
    }

    return {
      icon: Style.Box_Icon,
      text: Style.Box_Text,
    };
  };

  const onChange = (currentButton) => {
    if (!currentButton)
      throw new Error("currentButton param of onChange is empty");
    stateBottomNavigationBarButton.changeCurrentButton(currentButton);
  };

  if (type === TypeBottomNavigationBarButton.location) {
    return (
      <button onClick={() => onChange(type)} className={Style.Box}>
        <LocationIcon className={getStyle().icon} />
        <p className={getStyle().text}>Ubicación</p>
      </button>
    );
  }

  if (type === TypeBottomNavigationBarButton.settings) {
    return (
      <button onClick={() => onChange(type)} className={Style.Box}>
        <SettingsIcon className={getStyle().icon} />
        <p className={getStyle().text}>Ajustes</p>
      </button>
    );
  }

  return (
    <button onClick={() => onChange(type)} className={Style.Box}>
      <StoreIcon className={getStyle().icon} />
      <p className={getStyle().text}>Tiendas</p>
    </button>
  );
}

