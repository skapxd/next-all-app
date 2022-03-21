// @ts-check
import { storeBlocInstance } from "Bloc/StoreBloc/StoreBloc";
import { CameraIcon } from "components/global/lv0/Icon/CameraIcon";
import { InfoIcon } from "components/global/lv0/Icon/InfoIcon";
import { PlaceholderImageIcon } from "components/global/lv0/Icon/PlaceholderImageIcon";
import { StoreIcon } from "components/global/lv0/Icon/StoreIcon";
import { ImagePicker } from "components/global/lv0/ImagePicker/ImagePicker";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
import { ProfileListTile } from "components/user-profile/ProfileListTile/ProfileListTile";
import { observer } from "mobx-react-lite";
import Style from "./store-profile.module.scss";

export const storeProfilePathName = () => `/store-profile`;

export default observer(storeProfile);

function storeProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar title="Tienda" showArrowBack={true} />

      <ImagePicker
        initialImage={storeBlocInstance.getImageProfile}
        className={Style.Box_ImagePicker}
        accept="image/png, image/jpeg, image/jpg"
        onChange={(props) => {
          console.log({ props });
          storeBlocInstance.setImageProfile(props.url);
        }}
        imageBuilder={(props) => {
          const { url } = props;
          if (!url)
            return (
              <div className={Style.Box_ImageProfile}>
                <PlaceholderImageIcon className={Style.Box_ImageProfile_Icon} />
                <div className={Style.Box_CameraProfileIcon}>
                  <CameraIcon />
                </div>
              </div>
            );

          return (
            <div className={Style.Box_ImageProfile}>
              <img
                src={url}
                alt="StoreImageProfile"
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
        Icon={() => <StoreIcon className={Style.Icon} />}
        title={"Nombre"}
        value={storeBlocInstance.getName}
        onSave={(value) => {
          storeBlocInstance.setName(value);
        }}
      />

      <ProfileListTile
        Icon={() => <InfoIcon className={Style.Icon} />}
        title={"Info"}
        value={storeBlocInstance.getDescription}
        onSave={(value) => {
          storeBlocInstance.setDescription(value);
        }}
      />
    </div>
  );
}
