// @ts-check
import Style from "./PopupMenu.module.scss";
/**
 * @param {Object} props
 * @param {any} [props.children]
 * @param {string} [props.background]
 * @param {() => void} props.closePopup
 */
export function PopupMenu(props) {
  const { children = [], background = null, closePopup = () => {} } = props;

  return (
    <div className={Style.Box}>
      <div
        className={Style.Box_BoxBg}
        onClick={() => closePopup && closePopup()}
      ></div>
      <div
        style={{ backgroundColor: background }}
        className={Style.Box_BoxContent}
      >
        {children}
      </div>
    </div>
  );
}
