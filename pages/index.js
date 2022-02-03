import { CategoryPage } from "components/lv1/CategoryPage/CategoryPage";
import { Scaffold } from "components/lv2/Scaffold/Scaffold";
import { observer } from "mobx-react-lite";
import Style from "./index.module.scss";
function Home() {
  return (
    <div className={Style.Box}>
      <Scaffold>
        <CategoryPage />
      </Scaffold>
    </div>
  );
}

export default observer(Home);
