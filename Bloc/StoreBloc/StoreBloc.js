// @ts-check

import { action, computed, makeObservable, observable } from "mobx";
import { init } from "./functions/init";
import { setCategory } from "./functions/setCategory";
import { setContact } from "./functions/setContact";
import { setDescription } from "./functions/setDescription";
import { setImageProfile } from "./functions/setImageProfile";
import { setLocation } from "./functions/setLocation";
import { setName } from "./functions/setName";
import { setPost } from "./functions/setPost";
import { setSchedule } from "./functions/setSchedule";

/**
 * @typedef {Object} LatLng
 * @prop {string} lat
 * @prop {string} lng
 */

/**
 * @typedef {Object} Contact
 * @prop {string} whatsApp
 * @prop {string} telegram
 * @prop {string} email
 * @prop {string} facebook
 * @prop {string} instagram
 * */

export class StoreBloc {
  /**@type {string} */
  name;
  keyName = "StoreBlocName";

  /**@type {string} */
  description;
  keyDescription = "StoreBlocDescription";

  /** @type {Contact}  */
  contact;
  keyContact = "StoreBlocContact";

  /**@type {string} */
  category;
  keyCategory = "StoreBlocCategory";

  /**@type {string} */
  imageProfile;
  keyImageProfile = "StoreBlocImageProfile";

  /**@type {Schedule[]} */
  schedule;
  keySchedule = "StoreBlocSchedule";

  /** @type {{[x: string] : LatLng}} */
  location;
  keyLocation = "StoreBlocLocation";

  /** @type {{[x: string] : import("model/PostModel").PostModel}} */
  post;
  keyPost = "StoreBlocPost";

  constructor() {
    makeObservable(this, {
      name: observable,
      description: observable,
      contact: observable.struct,
      category: observable,
      imageProfile: observable,
      schedule: observable.struct,
      location: observable.struct,
      post: observable.struct,
      //
      init: action,
      setName: action,
      setDescription: action,
      setContact: action,
      setCategory: action,
      setImageProfile: action,
      setSchedule: action,
      setLocation: action,
      setPost: action,
      //
      getName: computed,
      getDescription: computed,
      getContact: computed,
      getCategory: computed,
      getImageProfile: computed,
      getSchedule: computed,
      getLocation: computed,
      getPost: computed,
    });
  }

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  init() {
    init(this);
    return false;
  }

  // TODO: Sabe name in db
  /**@param {string} value */
  setName(value) {
    setName(value, this);
  }

  // TODO: Sabe description in db
  /**@param {string} value */
  setDescription(value) {
    setDescription(value, this);
  }

  // TODO: Sabe contact in db
  /** @param {Contact} value */
  setContact(value) {
    setContact(value, this);
  }

  // TODO: Sabe category in db
  /**@param {string} value */
  setCategory(value) {
    setCategory(value, this);
  }

  // TODO: Sabe image profile in db
  /**@param {string} value */
  setImageProfile(value) {
    setImageProfile(value, this);
  }

  // TODO: Sabe schedule in db
  /**@param {Schedule[]} value */
  setSchedule(value) {
    setSchedule(value, this);
  }

  // TODO: Sabe location in db
  /**@param {{[x: string]: LatLng}} value */
  setLocation(value) {
    setLocation(value, this);
  }

  // TODO: Sabe posts in db
  /**@param { { [x : string] : import("model/PostModel").PostModel} } value */
  setPost(value) {
    setPost(value, this);
  }

  //
  get getName() {
    return this.name;
  }

  get getDescription() {
    return this.description;
  }

  get getContact() {
    return this.contact;
  }

  get getCategory() {
    return this.category;
  }

  get getImageProfile() {
    return this.imageProfile;
  }

  get getSchedule() {
    return this.imageProfile;
  }

  get getLocation() {
    return this.location;
  }

  get getPost() {
    return this.post;
  }
}

export const storeBlocInstance = StoreBloc.Instance;
