// @ts-check
import { CameraIcon } from "components/lv0/Icon/CameraIcon";
import { PlaceholderPeopleIcon } from "components/lv0/Icon/PlaceholderPeopleIcon";
import { AppBar } from "components/lv1/AppBar/AppBar";
import { ProfileListTile } from "components/user-profile/ProfileListTile/ProfileListTile";
import Style from "./user-profile.module.scss";
import { userBloc } from "Bloc/UserBloc";

export const userProfilePathName = () => `/user-profile`;

export default function UserProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Perfil" showArrowBack={true} />

      <div
        className={Style.Box_ImageProfile}
        onClick={async () => {
          if (typeof window === "undefined") return;
          try {
            await window.showOpenFilePicker();
          } catch (error) {
            console.log({ error: error.message });
          }
        }}
      >
        <PlaceholderPeopleIcon />
        <div className={Style.Box_CameraProfileIcon}>
          <CameraIcon />
        </div>
      </div>

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
