// @ts-check

import { StoreBloc } from "../storeBloc";

/**
 * @param {Object<string, import("../storeBloc").Contact>} value
 * @param {StoreBloc} it
 * */
export const setContact = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.contact = value;
  const _ = JSON.stringify(value);
  localStorage.setItem(it.keyContact, _);
};
