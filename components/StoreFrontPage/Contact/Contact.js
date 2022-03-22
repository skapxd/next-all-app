// @ts-check
import { objectMap } from "helpers/objectMap";
import Link from "next/link";
import { ContactItem, TypeContact } from "../ContactItem/ContactItem";
import Style from "./Contact.module.scss";

/**
 * @param {Object} props
 * @param {Contact} props.contact
 * @returns
 */
export function Contact(props) {
  const { contact } = props;

  const typeContact = {
    instagram: (value = "") => (
      <a
        href={`https://www.instagram.com/${value}`}
        target="_blank"
        rel="noreferrer"
      >
        <ContactItem
          title={TypeContact.instagram}
          data={value}
          type={TypeContact.instagram}
        />
      </a>
    ),
    whatsApp: (value = "") => (
      <a
        href={`https://api.whatsapp.com/send/?phone=${value}`}
        target="_blank"
        rel="noreferrer"
      >
        <ContactItem
          title={TypeContact.whatsApp}
          data={value}
          type={TypeContact.whatsApp}
        />
      </a>
    ),
    telegram: (value = "") => (
      <a
        href={`https://t.me/${value.replace("@", "")}`}
        target="_blank"
        rel="noreferrer"
      >
        <ContactItem
          title={TypeContact.telegram}
          data={value}
          type={TypeContact.telegram}
        />
      </a>
    ),
    web: (value = "") => (
      <a href={`${value}`} target="_blank" rel="noreferrer">
        <ContactItem
          title={TypeContact.web}
          data={value}
          type={TypeContact.web}
        />
      </a>
    ),
    email: (value = "") => (
      <a href="mailto:someone@yoursite.com">
        <ContactItem
          title={TypeContact.email}
          data={value}
          type={TypeContact.email}
        />
      </a>
    ),
  };

  return (
    <div className={Style.Box}>
      <h2 className={Style.Box_ContactTitle}>Contacto</h2>

      {objectMap(contact, (key, value) => {
        return <div key={key}> {typeContact[key](value)} </div>;
      })}

      <ContactItem
        title={TypeContact.ubicaciones}
        data={"Abre el mapa y observa múltiples ubicaciones"}
        type={TypeContact.ubicaciones}
      />
    </div>
  );
}
