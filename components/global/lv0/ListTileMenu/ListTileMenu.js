// @ts-check
import Style from "./ListTileMenu.module.scss";
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {() => void} [props.onClick]
 */
export function ListTileMenu(props) {
  const { title = "", onClick } = props;

  return (
    <div onClick={() => onClick && onClick()} className={Style.Box}>
      {title}
    </div>
  );
}
