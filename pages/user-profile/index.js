// @ts-check
import { CameraIcon } from "components/lv0/Icon/CameraIcon";
import { PlaceholderPeopleIcon } from "components/lv0/Icon/PlaceholderPeopleIcon";
import { StoreIcon } from "components/lv0/Icon/StoreIcon";
import { AppBar } from "components/lv1/AppBar/AppBar";
import { useEffect } from "react";
import { ProfileListTile } from "components/user-profile/ProfileListTile/ProfileListTile";
import Style from "./user-profile.module.scss";

export const userProfilePathName = () => `/user-profile`;

export default function UserProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Perfil" showArrowBack={true} />

      <div className={Style.Box_ImageProfile}>
        <PlaceholderPeopleIcon />
        <div className={Style.Box_CameraProfileIcon}>
          <CameraIcon />
        </div>
      </div>

      <ProfileListTile
        Icon={() => <StoreIcon className={Style.Icon} />}
        title={"Nombre"}
        description="Nombre de la tienda"
      />
    </div>
  );
}
