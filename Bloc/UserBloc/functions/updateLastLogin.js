// @ts-check

import { UserBloc } from "../UserBloc";

/**
 * @param {UserBloc} it
 */
export const updateLastLogin = (it) => {
  if (typeof localStorage === "undefined") return;

  const headers = {
    "x-token": it.token,
  };

  const options = {
    headers,
    method: "PATCH",
  };

  const url = "/api/v1/auth/update-last-login";

  fetch(url, options);
};
