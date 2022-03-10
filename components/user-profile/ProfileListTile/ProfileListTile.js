// @ts-check
import { EditPencilWithPopup } from "components/lv1/EditPencilWithPopup/EditPencilWithPopup";
import Style from "./ProfileListTile.module.scss";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {Object} props.description
 * @param {() => void} [props.onClick]
 * @param {() => JSX.Element} props.Icon
 * @returns
 */
export function ProfileListTile(props) {
  let { Icon = () => <></>, description, title, onClick } = props;

  onClick ??= () => {};

  return (
    <div className={Style.BoxListTile} onClick={onClick}>
      <Icon />

      <div className={Style.BoxListTile_BoxDescription}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <EditPencilWithPopup
        title={title}
        onSave={(value) => {
          console.log({ value });
        }}
        className={Style.BoxListTile_IconEdit}
      />
    </div>
  );
}
