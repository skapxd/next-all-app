// @ts-check
import { LinearProgress } from "@mui/material";
import { useDebounce, useInverseDebounce } from "@skapxd/debounce";
import { ListOfStore } from "components/global/lv0/ListOfStore/ListOfStore";
import { stateListOfStoreCategory } from "components/global/lv0/ListOfStoreCategory/StateListOfStoreCategory";
import { Loading } from "components/global/lv0/Loading/Loading";
import { response } from "helpers/response";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { serviceGetListOfStore } from "service/getListOfStore";
import { stateCategoryPage } from "./StateCategoryPage";

export const CategoryPage = observer(_CategoryPage);
/**
 * @param {Object} props
 * @param {Object[]} props.listOfStore
 * @param {string} props.listOfStore.byAsString
 * @param {string} props.listOfStore.categoryAsString
 * @param {StoreModel[]} props.listOfStore.listOfStoreModel
 * @returns
 */
function _CategoryPage(props) {
  // TODO: add rendering from server
  const { listOfStore } = props;
  const debounceGetListOfStore = useDebounce({
    delay: 300,
    fn: (value) => getListOfStore(value),
  });

  useEffect(() => {
    stateCategoryPage.setIsLoading(true);
    debounceGetListOfStore(stateListOfStoreCategory.getCurrentCategory);
  }, [debounceGetListOfStore, stateListOfStoreCategory.getCurrentCategory]);

  /**@param {string} currentCategory */
  const getListOfStore = async (currentCategory) => {
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

  const onNext = async ({ by }) => {
    let length = stateCategoryPage.getAllList[by].length;

    const currentCategory = stateListOfStoreCategory.getCurrentCategory;
    const resp = await serviceGetListOfStore({
      by,
      currentCategory,
      from: "" + length,
    });

    /**@type {Object<string, StoreModel[]>} */
    const _ = {};

    _[by] = [...stateCategoryPage.getAllList[by], ...resp.listOfStoreModel];

    stateCategoryPage.setAllList(_);
  };

  if (stateCategoryPage.getIsLoading) {
    return <Loading />;
  }

  return (
    <div className={" "}>
      <ListOfStore
        title="Patrocinadores"
        listOfStoreModel={stateCategoryPage.getAllList.patrons}
        onNext={async () => await onNext({ by: "patrons" })}
      />
      <ListOfStore
        title="Populares"
        listOfStoreModel={stateCategoryPage.getAllList.popular}
        onNext={async () => await onNext({ by: "popular" })}
      />
      <ListOfStore
        title="Actualizado"
        listOfStoreModel={stateCategoryPage.getAllList.update}
        onNext={async () => await onNext({ by: "update" })}
      />
      <ListOfStore
        title="Nuevos comercios"
        listOfStoreModel={stateCategoryPage.getAllList.news}
        onNext={async () => await onNext({ by: "news" })}
      />
      <ListOfStore
        title="Aleatorios"
        listOfStoreModel={stateCategoryPage.getAllList.random}
        onNext={async () => await onNext({ by: "random" })}
      />
    </div>
  );
}
