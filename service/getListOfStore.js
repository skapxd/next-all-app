/**
 * @param {Object} props
 * @param {string} props.currentCategory
 * @param {string} props.from
 * @param {string} props.by
 *
 *@return {Promise<{
 * byAsString: string.,
 * categoryAsString: string,
 * listOfStoreModel: StoreModel[]
 * }>}
 */
export const serviceGetListOfStore = async (props) => {
  const { currentCategory, from, by } = props;

  if (!currentCategory && !from && !by)
    throw new Error("*currentCategory*, *by* or *from* params were empty");

  const urlBase = process.env.SITE_URL ?? '';

  const url = `${urlBase}/api/store?category=${currentCategory}&limit=${20}&from=${from}&by=${by}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};

/**@param {string} currentCategory */
export const getListOfStore = async (currentCategory) => {
  try {
    const patrons = serviceGetListOfStore({
      currentCategory,
      by: "patrons",
      from: "0",
    });

    const popular = serviceGetListOfStore({
      currentCategory,
      by: "popular",
      from: "0",
    });

    const update = serviceGetListOfStore({
      currentCategory,
      by: "update",
      from: "0",
    });

    const news = serviceGetListOfStore({
      currentCategory,
      by: "news",
      from: "0",
    });

    const random = serviceGetListOfStore({
      currentCategory,
      by: "random",
      from: "0",
    });

    const listOfPromise = [patrons, popular, news, update, random];

    const resp = await Promise.allSettled(listOfPromise);

    return resp;

    resp.forEach((e) => {
      if (e.status === "rejected") return;
      const by = e.value.byAsString;

      /**@type {Object<string, StoreModel[]>} */
      const _ = {};

      _[by] = e.value.listOfStoreModel;

      stateCategoryPage.setAllList(_);
    });

    stateCategoryPage.setIsLoading(false);
  } catch (error) {
    console.log({ error });
  }
};
