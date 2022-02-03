import { StateListOfStoreCategory } from "components/lv0/ListOfStoreCategory/StateListOfStoreCategory";
import { BrandAppBar } from "components/lv1/BrandAppBar/BrandAppBar";
import { observer } from "mobx-react-lite";
import Style from "./index.module.scss";
function Home() {
  const stateListOfStoreCategory = StateListOfStoreCategory.Instance;
  return (
    <div className={Style.index_Scaffold}>
      <BrandAppBar />

      {stateListOfStoreCategory.currentCategory}
    </div>
  );
}

export default observer(Home);