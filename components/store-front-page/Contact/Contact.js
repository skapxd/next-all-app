// @ts-check
import { WhatsAppIcon } from "components/lv0/Icon/WhatsAppIcon";
import { ContactItem, TypeContact } from "../ContactItem/ContactItem";
import Style from "./Contact.module.scss";

export function Contact() {
  return (
    <div className={Style.Box}>
      <h2 className={Style.Box_ContactTitle}>Contacto</h2>
      <ContactItem
        title={"WhatsApp"}
        data={"300 000 00 00"}
        type={TypeContact.whatsApp}
      />

      <ContactItem
        title={"Telegram"}
        data={"@franken_luna"}
        type={TypeContact.telegram}
      />

      <ContactItem
        title={"Email"}
        data={"Franken@luna.app"}
        type={TypeContact.email}
      />

      <ContactItem
        title={"Ubicaciones"}
        data={"Abre el mapa y observa múltiples ubicaciones"}
        type={TypeContact.ubicaciones}
      />
    </div>
  );
}
