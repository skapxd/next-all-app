// @ts-check
import { action, computed, makeObservable, observable } from "mobx";
import { useRouter } from "next/router";

class UserBloc {
  /**@type {string} */
  email;

  /**@type {string} */
  name;

  /**@type {string} */
  imageProfile;

  /**
   * @type {{
   * lat: string,
   * lng: string
   * }}
   */
  geolocation;

  #keyEmail = "UserBlocEmail";

  #keyName = "UserBlocName";

  #keyDescription = "UserBlocDescription";

  #keyToken = "UserBlocToken";

  #keyImageProfile = "UserBlocImageProfile";

  /**
   * @type {{
   * countryName: string,
   * countryCode: string
   * }}
   */
  countryMetaInfo;

  /**@type {string} */
  token;

  constructor() {
    makeObservable(this, {
      email: observable,
      token: observable,
      name: observable,
      imageProfile: observable,
      //
      setName: action,
      closeSession: action,
      setImageProfile: action,
      init: action,
      //
      getName: computed,
      getEmail: computed,
      getToken: computed,
      getImageProfile: computed,
    });
  }

  init() {
    if (typeof localStorage === "undefined") return;
    this.imageProfile = localStorage.getItem(this.#keyImageProfile);
    this.token = localStorage.getItem(this.#keyToken);
    this.name = localStorage.getItem(this.#keyName);
  }

  // TODO: save image into db
  /**@param {string} value */
  setImageProfile(value) {
    this.imageProfile = value;
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(this.#keyImageProfile, value);
  }

  // TODO: save name into db
  /**@param {string} name */
  setName(name) {
    if (typeof localStorage === "undefined") return;

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
   * @returns
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

  get getToken() {
    if (typeof localStorage === "undefined") return;
    return this.token;
  }

  get getEmail() {
    return this.email;
  }

  /**@return {string}  */
  get getName() {
    if (typeof localStorage === "undefined") return;
    return this.name;
  }

  /**@return {string} */
  get getImageProfile() {
    if (typeof localStorage === "undefined") return;

    return this.imageProfile;
  }
}

export const userBloc = UserBloc.Instance;
