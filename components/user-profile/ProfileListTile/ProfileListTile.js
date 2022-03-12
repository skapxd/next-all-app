// @ts-check
import { EditPencilWithPopup } from "components/global/lv1/EditPencilWithPopup/EditPencilWithPopup";
import Style from "./ProfileListTile.module.scss";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {Object} props.description
 * @param {(value: string) => void} [props.onSave]
 * @param {() => JSX.Element} props.Icon
 * @returns
 */
export function ProfileListTile(props) {
  let { Icon = () => <></>, description, title, onSave } = props;

  onSave ??= () => {};

  return (
    <div className={Style.BoxListTile}>
      <Icon />

      <div className={Style.BoxListTile_BoxDescription}>
        <p>{title}</p>
        <h3>{description}</h3>
      </div>

      <EditPencilWithPopup
        title={title}
        initValue={description}
        onSave={(value) => {
          onSave(value);
        }}
        className={Style.BoxListTile_IconEdit}
      />
    </div>
  );
}
