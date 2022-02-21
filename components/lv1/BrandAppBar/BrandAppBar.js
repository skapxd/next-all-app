// @ts-check
import { Brand } from "components/lv0/Brand/Brand";
import { MenuIcon } from "components/lv0/Icon/MenuIcon";
import { SearchIcon } from "components/lv0/Icon/SearchIcon";
import { ListOfStoreCategory } from "components/lv0/ListOfStoreCategory/ListOfStoreCategory";
import { ListTileMenu } from "components/lv0/ListTileMenu/ListTileMenu";
import { PopupMenu } from "components/lv0/PopupMenu/PopupMenu";
import Link from "next/link";
import { useState } from "react";
import Style from "./BrandAppBar.module.scss";
export function BrandAppBar() {
  const [popup, showPopup] = useState(false);

  return (
    <>
      {popup && (
        <PopupMenu background="#252833" closePopup={() => showPopup(false)}>
          <ListTileMenu title="Iniciar sesión" />
          <ListTileMenu title="Registro" />
          <ListTileMenu title="Contactame" />
          <ListTileMenu title="Apoyame" />
        </PopupMenu>
      )}
      <div className={Style.BrandAppBar_Box}>
        <div className={Style.BrandAppBar_Box_Icons}>
          <Brand className={Style.BrandAppBar_Box_Icons_Brand} />
          <Link href="/search">
            <a>
              <SearchIcon />
            </a>
          </Link>
          <MenuIcon onClick={() => showPopup(true)} />
        </div>
        <ListOfStoreCategory />
      </div>
    </>
  );
}
