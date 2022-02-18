// @ts-check

/**
 * @typedef {Object} CommentType
 * @prop {string} user
 * @prop {string} description
 * @prop {string} dateOfCreate
 * @prop {number} likes
 */

export class MediaType {
  static image = "image";
  static video = "video";
}

/**
 * @typedef {Object} PostModel
 * @prop {MediaType} mediaType
 * @prop {string} id
 * @prop {string} url
 * @prop {number} likes
 * @prop {CommentType[]} comment
 * @prop {string} description
 * @prop {string} createDate
 */
