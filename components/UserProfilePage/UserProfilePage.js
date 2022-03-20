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
import { setImageProfile } from "./services/setImageProfile";
import { setName } from "./services/setName";
import { useSnackBarMessage } from "hooks/useSnackBarMessage";

export const userProfilePathName = () => `/user-profile`;

export const UserProfilePage = observer(_UserProfile);

function _UserProfile() {
  const { show, SnackBarMessage } = useSnackBarMessage();

  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Perfil" showArrowBack={true} />

      <ImagePicker
        initialImage={userBlocInstance.getImageProfile}
        className={Style.Box_ImagePicker}
        accept="image/png, image/jpeg, image/jpg"
        onChange={async (props) => {
          try {
            const { url, file } = props;
            userBlocInstance.setImageProfile(url);
            await setImageProfile({
              base64: url,
              file,
            });
            show({
              message: "Guardado exitoso",
              seg: 3,
              typeMessage: "success",
            });
          } catch (error) {
            show({
              message: "Error al guardar",
              seg: 3,
              typeMessage: "error",
            });
          }
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
                alt="ImageProfile"
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
        onSave={async (value) => {
          try {
            userBlocInstance.setName(value);
            await setName({ name: value });
            show({ typeMessage: "success" });
          } catch (error) {
            show({ typeMessage: "error" });
          }
        }}
      />

      <ProfileListTile
        Icon={() => <InfoIcon className={Style.Icon} />}
        title={"Info"}
        value={userBlocInstance.getInfo}
        onSave={(value) => {
          try {
            userBlocInstance.setInfo(value);
            show({ typeMessage: "success" });
          } catch (error) {
            show({ typeMessage: "error" });
          }
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

      <SnackBarMessage />
    </div>
  );
}
