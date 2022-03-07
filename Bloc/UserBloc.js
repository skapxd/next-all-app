// @ts-check
import { action, computed, makeObservable, observable } from "mobx";
import { getLocalStorage, setLocalStorage } from "helpers/customLocalStorage";
class UserBloc {
  #keyEmail = "UserBlocEmail";

  #keyName = "UserBlocName";

  #keyDescription = "UserBlocDescription";

  #keyToken = "UserBlocToken";

  /**@type {string} */
  token;

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

  constructor() {
    makeObservable(this, {
      token: observable,
      //
      setName: action,
      setToken: action,
      closeSession: action,
      setDescription: action,
      //
      getEmail: computed,
      getName: computed,
      getToken: computed,
    });
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

    setLocalStorage({
      key: this.#keyToken,
      value: data.token,
    });

    return data;
  }

  closeSession() {
    this.token = "";
    setLocalStorage({
      key: this.#keyToken,
      value: "",
    });
  }

  get getToken() {
    this.token = getLocalStorage({
      key: this.#keyToken,
    });
    return this.token;
  }

  get getEmail() {
    return getLocalStorage({ key: this.#keyEmail });
  }

  /**@return {string}  */
  get getName() {
    return getLocalStorage({
      key: this.#keyName,
    });
  }

  /**@return {string}  */
  get getDescription() {
    return getLocalStorage({
      key: this.#keyDescription,
    });
  }

  /////////////////////////////////
  setName(name) {
    setLocalStorage({
      key: this.#keyName,
      value: name,
    });
  }

  setDescription(name) {
    setLocalStorage({
      key: this.#keyDescription,
      value: name,
    });
  }

  setToken() {
    this.token = getLocalStorage({
      key: this.#keyToken,
    });
  }
}

export const userBloc = UserBloc.Instance;
