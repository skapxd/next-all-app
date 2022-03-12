// @ts-check
import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {() =>  void} [props.onClick]
 */
export function PlaceholderImageIcon(props) {
  const { className = "", onClick = () => {} } = props;
  return (
    <svg
      onClick={() => onClick && onClick()}
      className={`${Style.Icon_Size} ${className} `}
      xmlns="http://www.w3.org/2000/svg"
      width="46.294"
      height="33.667"
      viewBox="0 0 46.294 33.667"
    >
      <g
        id="Grupo_68"
        data-name="Grupo 68"
        transform="translate(-52.853 -135.167)"
      >
        <g
          id="Grupo_66"
          data-name="Grupo 66"
          transform="translate(52.853 135.167)"
        >
          <path
            id="Trazado_28"
            data-name="Trazado 28"
            d="M165.319,122.368q9.749-1.548,8.982,8.053-4.593,7.27-11.151,1.858Q159.554,126.258,165.319,122.368Z"
            transform="translate(-161.769 -122.153)"
            fill="#e3e3e5"
            fillRule="evenodd"
          />
        </g>
        <path
          id="Trazado_44"
          data-name="Trazado 44"
          d="M208.341,144.129V159H162.5V152.8q4.922-5.388,10.221-10.531a15.333,15.333,0,0,0,5.885,4.646L195.022,130.5Q201.87,137.192,208.341,144.129Z"
          transform="translate(-109.194 9.837)"
          fill="#e3e3e5"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
