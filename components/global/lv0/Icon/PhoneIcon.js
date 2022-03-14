import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {() =>  void} [props.onClick]
 */
export function PhoneIcon(props) {
  const { className = "", onClick = () => {} } = props;
  return (
    <svg
      className={`${Style.Icon_Size} ${className}`}
      onClick={() => onClick && onClick()}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29.001"
      viewBox="0 0 29 29.001"
    >
      <g id="phone-volume_icon-icons.com_56474" transform="translate(-0.012)">
        <path
          id="Trazado_60"
          data-name="Trazado 60"
          d="M26.208,26.521l-1.922,1.922A3.577,3.577,0,0,1,22.907,29,22.689,22.689,0,0,1,.014,6.054a3.586,3.586,0,0,1,.563-1.32L2.5,2.809a3.224,3.224,0,0,1,3-.708l.405.136a3.793,3.793,0,0,1,2.2,2.32L9.071,8.11a3.469,3.469,0,0,1-.795,3.037L6.991,12.433a13.632,13.632,0,0,0,9.592,9.6l1.285-1.285a3.479,3.479,0,0,1,3.041-.795l3.553.97a3.792,3.792,0,0,1,2.321,2.195l.135.405A3.223,3.223,0,0,1,26.208,26.521ZM16.325,14.5h1.813a3.625,3.625,0,0,0-3.625-3.625v1.813A1.815,1.815,0,0,1,16.325,14.5Zm7.25,0a9.062,9.062,0,0,0-9.063-9.063V7.25a7.258,7.258,0,0,1,7.25,7.25ZM14.512,0V1.813A12.7,12.7,0,0,1,27.2,14.5h1.813A14.5,14.5,0,0,0,14.512,0Z"
          transform="translate(0)"
          fill="#e3e3e5"
        />
      </g>
    </svg>
  );
}
