import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {() =>  void} [props.onClick]
 */
export function MenuIcon(props) {
  const { className = "", onClick = () => {} } = props;
  return (
    <svg
      onClick={() => onClick && onClick()}
      className={`${className} ${Style.Icon_Size}`}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="26"
      viewBox="0 0 5 26"
    >
      <g id="Grupo_7" data-name="Grupo 7" transform="translate(-394 -28)">
        <circle
          id="Elipse_3"
          data-name="Elipse 3"
          cx="2.5"
          cy="2.5"
          r="2.5"
          transform="translate(394 28)"
          fill="#707070"
        />
        <circle
          id="Elipse_4"
          data-name="Elipse 4"
          cx="2.5"
          cy="2.5"
          r="2.5"
          transform="translate(394 38)"
          fill="#707070"
        />
        <circle
          id="Elipse_5"
          data-name="Elipse 5"
          cx="2.5"
          cy="2.5"
          r="2.5"
          transform="translate(394 49)"
          fill="#707070"
        />
      </g>
    </svg>
  );
}
