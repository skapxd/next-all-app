import { Brand } from "components/lv0/Brand/Brand";
import { MenuIcon } from "components/lv0/Icon/MenuIcon";
import { SearchIcon } from "components/lv0/Icon/SearchIcon";
import { ListOfStoreCategory } from "components/lv0/ListOfStoreCategory/ListOfStoreCategory";
import Link from "next/link";
import Style from "./BrandAppBar.module.scss";
export function BrandAppBar() {
  return (
    <div className={Style.BrandAppBar_Box}>
      <div className={Style.BrandAppBar_Box_Icons}>
        <Brand className={Style.BrandAppBar_Box_Icons_Brand} />
        <Link href="/search">
        <a >

        <SearchIcon />
        </a>
        </Link>
        <MenuIcon />
      </div>
      <ListOfStoreCategory/>
    </div>
  );
}