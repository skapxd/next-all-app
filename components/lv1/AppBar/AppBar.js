// @ts-check
import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";
import { useRouter } from "next/router";
import Style from "./AppBar.module.scss";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {boolean} [props.showArrowBack]
 * @returns
 */
export function AppBar(props) {
  const router = useRouter();

  const { title = "", showArrowBack = false } = props;

  return (
    <div className={Style.Box}>
      {showArrowBack && (
        <ArrowIcon
          className={Style.Box_ArrowIcon}
          direction={ArrowDirection.left}
          onClick={() => router.back()}
        />
      )}

      <h1 className={Style.Box_Input}>{title} </h1>
    </div>
  );
}
