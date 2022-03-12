// @ts-check
import { CameraIcon } from "components/global/lv0/Icon/CameraIcon";
import { PlaceholderPeopleIcon } from "components/global/lv0/Icon/PlaceholderPeopleIcon";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import { ProfileListTile } from "components/user-profile/ProfileListTile/ProfileListTile";
import Style from "./user-profile.module.scss";
import { userBloc } from "Bloc/UserBloc";

export const userProfilePathName = () => `/user-profile`;

export default function UserProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Perfil" showArrowBack={true} />

      <ImageProfile />

      <ProfileListTile
        Icon={() => <PlaceholderPeopleIcon className={Style.Icon} />}
        title={"Nombre"}
        description={userBloc.getName}
        onSave={(value) => {
          userBloc;
          console.log({ value });
        }}
      />
    </div>
  );
}

export function ImageProfile() {
  return (
    <>
      <label htmlFor="file-upload">
        <div className={Style.Box_ImageProfile}>
          <PlaceholderPeopleIcon />
          <div className={Style.Box_CameraProfileIcon}>
            <CameraIcon />
          </div>
        </div>
      </label>

      <input type="file" id="file-upload" accept="image/png, image/jpeg" />
    </>
  );
}
