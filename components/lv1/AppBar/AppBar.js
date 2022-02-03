import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";
import { useRouter } from "next/router";
import Style from "./AppBar.module.scss";
export function AppBar() {
  const router = useRouter();
  return (
    <div className={Style.Box}>
      <ArrowIcon
        className={Style.Box_ArrowIcon}
        direction={ArrowDirection.left}
        onClick={() => router.back()}
      />
      <input  className={Style.Box_Input} type="text" name="" id="" placeholder="Buscar..." />
    </div>
  );
}
