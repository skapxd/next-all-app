// @ts-check
import { EditPencilWithPopup } from "components/global/lv1/EditPencilWithPopup/EditPencilWithPopup";
import Style from "./ProfileListTile.module.scss";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {(value: string) => void} [props.onSave]
 * @param {() => JSX.Element} props.Icon
 * @returns
 */
export function ProfileListTile(props) {
  let { Icon = () => <></>, value, title, onSave } = props;

  return (
    <div className={Style.BoxListTile}>
      <Icon />

      <div className={Style.BoxListTile_BoxDescription}>
        <p>{title}</p>
        <h4>{value.substring(0, 26) + (value.length > 26 ? "..." : "")}</h4>
      </div>

      <EditPencilWithPopup
        title={title}
        initValue={value}
        onSave={(value) => {
          onSave && onSave(value);
        }}
        className={Style.BoxListTile_IconEdit}
      />
    </div>
  );
}
