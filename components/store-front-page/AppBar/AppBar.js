import { useRouter } from "next/router";
import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";
import { MenuIcon } from "components/lv0/Icon/MenuIcon";
import { SearchIcon } from "components/lv0/Icon/SearchIcon";
import Style from "./AppBar.module.scss";
import Link from "next/link";

export const AppBar = () => {
  const router = useRouter();

  return (
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
      <MenuIcon />
    </div>
  );
};
