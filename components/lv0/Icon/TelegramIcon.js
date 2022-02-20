// @ts-check
import Style from "./Icon.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export function TelegramIcon(props) {
  const { className = "" } = props;
  return (
    <svg
      className={`${className} ${Style.Icon_Size}`}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="24.321"
      viewBox="0 0 29 24.321"
    >
      <path
        id="_8547122_telegram_plane_icon"
        data-name="8547122_telegram_plane_icon"
        d="M28.934,66.613,24.557,87.252c-.33,1.457-1.191,1.819-2.415,1.133l-6.668-4.914-3.217,3.094a1.675,1.675,0,0,1-1.34.654l.479-6.791L23.755,69.261c.537-.479-.117-.744-.835-.265L7.641,78.616,1.064,76.557c-1.431-.447-1.457-1.431.3-2.117l25.727-9.911C28.28,64.082,29.322,64.794,28.934,66.613Z"
        transform="translate(-0.016 -64.399)"
        fill="#e3e3e5"
      />
    </svg>
  );
}
