// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

/**
 * @param {Object} props
 * @param {string} props.phone
 */
export const setPhoneService = async (props) => {
  const { phone } = props;

  if (!phone) throw new Error("phone is empty");

  const headers = {
    "x-token": userBlocInstance.getToken,
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    phone,
  });

  /**@type {RequestInit} */
  const options = {
    headers,
    body,
    method: "PATCH",
  };

  const url = "/api/v1/user/set-name";
  const resp = await fetch(url, options);
  const data = await resp.json();
  if (!resp.ok) throw new Error(data?.error ?? "Without connection");

  return {
    success: true,
  };
};
