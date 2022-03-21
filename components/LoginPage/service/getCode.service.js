// @ts-check

/**
 * @param {Object} param0
 * @param {string} param0.to
 * @param {string} param0.name
 * @param {'email'} param0.method
 * @returns
 */
export const getCodeService = async ({ to, name, method }) => {
  if (!to || !name || !method)
    throw new Error("*to*, *name* or *method* is empty");

  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    to,
    name,
    method,
  });

  /**@type {RequestInit} */
  const options = {
    headers,
    body,
    method: "POST",
  };

  const url = "/api/v1/auth/get-code";
  const resp = await fetch(url, options);
  const data = await resp.json();
  if (!resp.ok) throw new Error(data?.error ?? "Without connection");

  return {
    name: data["name"],
    success: true,
  };
};
