import Style from './Icon.module.scss';
;

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export function BackgroundAllAppIcon(props) {


  const { className = "" } = props;
  return (
    <svg
      className={`${Style.BackgroundAllAppIcon} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="349.514"
      height="416"
      viewBox="0 0 349.514 416"
    >
      <path
        id="Intersección_1"
        data-name="Intersección 1"
        d="M-551.815,416.321a72.722,72.722,0,0,1-55.6-34.9l-68.062-113.393-52-86.576L-682.694,104l5.718,9.392,127.686,212.356,1.769,3,3.131-1.225A43.967,43.967,0,0,1-492.254,346.3h0A43.7,43.7,0,0,1-507.5,406.2a72.535,72.535,0,0,1-30.672,10.122ZM-835.627,81.789l30.828-53.2,5.173-8.984A37.843,37.843,0,0,1-776.076,1.362a41.643,41.643,0,0,1,5.382-1.04h9.592a38.379,38.379,0,0,1,14.294,4.852,39.2,39.2,0,0,1,18.1,23.549,38.523,38.523,0,0,1-4.9,29.676L-835.627,234.9Z"
        transform="translate(835.627 -0.321)"
        fill="rgba(0,0,0,0.24)"
      />
    </svg>
  );
}
