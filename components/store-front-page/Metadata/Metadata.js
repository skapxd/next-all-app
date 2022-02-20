// @ts-check
import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";
import Style from "./Metadata.module.scss";
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {JSX.Element | string} props.description
 * @param {() => void} [props.onClick]
 * @returns
 */
export function Metadata(props) {
  const {
    description = "default description",
    onClick = () => console.log("default onClick"),
    title = "default title",
  } = props;

  return (
    <div className={Style.Box}>
      <div className={Style.Box_BoxTitleArrow}>
        <h2 className={Style.Box_BoxTitleArrow_Title}>{title}</h2>

        <ArrowIcon direction={ArrowDirection.right} />
      </div>

      <p className={Style.Box_Description}>{description}</p>
    </div>
  );
}
