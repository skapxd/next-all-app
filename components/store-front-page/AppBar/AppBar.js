// @ts-check
import { useRouter } from "next/router";
import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";
import { MenuIcon } from "components/lv0/Icon/MenuIcon";
import { SearchIcon } from "components/lv0/Icon/SearchIcon";
import Style from "./AppBar.module.scss";
import Link from "next/link";
import { PopupMenu } from "components/lv0/PopupMenu/PopupMenu";
import { ListTileMenu } from "components/lv0/ListTileMenu/ListTileMenu";
import { useState } from "react";

export const AppBar = () => {
  const router = useRouter();

  const [popup, showPopup] = useState(false);

  return (
    <>
      {popup && (
        <PopupMenu closePopup={() => showPopup(false)}>
          <ListTileMenu title="Iniciar sesión" />
          <ListTileMenu title="Registro" />
          <ListTileMenu title="Contactame" />
          <ListTileMenu title="Apoyame" />
        </PopupMenu>
      )}
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
        <MenuIcon onClick={() => showPopup(true)} />
      </div>
    </>
  );
};
