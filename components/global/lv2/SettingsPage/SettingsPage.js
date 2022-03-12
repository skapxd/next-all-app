// @ts-check

import { userBloc } from "Bloc/UserBloc";
import { DollarIcon } from "components/global/lv0/Icon/DollarIcon";
import { InfoIcon } from "components/global/lv0/Icon/InfoIcon";
import { LocationIcon } from "components/global/lv0/Icon/LocationIcon";
import { PlaceholderPeopleIcon } from "components/global/lv0/Icon/PlaceholderPeopleIcon";
import { StoreIcon } from "components/global/lv0/Icon/StoreIcon";
import { ListTileSettingsPage } from "components/global/lv0/ListTileSettingsPage/ListTileSettingsPage";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import Link from "next/link";
import { userProfilePathName } from "pages/user-profile";
import Style from "./SettingsPage.module.scss";
export function SettingsPage() {
  return (
    <>
      <AppBar title="Ajustes" />
      <Profile />
      <Divider />
      <ListTileSettingsPage
        Icon={() => <StoreIcon className={Style.Icon} />}
        title="Herramientas para tu empresa"
        description="Perfil, horarios, descripción, contactos"
      />
      <ListTileSettingsPage
        Icon={() => <InfoIcon className={Style.Icon} />}
        title="Novedades"
        description="Visualiza el historial de cambios"
      />

      <ListTileSettingsPage
        Icon={() => <LocationIcon className={Style.Icon} />}
        title="Mi ubicación"
        description="Visualiza las tiendas más cercanas"
      />

      <ListTileSettingsPage
        Icon={() => <DollarIcon className={Style.Icon} />}
        title="Patrocinio"
        description="Ayuda a este proyecto a crecer"
      />
    </>
  );
}

function Divider() {
  return <div className={Style.Divider}></div>;
}

function Profile(props) {
  return (
    <Link href={userProfilePathName()}>
      <a>
        <div className={Style.BoxProfile}>
          <PlaceholderPeopleIcon
            className={Style.BoxProfile_BoxPlaceholderPeople}
          />
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
