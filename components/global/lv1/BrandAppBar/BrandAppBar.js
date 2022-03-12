// @ts-check
import { Brand } from "components/global/lv0/Brand/Brand";
import { SearchIcon } from "components/global/lv0/Icon/SearchIcon";
import { ListOfStoreCategory } from "components/global/lv0/ListOfStoreCategory/ListOfStoreCategory";
import Link from "next/link";
import { PopupMenu } from "../PopupMenu/PopupMenu";
import Style from "./BrandAppBar.module.scss";
export function BrandAppBar() {
  return (
    <>
      <div className={Style.BrandAppBar_Box}>
        <div className={Style.BrandAppBar_Box_Icons}>
          <Brand className={Style.BrandAppBar_Box_Icons_Brand} />
          <Link href="/search">
            <a>
              <SearchIcon />
            </a>
          </Link>
          <PopupMenu background="#252833" />
        </div>
        <ListOfStoreCategory />
      </div>
    </>
  );
}
