// @ts-check

import { AppBar } from "components/lv1/AppBar/AppBar";
import Style from "./settings.module.scss";
export default function SettingsPage() {
  return (
    <div className={Style.Box}>
      <AppBar title="Ajustes" />
    </div>
  );
}
