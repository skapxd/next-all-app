// @ts-check

import { UserBloc } from "../UserBloc";

/**
 * @param {UserBloc} it
 */
export const closeSession = (it) => {
  if (typeof localStorage === "undefined") return;

  it.token = "";
  localStorage.setItem(it.keyToken, it.token);
  it.isAuthenticate = false;
};
