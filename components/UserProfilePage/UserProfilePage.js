// @ts-check
import { CameraIcon } from "components/global/lv0/Icon/CameraIcon";
import { PlaceholderPeopleIcon } from "components/global/lv0/Icon/PlaceholderPeopleIcon";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import { ProfileListTile } from "components/user-profile/ProfileListTile/ProfileListTile";
import Style from "./UserProfilePage.module.scss";
import { userBlocInstance } from "Bloc/UserBloc/UserBloc";
import { ImagePicker } from "components/global/lv0/ImagePicker/ImagePicker";
import { observer } from "mobx-react-lite";
import { InfoIcon } from "components/global/lv0/Icon/InfoIcon";
import { PhoneIcon } from "components/global/lv0/Icon/PhoneIcon";

export const userProfilePathName = () => `/user-profile`;

export const UserProfilePage = observer(_UserProfile);

function _UserProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Perfil" showArrowBack={true} />

      <ImagePicker
        initialImage={userBlocInstance.getImageProfile}
        className={Style.Box_ImagePicker}
        accept="image/png, image/jpeg, image/jpg"
        onChange={(props) => {
          console.log({ props });
          userBlocInstance.setImageProfile(props.url);
        }}
        imageBuilder={(props) => {
          const { url } = props;
          if (!url)
            return (
              <div className={Style.Box_ImageProfile}>
                <PlaceholderPeopleIcon
                  className={Style.Box_ImageProfile_Icon}
                />
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
        value={userBlocInstance.getName}
        onSave={(value) => {
          userBlocInstance.setName(value);
        }}
      />

      <ProfileListTile
        Icon={() => <InfoIcon className={Style.Icon} />}
        title={"Info"}
        value={userBlocInstance.getInfo}
        onSave={(value) => {
          userBlocInstance.setInfo(value);
        }}
      />

      <ProfileListTile
        Icon={() => <PhoneIcon className={Style.Icon} />}
        title={"Teléfono"}
        value={userBlocInstance.getPhone}
        onSave={(value) => {
          userBlocInstance.setPhone(value);
        }}
      />
    </div>
  );
}
