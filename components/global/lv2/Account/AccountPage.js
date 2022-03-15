// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";
import { DollarIcon } from "components/global/lv0/Icon/DollarIcon";
import { InfoIcon } from "components/global/lv0/Icon/InfoIcon";
import { LocationIcon } from "components/global/lv0/Icon/LocationIcon";
import { PlaceholderPeopleIcon } from "components/global/lv0/Icon/PlaceholderPeopleIcon";
import { StoreIcon } from "components/global/lv0/Icon/StoreIcon";
import { ListTileSettingsPage } from "components/global/lv0/ListTileSettingsPage/ListTileSettingsPage";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import Link from "next/link";
import { storeProfilePathName } from "pages/store-profile";
import { userProfilePathName } from "pages/user-profile";
import Style from "./AccountPage.module.scss";
export function SettingsPage() {
  return (
    <>
      <AppBar title="Cuenta" />
      <Profile />
      <Divider />
      <ListTileSettingsPage
        href={storeProfilePathName()}
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
          {!userBlocInstance.getImageProfile ? (
            <PlaceholderPeopleIcon
              className={Style.BoxProfile_BoxPlaceholderPeople}
            />
          ) : (
            <img
              src={userBlocInstance.getImageProfile}
              className={Style.BoxProfile_BoxPeople}
              alt="image profile"
            />
          )}

          <div className={Style.BoxProfile_BoxDescription}>
            <h3 className={Style.BoxProfile_BoxDescription_Name}>
              {userBlocInstance.getName}
            </h3>
            <p className={Style.BoxProfile_BoxDescription_Description}>
              {userBlocInstance.getInfo + (userBlocInstance.getInfo.length > 26 ? "..." : "")}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
