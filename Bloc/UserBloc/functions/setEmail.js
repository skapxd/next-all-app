// @ts-check

import { UserBloc } from "../UserBloc";

/**
 * @param {string} value
 * @param {UserBloc} it
 */
export const setEmail = (value, it) => {
  if (typeof localStorage === "undefined") return;

  it.email = value;
  localStorage.setItem(it.keyEmail, value);
};
