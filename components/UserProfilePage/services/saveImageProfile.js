// @ts-check

import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

/**
 * @param {Object} props
 * @param {string} props.base64
 * @param {string} props.name
 * @return {Promise<{
 * publicUrl: string
 * } | {
 * error: string
 * }>}
 */
export const saveImageProfile = async (props) => {
  try {
    const { name, base64 } = props;
    const url = "/api/v1/user/save-image-profile";

    const headers = {
      "x-token": userBlocInstance.getToken,
    };

    const body = JSON.stringify({
      name,
      base64,
    });

    /**@type {RequestInit} */
    const options = {
      headers,
      body,
      method: "POST",
    };

    const resp = await fetch(url, options);

    const data = await resp.json();

    return {
      publicUrl: data["publicUrl"]["publicURL"],
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
