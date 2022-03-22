// @ts-check
import { storeBlocInstance } from "Bloc/StoreBloc/StoreBloc";
import { Divider } from "components/global/lv0/Divider/Divider";
import { CameraIcon } from "components/global/lv0/Icon/CameraIcon";
import { CategoryIcon } from "components/global/lv0/Icon/CategoryIcon";
import { FacebookIcon } from "components/global/lv0/Icon/FacebookIcon";
import { InfoIcon } from "components/global/lv0/Icon/InfoIcon";
import { InstagramIcon } from "components/global/lv0/Icon/InstagramIcon";
import { LocationIcon } from "components/global/lv0/Icon/LocationIcon";
import { PlaceholderImageIcon } from "components/global/lv0/Icon/PlaceholderImageIcon";
import { StoreIcon } from "components/global/lv0/Icon/StoreIcon";
import { TelegramIcon } from "components/global/lv0/Icon/TelegramIcon";
import { WatchIcon } from "components/global/lv0/Icon/WatchIcon";
import { WhatsAppIcon } from "components/global/lv0/Icon/WhatsAppIcon";
import { ImagePicker } from "components/global/lv0/ImagePicker/ImagePicker";
import { ListTileBoldContent } from "components/global/lv0/ListTileBoldContent/ListTileBoldContent";
import { ListTileBoldTitle } from "components/global/lv0/ListTileBoldTitle/ListTileBoldTitle";
import { AppBar } from "components/global/lv1/AppBar/AppBar";
// import { ProfileListTile as ListTileBoldContent } from "components/UserProfilePage/components/ProfileListTile/ProfileListTile";
import { observer } from "mobx-react-lite";
import Style from "./StoreProfilePage.module.scss";

export const storeProfilePathName = () => `/store-profile`;

export default observer(storeProfile);

function storeProfile() {
  return (
    <div className={`${Style.Box}`}>
      <AppBar
        title="Tienda"
        showArrowBack={true}
        TrailingIcon={() => {
          return <p className={Style.VistaPrevia}>Vista previa</p>;
        }}
      />

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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <ListTileBoldContent
          Icon={() => <StoreIcon className={Style.Icon} />}
          title={"Nombre"}
          value={storeBlocInstance.getName}
          onSave={(value) => {
            storeBlocInstance.setName(value);
          }}
        />

        <ListTileBoldContent
          Icon={() => <CategoryIcon className={Style.Icon} />}
          title={"Categoría"}
          value={storeBlocInstance.getCategory}
          onSave={(value) => {
            storeBlocInstance.setName(value);
          }}
        />

        <ListTileBoldContent
          Icon={() => <WhatsAppIcon className={Style.Icon} />}
          title={"WhatsApp"}
          value={storeBlocInstance.getContact.whatsApp}
          onSave={(value) => {
            storeBlocInstance.setDescription(value);
          }}
        />

        <ListTileBoldContent
          Icon={() => <TelegramIcon className={Style.Icon} />}
          title={"Telegram"}
          value={storeBlocInstance.getContact.telegram}
          onSave={(value) => {
            storeBlocInstance.setDescription(value);
          }}
        />

        <ListTileBoldContent
          Icon={() => <FacebookIcon className={Style.Icon} />}
          title={"Facebook"}
          value={storeBlocInstance.getContact.facebook}
          onSave={(value) => {
            storeBlocInstance.setDescription(value);
          }}
        />

        <ListTileBoldContent
          Icon={() => <InstagramIcon className={Style.Icon} />}
          title={"Instagram"}
          value={storeBlocInstance.getContact.instagram}
          onSave={(value) => {
            storeBlocInstance.setDescription(value);
          }}
        />

        <Divider />

        <ListTileBoldTitle
          Icon={() => <InfoIcon className={Style.Icon} />}
          title={"Info"}
          value={"Descripción de la empresa"}
        />

        <ListTileBoldTitle
          Icon={() => <PlaceholderImageIcon className={Style.Icon} />}
          title={"Fotos"}
          value={"Fotos que los usuarios verán en la pasarela"}
        />

        <ListTileBoldTitle
          Icon={() => <LocationIcon className={Style.Icon} />}
          title={"Ubicación"}
          value={"Selecciona las ubicaciones donde estés establecido"}
        />

        <ListTileBoldTitle
          Icon={() => <WatchIcon className={Style.Icon} />}
          title={"Horarios"}
          value={"Selecciona los días y las horas de trabajo"}
        />
      </div>
    </div>
  );
}
