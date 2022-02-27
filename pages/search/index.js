// @ts-check

import { BackgroundAllAppIcon } from "components/lv0/Icon/BackgroundAllAppIcon";
import { AppBarSearch } from "components/search/AppBarSearch/AppBarSearch";
import { useSetHeight } from "hooks/useSetHeight";
import Style from "./search.module.scss";
export default function Search() {
  useSetHeight();
  return (
    <div className={Style.Box}>
      <div className={Style.Box_MaxWidth}>
        <AppBarSearch />
        <BackgroundAllAppIcon
          className={Style.Box_BoxBackgroundAllAppIcon_BackgroundAllApp}
        />
      </div>
    </div>
  );
}
