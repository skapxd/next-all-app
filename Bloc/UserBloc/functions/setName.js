// @ts-check
import { UserBloc } from "../UserBloc";

/**
 * @param {string} value
 * @param {UserBloc} it
 */
export const setName = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.name = value;
  localStorage.setItem(it.keyName, value);
};
