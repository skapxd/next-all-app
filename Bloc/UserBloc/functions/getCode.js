// @ts-check

/**
 * @param {Object} param0
 * @param {string} param0.to
 * @param {string} param0.name
 * @param {'email'} param0.method
 * @returns
 */
export const getCode = async ({ to, name, method }) => {
  to ??= "";
  name ??= "";

  const body = JSON.stringify({
    to,
    name,
    method,
  });

  const options = {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resp = await fetch("/api/v1/auth/get-code", options);

  /** @type {{ success: boolean, name: string }} */
  const data = await resp.json();

  return data;
};
