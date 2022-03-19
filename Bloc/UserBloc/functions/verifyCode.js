// @ts-check
import { UserBloc } from "../UserBloc";
/**
 * @param {Object} param0
 * @param {string} [param0.code]
 * @param {string} [param0.to]
 * @param {string} [param0.name]
 * @param {UserBloc} param0.it
 * @returns
 */
export const verifyCode = async ({ code, to, name, it }) => {
  code ??= "";
  to ??= "";
  name ??= "";

  const body = JSON.stringify({
    code,
    to,
    name,
  });

  const options = {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resp = await fetch("/api/v1/auth/verify-code", options);

  /** @type {{ success: boolean, token: string }} */
  const data = await resp.json();

  if (typeof localStorage === "undefined") return;

  it.token = data.token;
  localStorage.setItem(it.keyToken, it.token);

  return data;
};
