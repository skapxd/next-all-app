// @ts-check
import { CameraIcon } from "components/global/lv0/Icon/CameraIcon";
import { PlaceholderPeopleIcon } from "components/global/lv0/Icon/PlaceholderPeopleIcon";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import { ProfileListTile } from "components/user-profile/ProfileListTile/ProfileListTile";
import Style from "./user-profile.module.scss";
import { userBloc } from "Bloc/UserBloc";
import { ImagePicker } from "components/global/lv0/ImagePicker/ImagePicker";

export const userProfilePathName = () => `/user-profile`;

export default function _UserProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Perfil" showArrowBack={true} />

      <ImagePicker
        initialImage={userBloc.getImageProfile}
        className={Style.Box_ImagePicker}
        accept="image/png, image/jpeg, image/jpg"
        onChange={(props) => {
          console.log({ props });
          userBloc.setImageProfile(props.url);
        }}
        imageBuilder={(props) => {
          const { url } = props;
          if (!url)
            return (
              <div className={Style.Box_ImageProfile}>
                <PlaceholderPeopleIcon />
                <div className={Style.Box_CameraProfileIcon}>
                  <CameraIcon />
                </div>
              </div>
            );

          return (
            <div className={Style.Box_ImageProfile}>
              <img
                src={url}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "1000px",
                }}
              />
              <div className={Style.Box_CameraProfileIcon}>
                <CameraIcon />
              </div>
            </div>
          );
        }}
      />

      <ProfileListTile
        Icon={() => <PlaceholderPeopleIcon className={Style.Icon} />}
        title={"Nombre"}
        description={userBloc.getName}
        onSave={(value) => {
          console.log({ value });
        }}
      />
    </div>
  );
}
