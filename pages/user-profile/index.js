// @ts-check
import { CameraIcon } from "components/lv0/Icon/CameraIcon";
import { PlaceholderImageIcon } from "components/lv0/Icon/PlaceholderImageIcon";
import { PlaceholderPeopleIcon } from "components/lv0/Icon/PlaceholderPeopleIcon";
import { AppBar } from "components/lv1/AppBar/AppBar";
import { useEffect } from "react";
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
    </div>
  );
}
