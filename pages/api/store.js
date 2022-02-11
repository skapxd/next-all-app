// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// @ts-check

import Faker from "faker";
import { v4 as idV4 } from "uuid";
import { response } from "helpers/response";
import { StoreModel } from "components/lv0/ListOfStore/StoreModel";
import { TypeDataValidateParam, ValidateParam } from "helpers/validateParam";

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
   * }}
   */
  const { category, limit, from } = req.query;

  const {
    isValidParam: isValidLimit,
    value: limitAsNumber,
    message: messageOfLimit,
  } = ValidateParam({
    nameParam: "*limit query param*",
    param: limit,
    typeData: TypeDataValidateParam.number,
  });

  if (!isValidLimit)
    return response({
      res,
      message: messageOfLimit,
      success: false,
    });

  if (limitAsNumber > 20) {
    return response({
      res,
      success: false,
      message: "*limit* param is greater than 20",
    });
  }

  const {
    isValidParam: isValidFrom,
    value: fromAsNumber,
    message: messageOfFrom,
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
    message: messageOfCategory,
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

  const listOfStoreModel = [];

  for (
    let index = fromAsNumber;
    index < limitAsNumber + fromAsNumber;
    index++
  ) {
    const storeModel = new StoreModel({
      index,
      id: idV4(),
      creatingDate: Faker.date.recent().toString(),
      name: Faker.company.companyName(),
      popular: Faker.datatype.number(5),
      sponsor: {
        index: 0,
        isSponsor: true,
      },
      updateDate: Faker.date.past().toString(),
      urlImage: Faker.random.image(),
    });

    listOfStoreModel.push(storeModel);
  }
  return res.status(200).json({ listOfStoreModel });
}
