import { PlaceholderImageIcon } from "../Icon/PlaceholderImageIcon";
import Style from "./PlaceholderImage.module.scss";

export class BorderRadius {
  static circular = Style.Box_BorderRadiusCircular;
  static rectangle = Style.Box_BorderRadius4px;
}

/**
 * @param {Object} props
 * @param {BorderRadius} [props.borderRadius]
 * @returns
 */

export function PlaceholderImage(props) {
  const { borderRadius = BorderRadius.rectangle } = props;

  return (
    <div className={`${Style.Box} ${borderRadius}`}>
      <PlaceholderImageIcon />
    </div>
  );
}
