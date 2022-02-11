// @ts-check

import { validate } from "@skapxd/validate";
import { isNumber } from "@skapxd/validate";
import { response } from "./response";

/**
 * @param {Object} param0
 * @param {string} param0.from
 * @param {import("next").NextApiResponse} param0.res
 * @returns {{
 * fromAsNumber: number,
 * isValidFrom: boolean
 * }}
 */
export const validateFrom = ({ from, res }) => {
  if (!from || from === "0") {
    response({
      res,
      success: false,
      message: "*offset* param is empty",
    });

    return {
      isValidFrom: false,
      fromAsNumber: null,
    };
  }

  const isOnlyNumber = validate({
    regExp: /[0-9]/,
    stringToValidate: from
  })

  if (!isOnlyNumber) {
    response({
      res,
      success: false,
      message: "*offset* param only receive type number",
    });

    return {
      isValidFrom: false,
      fromAsNumber: null,
    };
  }

  const fromAsNumber = Number(from);

  if (fromAsNumber > 20) {
    response({
      res,
      success: false,
      message: "*offset* param is greater than 20",
    });

    return {
      isValidFrom: false,
      fromAsNumber: null,
    };
  }

  return {
    fromAsNumber: fromAsNumber,
    isValidFrom: true,
  };
};
