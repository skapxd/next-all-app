// @ts-check
import Style from "./Icon.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export function EmailIcon(props) {
  const { className = "" } = props;
  return (
    <svg
      className={`${className} ${Style.Icon_Size}`}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="24.135"
      viewBox="0 0 29 24.135"
    >
      <path
        id="_103176_mail_email_icon"
        data-name="103176_mail_email_icon"
        d="M14.468,15.275c-2.357,0-14.5-9.786-14.5-9.786V4.414A2.415,2.415,0,0,1,2.385,2H26.552a2.415,2.415,0,0,1,2.417,2.414L28.95,5.62S16.939,15.275,14.468,15.275Zm0,3.319c2.584,0,14.481-9.353,14.481-9.353l.019,14.481a2.415,2.415,0,0,1-2.417,2.414H2.385A2.416,2.416,0,0,1-.031,23.722L-.012,9.241S12.112,18.593,14.468,18.593Z"
        transform="translate(0.031 -2)"
        fill="#e3e3e5"
        fillRule="evenodd"
      />
    </svg>
  );
}
