// @ts-check
import { action, computed, makeObservable, observable } from "mobx";

// TODO: refactor this class as storeBloc
class UserBloc {
  /**@type {string} */
  email;
  #keyEmail = "UserBlocEmail";

  /**@type {string} */
  name;
  #keyName = "UserBlocName";

  /**@type {string} */
  imageProfile;
  #keyImageProfile = "UserBlocImageProfile";

  /**@type {string} */
  phone;
  #keyPhone = "UserBlocPhone";

  /**
   * @type {{
   * lat: string,
   * lng: string
   * }}
   */
  geolocation;

  /**
   * @type {{
   * countryName: string,
   * countryCode: string
   * }}
   */
  countryMetaInfo;

  /**@type {string} */
  token;
  #keyToken = "UserBlocToken";

  /**@type {string} */
  info;
  #keyInfo = "UserBlocInfo";

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      email: observable,
      token: observable,
      name: observable,
      info: observable,
      phone: observable,
      imageProfile: observable,
      //
      init: action,
      setName: action,
      setInfo: action,
      setPhone: action,
      closeSession: action,
      setImageProfile: action,
      //
      getName: computed,
      getInfo: computed,
      getPhone: computed,
      getEmail: computed,
      getToken: computed,
      getImageProfile: computed,
    });
  }

  init() {
    if (typeof localStorage === "undefined") return false;
    this.name = localStorage.getItem(this.#keyName) || "";
    this.token = localStorage.getItem(this.#keyToken);
    this.phone = localStorage.getItem(this.#keyPhone) || "+57 300 00 00";
    this.info =
      localStorage.getItem(this.#keyInfo) || "Hola! estoy usando All App";
    this.imageUserProfile = localStorage.getItem(this.#keyImageProfile);

    return false;
  }

  // TODO: save phone into db
  /**@param {string} value  */
  setPhone(value) {
    if (typeof localStorage === "undefined") return false;
    this.phone = value;
    localStorage.setItem(this.#keyPhone, value);
  }

  // TODO: save info into db
  /**@param {string} value */
  setInfo(value) {
    if (typeof localStorage === "undefined") return false;
    this.info = value;
    localStorage.setItem(this.#keyInfo, value);
  }

  // TODO: save image into db
  /**@param {string} value */
  setImageProfile(value) {
    this.imageUserProfile = value;
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(this.#keyImageProfile, value);
  }

  // TODO: save name into db
  /**@param {string} name */
  setName(name) {
    this.name = name;
    console.log({ name, thisName: this.name, this: this });
    // if (typeof localStorage === "undefined") return;
    localStorage.setItem(this.#keyName, name);
  }

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.to]
   * @param {string} [param0.name]
   * @param {'email'} [param0.method]
   */
  async getCode({ to, name, method }) {
    to ??= "";
    name ??= "";

    const body = JSON.stringify({
      to,
      name,
      method,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/get-code", options);

    /** @type {{ success: boolean, name: string }} */
    const data = await resp.json();

    return data;
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.code]
   * @param {string} [param0.to]
   * @param {string} [param0.name]
   * @returns
   */
  async verifyCode({ code, to, name }) {
    code ??= "";
    to ??= "";
    name ??= "";

    const body = JSON.stringify({
      code,
      to,
      name,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/verify-code", options);

    /** @type {{ success: boolean, token: string }} */
    const data = await resp.json();

    if (typeof localStorage === "undefined") return;

    this.token = data.token;
    localStorage.setItem(this.#keyToken, this.token);

    return data;
  }

  closeSession() {
    if (typeof localStorage === "undefined") return;

    this.token = "";
    localStorage.setItem(this.#keyToken, this.token);
  }

  //
  get getToken() {
    return this.token;
  }

  get getEmail() {
    return this.email;
  }

  /**@return {string}  */
  get getName() {
    return this.name;
  }

  /**@return {string} */
  get getImageProfile() {
    return this.imageUserProfile;
  }

  get getInfo() {
    return this.info;
  }

  get getPhone() {
    return this.phone;
  }
}

export const userBlocInstance = UserBloc.Instance;
