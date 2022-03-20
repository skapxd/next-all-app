// @ts-check

import { BackgroundAllAppIcon } from "components/global/lv0/Icon/BackgroundAllAppIcon";
import { AppBarSearch } from "components/SearchPage/AppBarSearch/AppBarSearch";
import { useSetHeight } from "hooks/useSetHeight";
import Style from "./search.module.scss";

export const searchPathName = "/search";

export default function Search() {
  // TODO: create search logic
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
