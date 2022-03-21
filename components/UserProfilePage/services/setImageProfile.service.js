// @ts-check
import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

/**
 * @param {Object} props
 * @param {string} props.base64
 * @param {File} props.file
 */
export const setImageProfileService = async (props) => {
  const { file, base64 } = props;

  if (!file || !base64) throw new Error("file or base64 is empty");

  const headers = {
    "x-token": userBlocInstance.getToken,
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    type: file.type,
    base64,
  });

  /**@type {RequestInit} */
  const options = {
    headers,
    body,
    method: "POST",
  };

  const url = "/api/v1/user/set-image-profile";
  const resp = await fetch(url, options);
  const data = await resp.json();
  if (!resp.ok) throw new Error(data?.error ?? "Without connection");

  return {
    success: true,
  };
};
