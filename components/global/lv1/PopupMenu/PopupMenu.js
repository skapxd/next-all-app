// @ts-check
import { userBlocInstance } from "Bloc/UserBloc/UserBloc";
import { MenuIcon } from "components/global/lv0/Icon/MenuIcon";
import { ListTileMenu } from "components/global/lv0/ListTileMenu/ListTileMenu";
import { ScaffoldPopupMenu } from "components/global/lv0/ScaffoldPopupMenu/ScaffoldPopupMenu";
import { loginPathName } from "components/LoginPage/LoginPage";
import { observer } from "mobx-react-lite";
import Link from "next/link";
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
    if (userBlocInstance.getToken) return;
    setShow(false);
  }, [userBlocInstance.getToken]);

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
            {!userBlocInstance.getToken && (
              <Link href={loginPathName("getCode")}>
                <a>
                  <ListTileMenu title="Iniciar sesión" />
                </a>
              </Link>
            )}

            {userBlocInstance.getToken && (
              <ListTileMenu
                onClick={() => {
                  userBlocInstance.closeSession();
                }}
                title="Cerrar sesión"
              />
            )}

            <ListTileMenu title="Contactame" />
            <ListTileMenu title="Favoritos" />
            <ListTileMenu title="Reportar un error" />
          </ScaffoldPopupMenu>
        )}
      </div>
    </>
  );
}
