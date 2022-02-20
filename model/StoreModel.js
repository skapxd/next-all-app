/**
 * @typedef {Object} Sponsor
 * @prop {number} index
 * @prop {boolean} isSponsor
 */

/**
 * @typedef {Object} Schedule
 * @prop {number} day
 * @prop {string} hour
 */

/**
 * @typedef {Object} Contact
 * @prop {string} [instagram]
 * @prop {string} [whatsApp]
 * @prop {string} [telegram]
 * @prop {string} [web]
 * @prop {string} [email]
 */

/**
 * @typedef {Object} StoreModel
 * @prop {string} id
 * @prop {number} index
 * @prop {string} name
 * @prop {string} description
 * @prop {string} urlImage
 * @prop {Sponsor} sponsor
 * @prop {number} popular
 * @prop {string} creatingDate
 * @prop {string} updateDate
 * @prop {Contact} contact
 * @prop {Schedule[]} schedule
 */
