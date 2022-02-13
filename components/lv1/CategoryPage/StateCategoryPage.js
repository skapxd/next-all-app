// @ts-check
import { action, computed, makeObservable, observable } from "mobx";
import { StoreModel } from "components/lv0/ListOfStore/StoreModel";
import { Debounce } from "@skapxd/debounce";

class StateCategoryPage {
  /**
   * @type {{
   * patrons: StoreModel[],
   * popular: StoreModel[],
   * update: StoreModel[],
   * news: StoreModel[],
   * random: StoreModel[],
   * }}
   */
  allList = {
    patrons: [],
    popular: [],
    update: [],
    news: [],
    random: [],
  };

  /**@type {boolean} */
  isLoading = true;

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    makeObservable(this, {
      allList: observable.struct,
      isLoading: observable,
      //
      setAllList: action,
      setIsLoading: action,
      cleanList: action,
      //
      getAllList: computed,
      getIsLoading: computed,
    });
  }

  /**@param {Object<string, StoreModel[]>} props */
  setAllList(props) {
    this.allList = {
      ...this.allList,
      ...props,
    };
  }

  /**@param {boolean} value */
  setIsLoading(value) {
    // if (true) {
    //   this.cleanList()    
    // }
    this.isLoading = value;
  }

  cleanList(){
    this.allList = {
      patrons: [],
      popular: [],
      update: [],
      news: [],
      random: [],
    }
  }

  get getAllList() {
    return this.allList;
  }

  get getIsLoading() {
    return this.isLoading;
  }
}

export const stateCategoryPage = StateCategoryPage.Instance;
