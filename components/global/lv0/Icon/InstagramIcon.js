// @ts-check
import Style from "./Icon.module.scss";

export const InstagramIcon = (props) => {
  const { className = "" } = props;
  return (
    <svg
      className={`${className} ${Style.Icon_Size}`}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        id="icons8-instagram"
        d="M11.469,5A6.494,6.494,0,0,0,5,11.469v9.063A6.494,6.494,0,0,0,11.469,27h9.063A6.618,6.618,0,0,0,25.9,24.128a6.177,6.177,0,0,0,1.1-3.6V11.469A6.494,6.494,0,0,0,20.531,5Zm0,2h9.063A4.463,4.463,0,0,1,25,11.469v9.063A4.463,4.463,0,0,1,20.531,25H11.469A4.463,4.463,0,0,1,7,20.531V11.469A4.463,4.463,0,0,1,11.469,7ZM21.906,9.188a.906.906,0,1,0,.906.906A.9.9,0,0,0,21.906,9.188ZM16,10a6,6,0,1,0,6,6A6.017,6.017,0,0,0,16,10Zm0,2a4,4,0,1,1-4,4A3.983,3.983,0,0,1,16,12Z"
        transform="translate(-5 -5)"
        fill="#e3e3e5"
      />
    </svg>
  );
};
