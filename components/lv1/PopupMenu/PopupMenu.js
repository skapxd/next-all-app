// @ts-check
import { ListTileMenu } from "components/lv0/ListTileMenu/ListTileMenu";
import { ScaffoldPopupMenu } from "components/lv0/ScaffoldPopupMenu/ScaffoldPopupMenu";
import Link from "next/link";

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

  return (
    <>
      {show && (
        <ScaffoldPopupMenu
          background={background}
          closePopup={() => onClose && onClose()}
        >
          <Link href="/login">
            <a>
              <ListTileMenu title="Iniciar sesión" />
            </a>
          </Link>
          <ListTileMenu title="Registro" />
          <ListTileMenu title="Contactame" />
          <ListTileMenu title="Apoyame" />
        </ScaffoldPopupMenu>
      )}
    </>
  );
}
