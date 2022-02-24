// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// @ts-check

import { response } from "helpers/response";
import { TypeDataValidateParam, ValidateParam } from "helpers/validateParam";
import { getListStore } from "helpers/getListStore";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {
  /**
   * @type {{
   * category?: string,
   * limit?: string,
   * from?: string,
   * by?: string
   * }}
   */
  const { category, limit, from, by } = req.query;

  const {
    isValidParam: isValidLimit,
    value: limitAsNumber,
    errorMessage: messageOfLimit,
  } = ValidateParam({
    nameParam: "*limit query param*",
    param: limit,
    length: 20,
    typeData: TypeDataValidateParam.number,
  });

  if (!isValidLimit)
    return response({
      res,
      message: messageOfLimit,
      success: false,
    });

  const {
    isValidParam: isValidFrom,
    value: fromAsNumber,
    errorMessage: messageOfFrom,
  } = ValidateParam({
    nameParam: "*from query param*",
    param: from,
    typeData: TypeDataValidateParam.number,
  });

  if (!isValidFrom)
    return response({
      res,
      message: messageOfFrom,
      success: false,
    });

  const {
    isValidParam: isValidCategory,
    value: categoryAsString,
    errorMessage: messageOfCategory,
  } = ValidateParam({
    nameParam: "*category query param*",
    param: category,
    typeData: TypeDataValidateParam.string,
  });

  if (!isValidCategory)
    return response({
      res,
      message: messageOfCategory,
      success: false,
    });

  const {
    isValidParam: isValidBy,
    value: byAsString,
    errorMessage: messageOfBy,
  } = ValidateParam({
    nameParam: "*by query param*",
    param: by,
    typeData: TypeDataValidateParam.string,
  });

  if (!isValidBy)
    return response({
      res,
      message: messageOfBy,
      success: false,
    });

  const listOfStoreModel = getListStore({
    from: fromAsNumber,
    limit: limitAsNumber,
  });

  return res
    .status(200)
    .json({ categoryAsString, byAsString, listOfStoreModel });
}
