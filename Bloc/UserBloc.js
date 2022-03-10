// @ts-check
import { action, computed, makeObservable, observable } from "mobx";
import { useRouter } from "next/router";

class UserBloc {
  /**@type {string} */
  email;

  /**@type {string} */
  name;

  /**
   * @type {{
   * lat: string,
   * lng: string
   * }}
   */
  geolocation;

  // #keyToken = "loginToken";
  #keyEmail = "UserBlocEmail";

  #keyName = "UserBlocName";

  #keyDescription = "UserBlocDescription";

  #keyToken = "UserBlocToken";

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
      //
      closeSession: action,
      setToken: action,
      setName: action,

      //
      getToken: computed,
      getEmail: computed,
      getName: computed,
      //       token: observable,
      //       //
      //       setName: action,
      //       setToken: action,
      //       closeSession: action,
      //       setDescription: action,
      //       //
      //       getEmail: computed,
      //       getName: computed,
      //       getToken: computed,
      //     });
    });
  }

  setName(name) {
    if (typeof localStorage === "undefined") return;

    localStorage.setItem(this.#keyName, name);
    // setLocalStorage({
    //   key: this.#keyName,
    //   value: name,
    // });
  }
  setToken() {
    if (typeof localStorage !== "undefined") {
      this.token = localStorage.getItem(this.#keyToken);
    }
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
    // localStorage.setItem(keyToken, this.token);

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
    return localStorage.getItem(this.#keyName);
  }
}

export const userBloc = UserBloc.Instance;
