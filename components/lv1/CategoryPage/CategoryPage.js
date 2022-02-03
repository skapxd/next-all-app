// @ts-check
import { CircularProgress, LinearProgress } from "@mui/material";
import { ListOfStore } from "components/lv0/ListOfStore/ListOfStore";
import { StoreModel } from "components/lv0/ListOfStore/StoreModel";
import { stateListOfStoreCategory } from "components/lv0/ListOfStoreCategory/StateListOfStoreCategory";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import Style from "./CategoryPage.module.scss";

function _CategoryPage() {
  /** @type {StoreModel[]} */
  const initListOfStoreModel = null;
  const [listOfStoreModel, setListOfStoreModel] =
    useState(initListOfStoreModel);

  const currentCategory = stateListOfStoreCategory.getCurrentCategory;

  useEffect(() => {
    setListOfStoreModel(null);
    getListOfStore();
  }, [currentCategory]);

  const getListOfStore = async () => {
    const response = await fetch(`/api/hello?category=${currentCategory}`);
    const data = await response.json();

    setTimeout(() => {
    setListOfStoreModel(() => data.listOfStoreModel);
    }, 1000);
  };

  if (!listOfStoreModel) {
    return <LinearProgress />;
  }

  return (
    <div className={" "}>
      <ListOfStore title="Patrocinadores" listOfStoreModel={listOfStoreModel} />
      <ListOfStore title="Populares" listOfStoreModel={listOfStoreModel} />
      <ListOfStore
        title="Nuevos comercios"
        listOfStoreModel={listOfStoreModel}
      />
      <ListOfStore title="Aleatorios" listOfStoreModel={listOfStoreModel} />
      <ListOfStore title="Actualizado" listOfStoreModel={listOfStoreModel} />
    </div>
  );
}

export const CategoryPage = observer(_CategoryPage);
