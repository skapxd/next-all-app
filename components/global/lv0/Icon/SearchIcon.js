import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export function SearchIcon(props) {
  const { className = "" } = props;
  return (
    <svg
      className={`${className} ${Style.Icon_Size}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="33.713"
      height="33.713"
      viewBox="0 0 33.713 33.713"
    >
      <defs>
        <clipPath id="clip">
          <use xlinkHref="#fill" />
        </clipPath>
      </defs>
      <g id="Grupo_5" data-name="Grupo 5" transform="translate(-504.5 31.615)">
        <g
          id="Rectángulo_12"
          data-name="Rectángulo 12"
          transform="translate(504.5 -31.615)"
          fill="none"
          stroke="#707070"
          strokeWidth="3"
        >
          <rect width="25" height="25" rx="12.5" stroke="none" />
          <rect x="1.5" y="1.5" width="22" height="22" rx="11" fill="none" />
        </g>
        <g
          id="Rectángulo_13"
          data-name="Rectángulo 13"
          transform="translate(523.364 -10.629) rotate(-45)"
          fill="none"
          stroke="#707070"
          strokeWidth="4"
        >
          <rect id="fill" width="3" height="18" rx="1.5" stroke="none" />
          <path
            d="M0,2h3M2,0v18M3,16h-3M1,18v-18"
            fill="none"
            clipPath="url(#clip)"
          />
        </g>
      </g>
    </svg>
  );
}
