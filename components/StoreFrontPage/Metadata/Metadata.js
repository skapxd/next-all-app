// @ts-check
import { ArrowDirection, ArrowIcon } from "components/global/lv0/Icon/ArrowIcon";
import Style from "./Metadata.module.scss";
import Markdown from "markdown-to-jsx";

class MarkdownString extends String {}

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {MarkdownString} props.description
 * @param {() => void} [props.onClick]
 * @returns
 */
export function Metadata(props) {
  const {
    description,
    onClick = () => console.log("default onClick"),
    title = "default title",
  } = props;

  return (
    <div className={Style.Box}>
      <div className={Style.Box_BoxTitleArrow}>
        <h2 className={Style.Box_BoxTitleArrow_Title}>{title}</h2>

        <ArrowIcon direction={ArrowDirection.right} />
      </div>

      <p className={Style.Box_Description}>
        <Markdown>{`${description}`}</Markdown>
      </p>
    </div>
  );
}
