// @ts-check

import { StoreBloc } from "../StoreBloc";

/**
 * @param {Schedule[]} value
 * @param {StoreBloc} it
 * */
export const setSchedule = (value, it) => {
  if (typeof localStorage === "undefined") return;
  it.schedule = value;
  const _ = JSON.stringify(value);
  localStorage.setItem(it.keySchedule, _);
};
