// @ts-check

import { UserBloc } from "../UserBloc";

/**
 *
 * @param {UserBloc} it
 */
export const setIsAuthenticate = (it) => {
  if (typeof localStorage === "undefined") return;
  it.isAuthenticate = !!it.token;
  localStorage.setItem(it.keyIsAuthenticate, (!!it.token).toString());
};
