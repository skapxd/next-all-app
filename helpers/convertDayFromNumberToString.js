// @ts-check
/**
 *
 * @param {Object} props
 * @param {'es' | 'en'} [props.language]
 * @param {number} [props.day]
 */
export const convertDayFromNumberToString = (props) => {
  const { language = "en", day = 0 } = props;

  const mapDays = {
    es: {
      0: "Domingo",
      1: "Lunes",
      2: "Martes",
      3: "Miércoles",
      4: "Jueves",
      5: "Viernes",
      6: "Sábado",
    },
    en: {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    },
  };

  const _ = mapDays[language][day];

  return _;
};
