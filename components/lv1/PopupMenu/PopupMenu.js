// @ts-check
import { ListTileMenu } from "components/lv0/ListTileMenu/ListTileMenu";
import { ScaffoldPopupMenu } from "components/lv0/ScaffoldPopupMenu/ScaffoldPopupMenu";
import Link from "next/link";
import { useState } from "react";

/**
 * @param {Object} props
 * @param {() => void} props.onClose
 * @param {boolean} props.show
 * @param {string} [props.background]
 *
 * @returns
 */
export function PopupMenu(props) {
  const { onClose = () => {}, show = false, background = null } = props;

  const [showLoginListTile, setShowLoginListTile] = useState(true);

  if (typeof localStorage !== "undefined") {
    var loginToken = localStorage.getItem("loginToken");
  }

  console.log({ loginToken });

  return (
    <>
      {show && (
        <ScaffoldPopupMenu
          background={background}
          closePopup={() => onClose && onClose()}
        >
          {!loginToken && (
            <Link href="/login">
              <a>
                <ListTileMenu title="Iniciar sesión" />
              </a>
            </Link>
          )}
          <ListTileMenu title="Registro" />
          <ListTileMenu title="Contactame" />
          <ListTileMenu title="Apoyame" />
          <ListTileMenu title="Reportar un error" />
          {loginToken && (
            <ListTileMenu
              onClick={() => {
                console.log("object2");
                localStorage.setItem("loginToken", "");
                setShowLoginListTile(false);
              }}
              title="Cerrar sesión"
            />
          )}
        </ScaffoldPopupMenu>
      )}
    </>
  );
}
