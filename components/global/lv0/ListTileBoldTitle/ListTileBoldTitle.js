// @ts-check
import Link from "next/link";
import Style from "./ListTileBoldTitle.module.scss";
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.href]
 * @param {string} props.value
 * @param {() => void} [props.onClick]
 * @param {() => JSX.Element} props.Icon
 * @returns
 */
export function ListTileBoldTitle(props) {
  let { Icon = () => <></>, value, title, onClick, href = "" } = props;

  onClick ??= () => {};

  return (
    <>
      {href && (
        <Link href={href}>
          <a>
            <div className={Style.BoxListTile} onClick={onClick}>
              <Icon />

              <div className={Style.BoxListTile_BoxDescription}>
                <h4>{title}</h4>
                <p>{value}</p>
              </div>
            </div>
          </a>
        </Link>
      )}

      {!href && (
        <div className={Style.BoxListTile} onClick={onClick}>
          <Icon />

          <div className={Style.BoxListTile_BoxDescription}>
            <h4>{title}</h4>
            <p>{value}</p>
          </div>
        </div>
      )}
    </>
  );
}
