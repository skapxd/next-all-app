// @ts-check

import { StoreBloc } from "../storeBloc";

/**
 * @param {StoreBloc} it
 */
export const init = (it) => {
  if (typeof localStorage === "undefined") return;

  it.description =
    localStorage.getItem(it.keyDescription) || "Descripción de la empresa";
  it.contact = JSON.parse(localStorage.getItem(it.keyContact)) || {};
  it.category = localStorage.getItem(it.keyCategory) || "";
  it.imageProfile = localStorage.getItem(it.keyImageProfile) || "";
  it.name = localStorage.getItem(it.keyName) || "";
  it.schedule = JSON.parse(localStorage.getItem(it.keySchedule)) || [];
};
