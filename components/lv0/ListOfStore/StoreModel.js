export class Sponsor {
  /**@type {number} */
  index;

  /**@type {boolean} */
  isSponsor;
}

export class StoreModel {
  /** @type {string} */
  id;

  /** @type {string} */
  name;

  /** @type {string} */
  urlImage;

  /**@type {Sponsor} */
  sponsor;

  /**@type {number} */
  popular;

  /**@type {string} */
  creatingDate;

  /**@type {string} */
  updateDate;

  /**
   *
   * @param {StoreModel} data
   */
  constructor(data) {
    this.id = data["id"];
    this.name = data["name"];
    this.urlImage = data["urlImage"];
    this.sponsor = data["sponsor"];
    this.popular = data["popular"];
    this.creatingDate = data["creatingDate"];
    this.updateDate = data["updateDate"];
  }
}
