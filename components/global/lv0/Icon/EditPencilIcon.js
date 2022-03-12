// @ts-check
import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {() => void} [props.onClick]
 */
export function EditPencilIcon(props) {
  const { className = "", onClick } = props;

  return (
    <svg
      onClick={() => onClick && onClick()}
      className={`${Style.Icon_Size} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="26.098"
      height="26.098"
      viewBox="0 0 26.098 26.098"
    >
      <path
        id="Shape"
        d="M0,20.588V26.1H5.51L21.458,10l-5.51-5.51L0,20.588ZM25.663,5.8a1.4,1.4,0,0,0,0-2.03L22.328.435a1.4,1.4,0,0,0-2.03,0l-2.61,2.61,5.51,5.51L25.663,5.8Z"
        fill="#4acfac"
        fillRule="evenodd"
      />
    </svg>
  );
}
