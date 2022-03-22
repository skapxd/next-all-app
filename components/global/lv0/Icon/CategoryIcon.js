import Style from "./Icon.module.scss";
/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export function CategoryIcon(props) {
  const { className = "" } = props;
  return (
    <svg
      className={`${Style.Icon_Size} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="31.471"
      height="31.471"
      viewBox="0 0 31.471 31.471"
    >
      <path
        id="_1608866_tag_icon"
        data-name="1608866_tag_icon"
        d="M137.306,134.647a2.66,2.66,0,1,0-.779,1.88A2.562,2.562,0,0,0,137.306,134.647Zm22.165,11.965a2.545,2.545,0,0,1-.769,1.87L148.5,158.7a2.66,2.66,0,0,1-1.89.769,2.545,2.545,0,0,1-1.87-.769L129.89,143.829a6.191,6.191,0,0,1-1.34-2.1,6.414,6.414,0,0,1-.55-2.43v-8.641A2.7,2.7,0,0,1,130.659,128H139.3a7.363,7.363,0,0,1,4.549,1.89L158.7,144.722A2.66,2.66,0,0,1,159.471,146.612Z"
        transform="translate(159.471 -128) rotate(90)"
        fill="#e3e3e5"
      />
    </svg>
  );
}
