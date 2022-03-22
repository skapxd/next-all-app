// @ts-check

import { StoreBloc, Contact } from "../StoreBloc";

/**
 * @param {StoreBloc} it
 */
export const init = (it) => {
  if (typeof localStorage === "undefined") return;

  it.description =
    localStorage.getItem(it.keyDescription) || "Descripción de la empresa";
  it.contact = JSON.parse(localStorage.getItem(it.keyContact)) || {};
  it.category = localStorage.getItem(it.keyCategory) || "Todo";
  it.imageProfile = localStorage.getItem(it.keyImageProfile) || "";
  it.name = localStorage.getItem(it.keyName) || "Nombre de empresa";
  it.schedule = JSON.parse(localStorage.getItem(it.keySchedule)) || [];

  /**@type {Contact} */
  const contact = {
    whatsApp: "+57 300 00 00",
    telegram: "@usuario",
    email: "fraken@luna.app",
    facebook: "facebook.com/page",
    instagram: "instagram.com/page",
  };
  it.contact = JSON.parse(localStorage.getItem(it.keyName)) || contact;
};
