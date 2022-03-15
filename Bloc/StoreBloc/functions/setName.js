// @ts-check

import { StoreBloc } from "../storeBloc";

/**
 * @param {string} value
 * @param {StoreBloc} it
 * */
export const setName = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.name = value;
  localStorage.setItem(it.keyName, value);
};
