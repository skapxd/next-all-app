// @ts-check

import { isNumber } from "@skapxd/validate";
import { validate, MapOfValidate } from "@skapxd/validate";
import { response } from "./response";

/**
 * @param {Object} param0
 * @param {string} param0.limit
 * @param {import("next").NextApiResponse} param0.res
 * @returns {{
 * limitAsNumber: number,
 * isValidLimit: boolean
 * }}
 */
export const validateLimit = ({ limit, res }) => {
  if (!limit || limit === "0") {
    response({
      res,
      success: false,
      message: "*limit* param is empty",
    });

    return {
      isValidLimit: false,
      limitAsNumber: null,
    };
  }

  const isOnlyNumber = isNumber(limit)

  if (!isOnlyNumber) {
    response({
      res,
      success: false,
      message: "*limit* param only receive type number",
    });

    return {
      isValidLimit: false,
      limitAsNumber: null,
    };
  }

  const limitAsNumber = Number(limit);

  if (limitAsNumber > 20) {
    response({
      res,
      success: false,
      message: "*limit* param is greater than 20",
    });

    return {
      isValidLimit: false,
      limitAsNumber: null,
    };
  }

  return {
    isValidLimit: true,
    limitAsNumber,
  };
};

