// @ts-check

import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";
import { useRouter } from "next/router";
import Style from "./AppBarLogin.module.scss";

export function AppBarLogin() {
  const router = useRouter();
  return (
    <div className={Style.Box}>
      <ArrowIcon
        className={Style.Box_ArrowIcon}
        direction={ArrowDirection.left}
        onClick={() => router.back()}
      />
    </div>
  );
}
