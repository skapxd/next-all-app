// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

/**
 * @param {Object} props
 * @param {Object} props.name
 * @return {Promise<{
 * success: boolean,
 * }>}
 */
export const setNameService = async (props) => {
  const { name } = props;

  if (!name) throw new Error("name is empty");

  const headers = {
    "x-token": userBlocInstance.getToken,
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    name,
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
