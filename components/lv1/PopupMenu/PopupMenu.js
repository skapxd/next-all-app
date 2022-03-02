// @ts-check
import { userBloc } from "Bloc/UserBloc";
import { MenuIcon } from "components/lv0/Icon/MenuIcon";
import { ListTileMenu } from "components/lv0/ListTileMenu/ListTileMenu";
import { ScaffoldPopupMenu } from "components/lv0/ScaffoldPopupMenu/ScaffoldPopupMenu";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { loginPathName } from "pages/login";
import { registerPathName } from "pages/register";
import { useEffect, useState } from "react";

export const PopupMenu = observer(_PopupMenu);
/**
 * @param {Object} props
 * @param {string} [props.background]
 * @param {number} [props.zIndex=1000]
 */
function _PopupMenu(props) {
  let { background = null, zIndex = 1000 } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (userBloc.getToken) return;
    setShow(false);
  }, [userBloc.getToken]);

  return (
    <>
      <MenuIcon onClick={() => setShow(true)} />
      <div
        style={{
          zIndex,
          width: "100%",
          maxWidth: "430px",
          top: 0,
          marginLeft: "-16px",
          position: "fixed",
        }}
      >
        {show && (
          <ScaffoldPopupMenu
            background={background}
            closePopup={() => {
              setShow(false);
            }}
          >
            {!userBloc.getToken && (
              <Link href={loginPathName("validateUserName")}>
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
              <Link href={registerPathName("registerEmail")}>
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
      </div>
    </>
  );
}
