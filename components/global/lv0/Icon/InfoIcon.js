// @ts-check
import Style from "./Icon.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 */

export function InfoIcon(props) {
  const { className = "" } = props;
  return (
    <svg
      className={`${Style.Icon_Size} ${className} `}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
    >
      <g
        id="_2561452_info_icon"
        data-name="2561452_info_icon"
        transform="translate(-2 -1)"
      >
        <g id="Grupo_53" data-name="Grupo 53" transform="translate(1)">
          <circle
            id="Elipse_7"
            data-name="Elipse 7"
            cx="13.5"
            cy="13.5"
            r="13.5"
            transform="translate(2 2)"
            fill="none"
            stroke="#e3e3e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            id="Línea_1"
            data-name="Línea 1"
            y1="8"
            transform="translate(16 15)"
            fill="none"
            stroke="#e3e3e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <line
            id="Línea_2"
            data-name="Línea 2"
            transform="translate(16 9)"
            fill="none"
            stroke="#e3e3e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
      </g>
    </svg>
  );
}
