// @ts-check

import { StoreBloc } from "../StoreBloc";

/**
 * @param {string} value
 * @param {StoreBloc} it
 * */
export const setDescription = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.description = value;
  localStorage.setItem(it.keyDescription, value);
};
