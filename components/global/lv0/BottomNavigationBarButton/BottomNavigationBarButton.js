// @ts-check
import Style from "./BottomNavigationBarButton.module.scss";
import { StoreIcon } from "components/global/lv0/Icon/StoreIcon";
import { observer } from "mobx-react-lite";
import { LocationIcon } from "../Icon/LocationIcon";
import { useChangeUrl } from "hooks/useChangeUrl";
import { CurrentPageRoot } from "pages";
import { PlaceholderPeopleIcon } from "../Icon/PlaceholderPeopleIcon";

export const BottomNavigationBarButton = observer(_BottomNavigationBarButton);

/**
 * @param {Object} props
 * @param {CurrentPageRoot} props.type
 */
function _BottomNavigationBarButton(props) {
  const { type = CurrentPageRoot.store } = props;

  /**@type {CurrentPageRoot} */
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

  /** @param {CurrentPageRoot} currentButton   */
  const onChange = (currentButton) => {
    router.push(`/?page=${currentButton}`);
  };

  return (
    <>
      {type === CurrentPageRoot.location && (
        <button onClick={() => onChange(type)} className={Style.Box}>
          <LocationIcon className={getStyle().icon} />
          <p className={getStyle().text}>Ubicación</p>
        </button>
      )}

      {type === CurrentPageRoot.cuenta && (
        <button onClick={() => onChange(type)} className={Style.Box}>
          <PlaceholderPeopleIcon className={getStyle().icon} />
          <p className={getStyle().text}>Cuenta</p>
        </button>
      )}

      {type === CurrentPageRoot.store && (
        <button onClick={() => onChange(type)} className={Style.Box}>
          <StoreIcon className={getStyle().icon} />
          <p className={getStyle().text}>Tiendas</p>
        </button>
      )}
    </>
  );
}
