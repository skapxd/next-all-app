// @ts-check
import { EmailIcon } from "components/lv0/Icon/EmailIcon";
import { InstagramIcon } from "components/lv0/Icon/InstagramIcon";
import { LocationIcon } from "components/lv0/Icon/LocationIcon";
import { TelegramIcon } from "components/lv0/Icon/TelegramIcon";
import { WebIcon } from "components/lv0/Icon/WebIcon";
import { WhatsAppIcon } from "components/lv0/Icon/WhatsAppIcon";
import Style from "./ContactItem.module.scss";

export class TypeContact {
  static whatsApp = "whatsApp";
  static telegram = "telegram";
  static email = "email";
  static instagram = "instagram";
  static ubicaciones = "ubicaciones";
  static default = "default";
  static web = "web";
}

/**
 * @param {Object} props
 * @param {TypeContact} props.title
 * @param {string} props.data
 * @param {TypeContact} props.type
 */
export function ContactItem(props) {
  const {
    title = TypeContact.default,
    data = "default data",
    type = TypeContact.default,
  } = props;

  const typeTitle = {
    whatsApp: "whatsApp",
    telegram: "telegram",
    email: "email",
    instagram: "instagram",
    ubicaciones: "Ubicaciones",
    web: "Página web",
    default: "default",
  };

  const typeContact = {
    whatsApp: <WhatsAppIcon />,
    telegram: <TelegramIcon />,
    email: <EmailIcon />,
    instagram: <InstagramIcon />,
    ubicaciones: <LocationIcon />,
    web: <WebIcon />,
  };

  return (
    <div className={Style.Box}>
      {typeContact[type]}
      <div className={Style.Box_BoxContactTitleAndData}>
        <h4 className={Style.Box_BoxContactTitleAndData_Title}>
          {typeTitle[title]}
        </h4>
        <h5 className={Style.Box_BoxContactTitleAndData_Data}>{data}</h5>
      </div>
    </div>
  );
}
