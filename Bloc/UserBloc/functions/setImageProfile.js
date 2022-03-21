// @ts-check

import { UserBloc } from "../UserBloc";

/**
 * @param {string} value
 * @param {UserBloc} it
 */
export const setImageProfile = (value, it) => {
  it.imageProfile = value;
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(it.keyImageProfile, value);
};
