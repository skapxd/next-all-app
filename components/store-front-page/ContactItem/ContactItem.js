// @ts-check
import { EmailIcon } from "components/lv0/Icon/EmailIcon";
import { LocationIcon } from "components/lv0/Icon/LocationIcon";
import { TelegramIcon } from "components/lv0/Icon/TelegramIcon";
import { WhatsAppIcon } from "components/lv0/Icon/WhatsAppIcon";
import Style from "./ContactItem.module.scss";

export class TypeContact {
  static whatsApp = "whatsApp";
  static telegram = "telegram";
  static email = "email";
  static ubicaciones = "ubicaciones";
}

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.data
 * @param {TypeContact} props.type
 */
export function ContactItem(props) {
  const {
    title = "default title",
    data = "default data",
    type = TypeContact.whatsApp,
  } = props;

  const typeContact = {
    whatsApp: <WhatsAppIcon />,
    telegram: <TelegramIcon />,
    email: <EmailIcon />,
    ubicaciones: <LocationIcon  />,
  };

  return (
    <div className={Style.Box}>
      {typeContact[type]}
      <div className={Style.Box_BoxContactTitleAndData}>
        <h4 className={Style.Box_BoxContactTitleAndData_Title}>{title}</h4>
        <h5 className={Style.Box_BoxContactTitleAndData_Data}>{data}</h5>
      </div>
    </div>
  );
}
