// @ts-check

import { userBloc } from "Bloc/UserBloc";
import { DollarIcon } from "components/lv0/Icon/DollarIcon";
import { InfoIcon } from "components/lv0/Icon/InfoIcon";
import { LocationIcon } from "components/lv0/Icon/LocationIcon";
import { PlaceholderImageIcon } from "components/lv0/Icon/PlaceholderImageIcon";
import { PlaceholderPeopleIcon } from "components/lv0/Icon/PlaceholderPeopleIcon";
import { StoreIcon } from "components/lv0/Icon/StoreIcon";
import {
  BorderRadius,
  PlaceholderImage,
} from "components/lv0/PlaceholderImage/PlaceholderImage";
import { AppBar } from "components/lv1/AppBar/AppBar";
import Link from "next/link";
import { userProfilePathName } from "pages/user-profile";
import Style from "./SettingsPage.module.scss";
export function SettingsPage() {
  return (
    <>
      <AppBar title="Ajustes" />
      <Profile />
      <Divider />
      <ListTile
        Icon={() => <StoreIcon className={Style.BoxListTile_Icon} />}
        title="Herramientas para tu empresa"
        description="Perfil, horarios, descripción, contactos"
      />
      <ListTile
        Icon={() => <InfoIcon className={Style.BoxListTile_Icon} />}
        title="Novedades"
        description="Visualiza el historial de cambios"
      />

      <ListTile
        Icon={() => <LocationIcon className={Style.BoxListTile_Icon} />}
        title="Mi ubicación"
        description="Visualiza las tiendas más cercanas"
      />

      <ListTile
        Icon={() => <DollarIcon className={Style.BoxListTile_Icon} />}
        title="Patrocinio"
        description="Ayuda a este proyecto a crecer"
      />
    </>
  );
}

function Divider() {
  return <div className={Style.Divider}></div>;
}

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {Object} props.description
 * @param {() => void} [props.onClick]
 * @param {() => JSX.Element} props.Icon
 * @returns
 */
function ListTile(props) {
  let { Icon = () => <></>, description, title, onClick } = props;

  onClick ??= () => {};

  return (
    <div className={Style.BoxListTile} onClick={onClick}>
      <Icon />

      <div className={Style.BoxListTile_BoxDescription}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Profile(props) {
  return (
    <Link href={userProfilePathName()}>
      <a>
        <div className={Style.BoxProfile}>
          {/* <PlaceholderImage borderRadius={BorderRadius.circular} /> */}
          <PlaceholderPeopleIcon className={Style.BoxProfile_BoxPlaceholderPeople}/>
          <div className={Style.BoxProfile_BoxDescription}>
            <h3 className={Style.BoxProfile_BoxDescription_Name}>
              {userBloc.getName}
            </h3>
            <p className={Style.BoxProfile_BoxDescription_Description}>
              Hola! estoy usando All App
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
