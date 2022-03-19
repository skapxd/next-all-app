// @ts-check
import { UserBloc } from "../UserBloc";

/**
 * @param {string} value
 * @param {UserBloc} it
 */
export const setInfo = (value, it) => {
  if (typeof localStorage === "undefined") return false;
  it.info = value;
  localStorage.setItem(it.keyInfo, value);
};
