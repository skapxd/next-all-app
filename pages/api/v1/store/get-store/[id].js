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
  const { query } = req;

  const { errorMessage, isValidParam, value } = ValidateParam({
    nameParam: "*id param: Ejp: api/v1/store/${id}*",
    param: query,
    typeData: TypeDataValidateParam.string,
    isRequired: true,
  });

  // if (!isValidParam)
  //   return res.status(400).json({
  //     error: errorMessage,
  //   });

  /**@type {StoreModel[]} */
  const listOfStore = getListStore({
    from: 0,
    limit: 1,
  });

  const store = listOfStore[0];

  return res.json({
    store,
  });
}
