// @ts-check

import { UserBloc } from "../UserBloc";

/**
 * @param {UserBloc} it
 */
export const closeSession = (it) => {
  if (typeof localStorage === "undefined") return;

  it.token = "";
  it.isAuthenticate = false;
  localStorage.removeItem(it.keyToken);
  localStorage.removeItem(it.keyIsAuthenticate);
};
