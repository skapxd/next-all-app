// @ts-check
import Faker from "faker";
import { v4 as idV4 } from "uuid";
import { format } from "date-fns";

/**
 * @param {Object} props
 * @param {number} props.from
 * @param {number} props.limit
 */
export const getListStore = (props) => {
  const { from, limit } = props;
  const listOfStoreModel = [];

  for (let index = from; index < limit + from; index++) {
    /**@type {StoreModel} */
    const storeModel = {
      index,
      contact: {
        instagram: "FrankenLuna",
        whatsApp: "573143750278",
        telegram: "@franken_luna",
        email: "Franken@luna.app",
      },
      description: Faker.lorem.paragraph(),
      id: idV4(),
      creatingDate: Faker.date.recent().toString(),
      name: Faker.company.companyName(),
      popular: Faker.datatype.number(5),
      sponsor: {
        index: 0,
        isSponsor: true,
      },
      updateDate: format(new Date(1999, 4, 6), "dd/MM/yy"),
      urlImage: `https://picsum.photos/400/400?image=${index}`,
      schedule: [
        {
          day: 0,
          hour: "close",
        },
        {
          day: 1,
          hour: "9:00 a.m - 6:00 p.m",
        },
        {
          day: 2,
          hour: "9:00 a.m - 6:00 p.m",
        },
        {
          day: 3,
          hour: "9:00 a.m - 6:00 p.m",
        },
        {
          day: 4,
          hour: "9:00 a.m - 6:00 p.m",
        },
        {
          day: 5,
          hour: "9:00 a.m - 6:00 p.m",
        },
        {
          day: 6,
          hour: "9:00 a.m - 6:00 p.m",
        },
      ],
    };

    listOfStoreModel.push(storeModel);
  }

  return listOfStoreModel;
};
