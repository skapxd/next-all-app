// @ts-check
import Style from "./BottomNavigationBarButton.module.scss";
import { StoreIcon } from "components/lv0/Icon/StoreIcon";
import { observer } from "mobx-react-lite";
import { TypeBottomNavigationBarButton } from "./StateBottomNavigationBarButton";
import { LocationIcon } from "../Icon/LocationIcon";
import { SettingsIcon } from "../Icon/SettingsIcon";
import { useChangeUrl } from "hooks/useChangeUrl";

export const BottomNavigationBarButton = observer(_BottomNavigationBarButton);

/**
 * @param {Object} props
 * @param {TypeBottomNavigationBarButton} props.type
 */
function _BottomNavigationBarButton(props) {
  const { type = TypeBottomNavigationBarButton.store } = props;

  /**@type {TypeBottomNavigationBarButton} */
  const typeCurrentPage = null;
  const { currentPage, router } = useChangeUrl({
    typeCurrentPage,
    queryParam: "page",
  });

  const getStyle = () => {
    if (type === currentPage) {
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

  /** @param {TypeBottomNavigationBarButton} currentButton   */
  const onChange = (currentButton) => {
    router.push(`/?page=${currentButton}`);
  };

  return (
    <>
      {type === TypeBottomNavigationBarButton.location && (
        <button onClick={() => onChange(type)} className={Style.Box}>
          <LocationIcon className={getStyle().icon} />
          <p className={getStyle().text}>Ubicación</p>
        </button>
      )}

      {type === TypeBottomNavigationBarButton.settings && (
        <button onClick={() => onChange(type)} className={Style.Box}>
          <SettingsIcon className={getStyle().icon} />
          <p className={getStyle().text}>Ajustes</p>
        </button>
      )}

      {type === TypeBottomNavigationBarButton.store && (
        <button onClick={() => onChange(type)} className={Style.Box}>
          <StoreIcon className={getStyle().icon} />
          <p className={getStyle().text}>Tiendas</p>
        </button>
      )}
    </>
  );

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
