import { Debounce } from "helpers/debounce";
import { useMemo } from "react";

/**
 * @param {Object} props
 * @param {() => void} [props.fn]
 * @param {any[]} [props.dependencies]
 * @param {number} [props.delay]
 */
export const useDebounce = (props) => {
  const {
    dependencies = [],
    fn = () => console.log("default function of useDebounce"),
    delay = 0,
  } = props;

  const genericDebounce = useMemo(() => {
    return Debounce({
      delay,
      fn,
    });
  }, dependencies);

  return genericDebounce
};
