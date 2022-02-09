// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// @ts-check

import Faker from "faker";
import { v4 as idV4 } from "uuid";
import { response } from "helpers/response";
import { StoreModel } from "components/lv0/ListOfStore/StoreModel";
import { regexValidate } from "@skapxd/regexp-validate";
import { MapOfRegexValidate } from "@skapxd/regex-validate";
import { validateLimit } from "helpers/validateLimit";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default function handler(req, res) {
  /**
   * @type {{
   * category?: string,
   * limit?: string,
   * }}
   */
  const { category = "", limit = "0" } = req.query;

  const { limitAsNumber, isValidLimit } = validateLimit({
    res,
    limit,
  });

  if (!isValidLimit) return;

  if (!category || category === "") {
    return response({
      res,
      success: false,
      message: "*category* param is empty, By is a ",
    });
  }

  const listOfStoreModel = [];

  for (let index = 0; index < limitAsNumber; index++) {
    const storeModel = new StoreModel({
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
