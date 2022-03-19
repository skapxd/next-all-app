// @ts-check

import { UserBloc } from "../UserBloc";

/**
 * @param {UserBloc} it
 */
export const init = (it) => {
  if (typeof localStorage === "undefined") return false;
  it.name = localStorage.getItem(it.keyName) || "";
  it.token = localStorage.getItem(it.keyToken);
  it.isAuthenticate = !!it.token;
  it.phone = localStorage.getItem(it.keyPhone) || "+57 300 00 00";
  it.info = localStorage.getItem(it.keyInfo) || "Hola! estoy usando All App";
  it.imageProfile = localStorage.getItem(it.keyImageProfile);
};
