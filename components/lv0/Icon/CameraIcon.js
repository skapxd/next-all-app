// @ts-check
import Style from "./Icon.module.scss";

/**
 *
 * @param {Object} props
 * @param {() => void} [props.onClick]
 * @param {string} [props.className]
 * @returns
 */

export function CameraIcon(props) {
  const { onClick = () => {}, className = "" } = props;
  return (
    <svg
      onClick={() => onClick && onClick()}
      className={`${Style.Icon_Size} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="26.485"
      height="21.188"
      viewBox="0 0 26.485 21.188"
    >
      <g id="photocamera_83746" transform="translate(0 -10)">
        <g id="Grupo_97" data-name="Grupo 97" transform="translate(0 10)">
          <path
            id="Trazado_57"
            data-name="Trazado 57"
            d="M13.242,17.945a3.973,3.973,0,1,0,3.973,3.973A3.973,3.973,0,0,0,13.242,17.945Zm10.594-3.973H20.658a1.179,1.179,0,0,1-1.046-.754l-.822-2.465A1.18,1.18,0,0,0,17.745,10h-9a1.179,1.179,0,0,0-1.046.754l-.822,2.465a1.18,1.18,0,0,1-1.046.753H2.648A2.656,2.656,0,0,0,0,16.621V28.539a2.656,2.656,0,0,0,2.648,2.648H23.836a2.656,2.656,0,0,0,2.648-2.648V16.621A2.656,2.656,0,0,0,23.836,13.973ZM13.242,28.539a6.621,6.621,0,1,1,6.621-6.621A6.621,6.621,0,0,1,13.242,28.539Zm9.667-10.066a.927.927,0,1,1,.927-.927A.927.927,0,0,1,22.909,18.473Z"
            transform="translate(0 -10)"
            fill="#262833"
          />
        </g>
      </g>
    </svg>
  );
}
