// @ts-check

import { PlaceholderImage } from "components/lv0/Icon/PlaceholderImage";
import { AppBar } from "components/lv1/AppBar/AppBar";

export function SettingsPage() {
  return (
    <>
      <AppBar title="Ajustes" />
      <_Profile />
    </>
  );
}

function _Profile() {
  return (
    <div>
      <PlaceholderImage />
    </div>
  );
}
