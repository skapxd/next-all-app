// @ts-check
import Faker from "faker";
import { v4 as idV4 } from "uuid";
import { MediaType } from "model/PostModel";

/**
 * @param {Object} props
 * @param {number} props.from
 * @param {number} props.limit
 */
export const getListPost = (props) => {
  const { from, limit } = props;
  const listOfPostModel = [];

  for (let index = from; index < limit + from; index++) {
    /**@type {import("model/PostModel").PostModel} */
    const postModel = {
      id: idV4(),
      comment: [],
      mediaType: MediaType.image,
      likes: Faker.datatype.number(9000),
      description: Faker.lorem.paragraph(),
      createDate: Faker.date.recent().toString(),
      url: `https://picsum.photos/180/320?image=${index}`,
    };

    listOfPostModel.push(postModel);
  }

  return listOfPostModel;
};
