// @ts-check

import { StoreBloc } from "../StoreBloc";

/**
 * @param {string} value
 * @param {StoreBloc} it
 * */
export const setCategory = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.category = value;
  localStorage.setItem(it.keyCategory, value);
};
