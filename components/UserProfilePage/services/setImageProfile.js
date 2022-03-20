// @ts-check
import { userBlocInstance } from "Bloc/UserBloc/UserBloc";

/**
 * @param {Object} props
 * @param {string} props.base64
 * @param {File} props.file
 * @return {Promise<{
 * publicUrl: string,
 * error: string
 * }>}
 */
export const setImageProfile = async (props) => {
  try {
    const { file, base64 } = props;

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

    return {
      publicUrl: data["publicUrl"],
      error: null,
    };
  } catch (error) {
    return {
      publicUrl: null,
      error: error.message,
    };
  }
};
