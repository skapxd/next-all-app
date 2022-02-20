// @ts-check
import Style from "./Icon.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export const WebIcon = (props) => {
  const { className = "" } = props;
  return (
    <svg
      className={`${className} ${Style.Icon_Size}`}
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="124"
      viewBox="0 0 124 124"
    >
      <g
        id="_4213462_communication_global_internet_network_web_icon"
        data-name="4213462_communication_global_internet_network_web_icon"
        transform="translate(-2 -2)"
      >
        <path
          id="Trazado_50"
          data-name="Trazado 50"
          d="M64,126A62,62,0,1,0,2,64,62.053,62.053,0,0,0,64,126ZM16,88.7l25.2-.2a89.752,89.752,0,0,0,13.9,28.7A54.077,54.077,0,0,1,16,88.7ZM47.6,47H79a84.836,84.836,0,0,1,.2,33.3l-31.6.2A82.185,82.185,0,0,1,47.6,47Zm15.7,67.9A80.266,80.266,0,0,1,49.6,88.5l27.5-.2A84.489,84.489,0,0,1,63.3,114.9Zm8,2.6A88.175,88.175,0,0,0,85.4,88.2l26.9-.2A54.132,54.132,0,0,1,71.3,117.5ZM118,64a55.769,55.769,0,0,1-2.4,16l-28.3.2A90.387,90.387,0,0,0,87.1,47h28.1A53.154,53.154,0,0,1,118,64Zm-6.2-25H85.2A91.955,91.955,0,0,0,71.3,10.5,53.768,53.768,0,0,1,111.8,39ZM76.9,39H49.7A82.621,82.621,0,0,1,63.3,13.1,82.621,82.621,0,0,1,76.9,39ZM55.1,10.8A88.856,88.856,0,0,0,41.4,39H16.2A53.809,53.809,0,0,1,55.1,10.8ZM39.5,47a92.01,92.01,0,0,0-.1,33.5l-26.7.2A51.721,51.721,0,0,1,10,64a53.154,53.154,0,0,1,2.8-17Z"
          fill="#e3e3e5"
        />
      </g>
    </svg>
  );
};
