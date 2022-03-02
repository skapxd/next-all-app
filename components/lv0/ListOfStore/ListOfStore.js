// @ts-check
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDirection, ArrowIcon } from "../Icon/ArrowIcon";
import { PlaceholderImage } from "../Icon/PlaceholderImage";
import {
  AxisInfiniteScroll,
  InfinityScroll,
} from "../InfinityScroll/InfinityScroll";
import Style from "./ListOfStore.module.scss";

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.title]
 * @param {(value: boolean) => Promise<void>} [props.onNext]
 * @param {StoreModel[]} [props.listOfStoreModel]
 */
export function ListOfStore(props) {
  const {
    className = "",
    onNext = async () => console.log("default onNext param of ListOfStore"),
    listOfStoreModel = [],
    title = "Default Title",
  } = props;

  return (
    <div className={Style.Box}>
      <div className={Style.Box_Title}>
        <h2 className={Style.Box_Title_Text}>{title}</h2>
        <ArrowIcon direction={ArrowDirection.right} />
      </div>

      <InfinityScroll
        className={Style.Box_BoxListStore}
        axis={AxisInfiniteScroll.horizontal}
        iterable={listOfStoreModel}
        onNext={onNext}
        itemBuilder={(i) => {
          const e = listOfStoreModel[i];
          const name =
            e.name.length >= 20 ? e.name.substring(0, 16) + "..." : e.name;

          return (
            <Link key={i} href={e.id}>
              <a className={Style.Box_BoxListStore_Box}>
                <div className={Style.Box_BoxListStore_Box_Image}>
                  <img
                    loading="lazy"
                    alt={e.name}
                    className={Style.Box_BoxListStore_Box_Image}
                    height={100}
                    width={100}
                    src={`${e.urlImage}`}
                  />
                </div>

                <h3 className={Style.Box_BoxListStore_Box_Name}>{name}</h3>
              </a>
            </Link>
          );
        }}
      />
    </div>
  );
}
