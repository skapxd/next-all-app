// @ts-check
import Style from "./Icon.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export const WatchIcon = (props) => {
  const { className = "" } = props;
  return (
    <svg
      className={`${className} ${Style.Icon_Size}`}
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      width="28.438"
      height="28.438"
      viewBox="0 0 28.438 28.438"
    >
      <path
        id="Trazado_45"
        data-name="Trazado 45"
        d="M17.219,31.438A14.219,14.219,0,1,1,31.438,17.219,14.219,14.219,0,0,1,17.219,31.438Zm0-26.25A12.031,12.031,0,1,0,29.25,17.219,12.031,12.031,0,0,0,17.219,5.188Z"
        transform="translate(-3 -3)"
        fill="#e3e3e5"
      />
      <path
        id="Trazado_46"
        data-name="Trazado 46"
        d="M22.109,23.953a1.094,1.094,0,0,1-.777-.317L15.317,17.62A1.094,1.094,0,0,1,15,16.844V8.094a1.094,1.094,0,0,1,2.188,0v8.3l5.7,5.688a1.094,1.094,0,0,1-.777,1.87Z"
        transform="translate(-1.875 -2.625)"
        fill="#e3e3e5"
      />
    </svg>
  );
};
