// @ts-check
import { action, computed, makeObservable, observable } from "mobx";
import { listOfNameStoreCategory } from "model/ListOfStore";

export class StateListOfStoreCategory {
  _currentCategory = listOfNameStoreCategory[0];

  listOfCategoriesStoreName = listOfNameStoreCategory

  get getCurrentCategory() {
    return this._currentCategory
  }

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    makeObservable(this, {
      _currentCategory: observable,
      listOfCategoriesStoreName: observable,
      changeCurrentCategory: action, 
      getCurrentCategory: computed,
    });
  }

  changeCurrentCategory(category) {
    if (!category) throw new Error("param category is empty");
    
    const isCategoryValid = this.listOfCategoriesStoreName.includes(category)
    if (!isCategoryValid) throw new Error("category is not valid");

    this._currentCategory = category;
  }
}

export const stateListOfStoreCategory = StateListOfStoreCategory.Instance