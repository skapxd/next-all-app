// @ts-check

import { BackgroundAllAppIcon } from "components/lv0/Icon/BackgroundAllAppIcon";
import { AppBar } from "components/lv1/AppBar/AppBar";
import { useSetHeight } from "hooks/useSetHeight";
import Style from "./search.module.scss";
export default function Search() {
  useSetHeight();
  return (
    <div className={Style.Box}>
      <div className={Style.Box_MaxWidth}>
        <AppBar />
        <BackgroundAllAppIcon
          className={Style.Box_BoxBackgroundAllAppIcon_BackgroundAllApp}
        />
      </div>
    </div>
  );
}
