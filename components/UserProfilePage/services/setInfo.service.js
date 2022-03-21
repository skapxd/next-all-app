// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

export const setInfoService = async (info) => {
  if (!info) throw new Error("info is empty");

  const headers = {
    "x-token": userBlocInstance.getToken,
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    info,
  });

  /**@type {RequestInit} */
  const options = {
    headers,
    body,
    method: "POST",
  };

  const url = "/api/v1/user/set-info";
  const resp = await fetch(url, options);
  const data = await resp.json();
  if (!resp.ok) throw new Error(data?.error ?? "Without connection");

  return {
    success: true,
  };
};
