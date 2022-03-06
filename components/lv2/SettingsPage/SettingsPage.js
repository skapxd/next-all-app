// @ts-check

import {
  BorderRadius,
  PlaceholderImage,
} from "components/lv0/PlaceholderImage/PlaceholderImage";
import { AppBar } from "components/lv1/AppBar/AppBar";
import Style from "./SettingsPage.module.scss";
export function SettingsPage() {
  return (
    <>
      <AppBar title="Ajustes" />
      <_Profile />
    </>
  );
}

function _Profile(props) {
  return (
    <div className={Style.BoxProfile}>
      <PlaceholderImage borderRadius={BorderRadius.circular} />
    </div>
  );
}
