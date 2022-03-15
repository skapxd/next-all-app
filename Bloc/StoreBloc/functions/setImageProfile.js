// @ts-check

import { StoreBloc } from "../storeBloc";

/**
 * @param {string} value
 * @param {StoreBloc} it
 * */
export const setImageProfile = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.imageProfile = value;
  localStorage.setItem(it.imageProfile, value);
};
