// @ts-check

import { Divider } from "@mui/material";
import { userBlocInstance } from "Bloc/UserBloc/UserBloc";
import { DollarIcon } from "components/global/lv0/Icon/DollarIcon";
import { InfoIcon } from "components/global/lv0/Icon/InfoIcon";
import { LocationIcon } from "components/global/lv0/Icon/LocationIcon";
import { PlaceholderPeopleIcon } from "components/global/lv0/Icon/PlaceholderPeopleIcon";
import { StoreIcon } from "components/global/lv0/Icon/StoreIcon";
import { ListTileBoldTitle } from "components/global/lv0/ListTileBoldTitle/ListTileBoldTitle";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import { storeProfilePathName } from "components/StoreProfilePage/StoreProfilePage";
import { userProfilePathName } from "components/UserProfilePage/UserProfilePage";
import Link from "next/link";
import Style from "./AccountPage.module.scss";
export function SettingsPage() {
  return (
    <>
      <AppBar title="Cuenta" />
      <Profile />
      <Divider />

      <div className={Style.BoxCol}>
        <ListTileBoldTitle
          href={storeProfilePathName()}
          Icon={() => <StoreIcon className={Style.Icon} />}
          title="Herramientas para tu empresa"
          value="Perfil, horarios, descripción, contactos"
        />
        <ListTileBoldTitle
          Icon={() => <InfoIcon className={Style.Icon} />}
          title="Novedades"
          value="Visualiza el historial de cambios"
        />

        <ListTileBoldTitle
          Icon={() => <LocationIcon className={Style.Icon} />}
          title="Mi ubicación"
          value="Visualiza las tiendas más cercanas"
        />

        <ListTileBoldTitle
          Icon={() => <DollarIcon className={Style.Icon} />}
          title="Patrocinio"
          value="Ayuda a este proyecto a crecer"
        />
      </div>
    </>
  );
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
              {userBlocInstance.getInfo +
                (userBlocInstance.getInfo.length > 26 ? "..." : "")}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
