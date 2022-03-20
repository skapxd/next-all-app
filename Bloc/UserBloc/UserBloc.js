// @ts-check
import { action, computed, makeObservable, observable } from "mobx";
import { closeSession } from "./functions/closeSession";
import { getCode } from "./functions/getCode";
import { init } from "./functions/init";
import { setBrowserFingerPrint as setBrowserFingerPrint } from "./functions/setBrowserFingerPrint";
import { setEmail } from "./functions/setEmail";
import { setImageProfile } from "./functions/setImageProfile";
import { setInfo } from "./functions/setInfo";
import { setIsAuthenticate } from "./functions/setIsAuthenticate";
import { setName } from "./functions/setName";
import { setPhone } from "./functions/setPhone";
import { updateLastLogin } from "./functions/updateLastLogin";
import { verifyCode } from "./functions/verifyCode";

export class UserBloc {
  /**@type {string} */
  email;
  keyEmail = "UserBlocEmail";

  /**@type {string} */
  name;
  keyName = "UserBlocName";

  /**@type {string} */
  imageProfile;
  keyImageProfile = "UserBlocImageProfile";

  /**@type {string} */
  phone;
  keyPhone = "UserBlocPhone";

  /**@type {string} */
  token;
  keyToken = "UserBlocToken";

  /**@type {string} */
  info;
  keyInfo = "UserBlocInfo";

  /**@type {string} */
  browserFingerPrint;
  keyBrowserFingerPrint = "UserBlocBrowserFingerPrint";

  /**@type {boolean} */
  isAuthenticate;

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
      email: observable,
      token: observable,
      name: observable,
      info: observable,
      phone: observable,
      imageProfile: observable,
      isAuthenticate: observable,
      browserFingerPrint: observable,
      //
      init: action,
      //
      setName: action,
      getName: computed,
      //
      setInfo: action,
      getInfo: computed,
      //
      setPhone: action,
      getPhone: computed,
      //
      closeSession: action,
      setImageProfile: action,
      setBrowserFingerPrint: action,
      //
      getEmail: computed,
      getToken: computed,
      getImageProfile: computed,
      getIsAuthenticate: computed,
      getBrowserFingerPrint: computed,
    });
  }

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  init() {
    init(this);
    return false;
  }

  // TODO: save phone into db
  /**@param {string} value  */
  setPhone(value) {
    setPhone(value, this);
  }

  // TODO: save info into db
  /**@param {string} value */
  setInfo(value) {
    setInfo(value, this);
  }
  get getInfo() {
    return this.info;
  }

  // TODO: save image into db
  /**@param {string} value */
  setImageProfile(value) {
    setImageProfile(value, this);
  }
  get getImageProfile() {
    return this.imageProfile;
  }

  // TODO: save name into db
  /**@param {string} value */
  setName(value) {
    setName(value, this);
  }
  get getName() {
    return this.name;
  }

  /**
   * @param {string} value
   */
  setEmail(value) {
    setEmail(value, this);
  }
  get getEmail() {
    return this.email;
  }

  setIsAuthenticate() {
    setIsAuthenticate(this);
  }

  // TODO: save browser finger print into db
  setBrowserFingerPrint() {
    setBrowserFingerPrint(this);
  }
  get getBrowserFingerPrint() {
    return this.browserFingerPrint;
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.to]
   * @param {string} [param0.name]
   * @param {'email'} [param0.method]
   */
  async getCode({ to, name, method }) {
    return getCode({ to, name, method });
  }

  /**
   * @param {Object} param0
   * @param {string} [param0.code]
   * @param {string} [param0.to]
   * @param {string} [param0.name]
   * @returns
   */
  async verifyCode({ code, to, name }) {
    return verifyCode({ code, to, name, it: this });
  }

  closeSession() {
    closeSession(this);
  }

  updateLastLogin() {
    updateLastLogin(this);
  }

  get getToken() {
    return this.token;
  }

  get getPhone() {
    return this.phone;
  }

  get getIsAuthenticate() {
    return this.isAuthenticate;
  }
}

export const userBlocInstance = UserBloc.Instance;
