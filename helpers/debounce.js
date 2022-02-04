// @ts-check

/**
 * @param {Object} props
 * @param {(...any) => Promise<void> } [props.fn]
 * @param {number} [props.delay]
 * @param {boolean} [props.immediate]
 * @returns
 */

export function Debounce(props) {
  const {
    fn = () => console.log("default func of the debounce"),
    delay: wait = 300,
    immediate = false,
  } = props;

  let timerId;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function () {
      timerId = null;
      if (!immediate) fn.apply(context, args);
    };

    let callNow = immediate && !timerId;

    clearTimeout(timerId);

    timerId = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
}
