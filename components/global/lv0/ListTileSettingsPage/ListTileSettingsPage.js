// @ts-check
import Style from "./ListTileSettingsPage.module.scss";
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {Object} props.description
 * @param {() => void} [props.onClick]
 * @param {() => JSX.Element} props.Icon
 * @returns
 */
export function ListTileSettingsPage(props) {
  let { Icon = () => <></>, description, title, onClick } = props;

  onClick ??= () => {};

  return (
    <div className={Style.BoxListTile} onClick={onClick}>
      <Icon />

      <div className={Style.BoxListTile_BoxDescription}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
