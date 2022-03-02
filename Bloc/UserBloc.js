// @ts-check
import {
  stateBottomNavigationBarButton,
  TypeBottomNavigationBarButton,
} from "components/lv0/BottomNavigationBarButton/StateBottomNavigationBarButton";
import { action, computed, makeObservable, observable } from "mobx";
class UserBloc {
  /**@type {string} */
  email;

  /**@type {string} */
  name;

  /**@type {string} */
  #keyToken = "loginToken";

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
  token =
    typeof localStorage !== "undefined" && localStorage.getItem(this.#keyToken);

  constructor() {
    makeObservable(this, {
      email: observable,
      token: observable,
      name: observable,
      //
      validateUserName: action,
      validatePass: action,
      closeSession: action,
      //
      getToken: computed,
      getEmail: computed,
      getName: computed,
    });
  }

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * @param {Object} param0
   * @param {string} param0.email
   */
  async validateUserName({ email }) {
    email ??= "";

    const body = JSON.stringify({
      type: "validUser",
      email: email,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/login", options);

    /**
     * @type {{
     * success: boolean,
     * name: string
     * }}
     */
    const data = await resp.json();

    return data;
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.email]
   * @param {string} [param0.pass]
   */
  async validatePass({ email, pass }) {
    email ??= "";
    pass ??= "";

    const body = JSON.stringify({
      type: "validPass",
      pass: pass,
      email: email,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/login", options);

    /**
     * @type {{
     * success: boolean,
     * token: string
     * }}
     */
    const data = await resp.json();

    if (typeof localStorage === "undefined") return;

    this.token = data.token;
    localStorage.setItem(this.#keyToken, this.token);

    return data;
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.email]
   * @param {string} [param0.name]
   * @returns
   */
  async registerEmail({ email, name }) {
    email ??= "";
    name ??= "";

    const body = JSON.stringify({
      email,
      name,
    });

    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch("/api/v1/auth/send-code", options);

    /** @type {{ success: boolean }} */
    const data = await resp.json();

    return data;
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.code]
   * @param {string} [param0.email]
   * @returns
   */
  async verifyCode({ code, email }) {
    code ??= "";
    email ??= "";

    const body = JSON.stringify({
      code,
      email,
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
    stateBottomNavigationBarButton.changeCurrentButton(
      TypeBottomNavigationBarButton.store
    );
  }

  get getToken() {
    if (typeof localStorage === "undefined") return;
    return this.token;
  }

  get getEmail() {
    return this.email;
  }

  get getName() {
    return this.name;
  }
}

export const userBloc = UserBloc.Instance;
