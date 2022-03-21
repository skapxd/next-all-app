// @ts-check

/**
 * @param {Object} param0
 * @param {string} [param0.code]
 * @param {string} [param0.to]
 * @param {string} [param0.name]
 * @return {Promise<{
 * success: boolean,
 * token: string,
 * user: import("providers/supabase/db/UserRepository/UserRepository").UserDTO
 * }>}
 */
export const verifyCodeService = async ({ code, to, name }) => {
  if (!code || !to || !name) throw new Error("*code*, *to* or *name* is empty");

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
  const data = await resp.json();
  if (!resp.ok) throw new Error(data?.error ?? "Without connection");

  return {
    success: true,
    token: data["token"],
    user: data["user"],
  };
};
