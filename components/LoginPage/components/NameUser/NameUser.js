// @ts-check
import Style from "./NameUser.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.name]
 * @returns
 */
export function NameUser(props) {
  let { name } = props;

  name ??= "";

  return (
    <div className={Style.BoxName}>
      <div className={Style.BoxName_Icon}>{name.slice(0, 1)}</div> {name}
    </div>
  );
}
