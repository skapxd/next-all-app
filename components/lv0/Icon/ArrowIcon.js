// @ts-check
import Style from "./Icon.module.scss";

export class ArrowDirection {
  static up = Style.Icon_Arrow_Up;
  static right = Style.Icon_Arrow_Right;
  static down = Style.Icon_Arrow_Down;
  static left = Style.Icon_Arrow_Left;
}

/**
 *
 * @param {Object} props
 * @param {ArrowDirection} props.direction
 * @param {() => void} [props.onClick]
 * @param {string} [props.className]
 * @returns
 */
export function ArrowIcon(props) {
  const {
    direction = ArrowDirection.left,
    onClick = () => {},
    className = "",
  } = props;

  return (
    <svg
      onClick={() => onClick && onClick()}
      className={`${Style.Icon_Size} ${direction} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="27.592"
      height="22.785"
      viewBox="0 0 27.592 22.785"
    >
      <g id="arrow" transform="translate(27.592 22.785) rotate(180)">
        <path
          id="Trazado_31"
          data-name="Trazado 31"
          d="M59.389-427.791a1.4,1.4,0,0,0-.674,1.862,46.618,46.618,0,0,0,3.9,4.156l3.774,3.864H44.46l-.285.152a1.78,1.78,0,0,0-.48.437,1.042,1.042,0,0,0-.195.8,1.063,1.063,0,0,0,.175.775,1.988,1.988,0,0,0,.422.424l.24.166,11.025.02,11.031.013-3.774,3.864a46.64,46.64,0,0,0-3.9,4.156,1.37,1.37,0,0,0,1.848,1.823c.246-.126,1.466-1.339,5.318-5.282,3.2-3.281,5.039-5.209,5.1-5.368a1.643,1.643,0,0,0,0-1.166c-.065-.159-1.9-2.088-5.1-5.368-3.852-3.944-5.072-5.156-5.318-5.282A1.311,1.311,0,0,0,59.389-427.791Z"
          transform="translate(-43.5 427.911)"
          fill="#707070"
        />
      </g>
    </svg>
  );
}
