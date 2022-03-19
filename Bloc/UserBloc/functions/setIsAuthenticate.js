// @ts-check

import { UserBloc } from "../UserBloc";

/**
 *
 * @param {UserBloc} it
 */
export const setIsAuthenticate = (it) => {
  it.isAuthenticate = !!it.token;
};
