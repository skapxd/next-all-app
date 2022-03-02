// @ts-check
import { userBloc } from "Bloc/UserBloc";
import { ListTileMenu } from "components/lv0/ListTileMenu/ListTileMenu";
import { ScaffoldPopupMenu } from "components/lv0/ScaffoldPopupMenu/ScaffoldPopupMenu";
import { observer } from "mobx-react-lite";
import Link from "next/link";

export const PopupMenu = observer(_PopupMenu);
/**
 * @param {Object} props
 * @param {() => void} props.onClose
 * @param {boolean} props.show
 * @param {string} [props.background]
 */
function _PopupMenu(props) {
  const { onClose = () => {}, show = false, background = null } = props;

  return (
    <>
      {show && (
        <ScaffoldPopupMenu
          background={background}
          closePopup={() => onClose && onClose()}
        >
          {!userBloc.getToken && (
            <Link href="/login">
              <a>
                <ListTileMenu title="Iniciar sesión" />
              </a>
            </Link>
          )}

          {userBloc.getToken && (
            <ListTileMenu
              onClick={() => {
                userBloc.closeSession();
              }}
              title="Cerrar sesión"
            />
          )}
          {!userBloc.getToken && (
            <Link href="/register">
              <a>
                <ListTileMenu title="Registro" />
              </a>
            </Link>
          )}
          <ListTileMenu title="Contactame" />
          <ListTileMenu title="Apoyame" />
          <ListTileMenu title="Reportar un error" />
        </ScaffoldPopupMenu>
      )}
    </>
  );
}
