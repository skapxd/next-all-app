import { AppBar } from "components/lv1/AppBar/AppBar";
import Style from "./search.module.scss";
export default function Search() {
  return (
    <div className={Style.Box}>
      <div className={Style.Box_MaxWidth}>
        <AppBar  />
      </div>
    </div>
  );
}
