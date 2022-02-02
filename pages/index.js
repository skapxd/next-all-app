import { BrandAppBar } from "components/lv1/BrandAppBar/BrandAppBar";
import Style from "./index.module.scss";
export default function Home() {
  return (
    <div className={Style.index_Scaffold}>
      <BrandAppBar />
      Holaaa
    </div>
  );
}
