// @ts-check
import { useRouter } from "next/router";
import { ArrowDirection, ArrowIcon } from "components/global/lv0/Icon/ArrowIcon";
import { SearchIcon } from "components/global/lv0/Icon/SearchIcon";
import Style from "./AppBar.module.scss";
import Link from "next/link";
import { PopupMenu } from "components/global/lv1/PopupMenu/PopupMenu";

export const AppBar = () => {
  const router = useRouter();

  return (
    <>
      <div className={Style.Box}>
        <ArrowIcon
          onClick={() => {
            router.back();
          }}
          className={Style.Box_Arrow}
          direction={ArrowDirection.left}
        />
        <Link href="/search">
          <a>
            <SearchIcon />
          </a>
        </Link>
        <PopupMenu />
      </div>
    </>
  );
};
