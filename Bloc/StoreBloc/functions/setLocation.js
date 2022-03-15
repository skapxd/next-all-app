// @ts-check

import { StoreBloc } from "../storeBloc";

/**
 * @param {{[x: string]: import("../storeBloc").LatLng}} value
 * @param {StoreBloc} it
 * */
export const setLocation = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.location = value;
  const _ = JSON.stringify(value);
  localStorage.setItem(it.keyLocation, _);
};
