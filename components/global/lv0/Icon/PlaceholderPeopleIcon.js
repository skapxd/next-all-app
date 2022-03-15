import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {() =>  void} [props.onClick]
 */
export function PlaceholderPeopleIcon(props) {
  const { className = "", onClick = () => {} } = props;
  return (
    <svg
      onClick={() => onClick && onClick()}
      className={`${Style.Icon_Size} ${className} `}
      xmlns="http://www.w3.org/2000/svg"
      width="67.8"
      height="78.128"
      viewBox="0 0 67.8 78.128"
    >
      <g
        id="_4213460-account-avatar-head-person-profile-user_115386"
        data-name="4213460-account-avatar-head-person-profile-user_115386"
        transform="translate(-18.7 -15)"
      >
        <path
          id="Trazado_58"
          data-name="Trazado 58"
          d="M30,40.444A25.444,25.444,0,1,0,55.444,15,25.519,25.519,0,0,0,30,40.444Zm44.9,0A19.457,19.457,0,1,1,55.444,20.987,19.514,19.514,0,0,1,74.9,40.444Z"
          transform="translate(-2.844)"
          fill="#e3e3e5"
        />
        <path
          id="Trazado_59"
          data-name="Trazado 59"
          d="M22.966,113.26a41.915,41.915,0,0,1,59.269,0l4.266-4.266a48.058,48.058,0,0,0-67.8,0Z"
          transform="translate(0 -20.132)"
          fill="#e3e3e5"
        />
      </g>
    </svg>
  );
}
