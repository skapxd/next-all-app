// @ts-check
import Style from "./ListTileMenu.module.scss";
/**
 * @param {Object} props
 * @param {string} props.title
 */
export function ListTileMenu(props) {
  const { title = "" } = props;

  return <div className={Style.Box}>{title}</div>;
}
