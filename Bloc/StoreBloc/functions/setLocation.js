// @ts-check

import { StoreBloc } from "../StoreBloc";

/**
 * @param {{[x: string]: import("../StoreBloc").LatLng}} value
 * @param {StoreBloc} it
 * */
export const setLocation = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.location = value;
  const _ = JSON.stringify(value);
  localStorage.setItem(it.keyLocation, _);
};
