// @ts-check

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  // TODO: implement logic to search by name, category, schedule, product and location
  res.send({
    message: "ok",
  });
}
