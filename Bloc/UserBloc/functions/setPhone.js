// @ts-check
import { UserBloc } from "../UserBloc";

/**
 * @param {string} value
 * @param {UserBloc} it
 */
export const setPhone = (value, it) => {
  if (typeof localStorage === "undefined") return false;
  it.phone = value;
  localStorage.setItem(it.keyPhone, value);
};
