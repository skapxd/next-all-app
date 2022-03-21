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
import { setImageProfileService } from "./services/setImageProfile.service";
import { setNameService } from "./services/setName.service";
import { useSnackBarMessage } from "hooks/useSnackBarMessage";
import { setPhoneService } from "./services/setPhone.service";
import { setInfoService } from "./services/setInfo.service";
import { Loading } from "components/global/lv0/Loading/Loading";
import { useState } from "react";

export const userProfilePathName = () => `/user-profile`;

export const UserProfilePage = observer(_UserProfile);

function _UserProfile() {
  const { show, SnackBarMessage } = useSnackBarMessage();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <Loading />}
      <div className={`${Style.Box}`}>
        <AppBar title="Perfil" showArrowBack={true} />

        <ImagePicker
          initialImage={userBlocInstance.getImageProfile}
          className={Style.Box_ImagePicker}
          accept="image/png, image/jpeg, image/jpg"
          onChange={async (props) => {
            try {
              setIsLoading(true);
              const { url, file } = props;
              userBlocInstance.setImageProfile(url);
              await setImageProfileService({
                base64: url,
                file,
              });
              show({ typeMessage: "success" });
              setIsLoading(false);
            } catch (error) {
              show({ typeMessage: "error" });
              setIsLoading(false);
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

              await setNameService({ name: value });
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
              setInfoService(value);
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
            try {
              userBlocInstance.setPhone(value);

              setPhoneService({
                phone: value,
              });
              show({ typeMessage: "success" });
            } catch (error) {
              show({ typeMessage: "error" });
            }
          }}
        />

        <SnackBarMessage />
      </div>
    </>
  );
}
