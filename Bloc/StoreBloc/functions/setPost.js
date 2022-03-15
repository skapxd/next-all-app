// @ts-check

import { StoreBloc } from "../storeBloc";

/**
 * @param {{ [x: string] : import("model/PostModel").PostModel}} value
 * @param {StoreBloc} it
 * */
export const setPost = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.post = value;
  const _ = JSON.stringify(value);
  localStorage.setItem(it.keyPost, _);
};
