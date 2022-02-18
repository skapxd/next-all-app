// @ts-check

import { response } from "helpers/response";
import { TypeDataValidateParam, ValidateParam } from "helpers/validateParam";
import { MediaType, PostModel } from "model/PostModel";
import { v4 as idV4 } from "uuid";
import Faker from "faker";
import { getListPost } from "helpers/getListPost";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {
  /**
   * @type {{
   * limit?: string,
   * from?: string,
   * id?: string
   * }}
   */
  const { id, limit, from } = req.query;

  const {
    isValidParam: isValidId,
    errorMessage: errorMessageId,
    value: valueAsStringId,
  } = ValidateParam({
    nameParam: "*id query param*",
    param: id,
    typeData: TypeDataValidateParam.string,
    isRequired: true,
  });

  if (!isValidId)
    return response({
      res,
      success: false,
      message: errorMessageId,
    });

  const {
    isValidParam: isValidLimit,
    errorMessage: errorMessageLimit,
    value: valueAsStringLimit,
  } = ValidateParam({
    nameParam: "*limit query param*",
    param: limit,
    typeData: TypeDataValidateParam.number,
    isRequired: true,
    length: 20,
  });

  if (!isValidLimit)
    return response({
      res,
      success: false,
      message: errorMessageLimit,
    });

  const {
    isValidParam: isValidFrom,
    errorMessage: errorMessageFrom,
    value: valueAsStringFrom,
  } = ValidateParam({
    nameParam: "*from query param*",
    param: from,
    typeData: TypeDataValidateParam.number,
    isRequired: true,
    length: 20,
  });

  if (!isValidFrom)
    return response({
      res,
      success: false,
      message: errorMessageFrom,
    });

  const listOfPostModel = getListPost({
    from: valueAsStringFrom,
    limit: valueAsStringLimit,
  });

  return res.status(200).json({
    listOfPostModel,
  });
}
